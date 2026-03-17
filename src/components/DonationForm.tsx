import { useState, useEffect, useCallback } from "react";

const PRESET_AMOUNTS = [10, 25, 50, 100];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface Props {
  apiUrl: string;
  lang: string;
  amountLabel: string;
  customPlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  cta: string;
  processing: string;
  error: string;
  thankYouTitle: string;
  thankYouBody: string;
  thankYouClose: string;
}

export function DonationForm({
  apiUrl,
  lang,
  amountLabel,
  customPlaceholder,
  emailLabel,
  emailPlaceholder,
  cta,
  processing,
  error,
  thankYouTitle,
  thankYouBody,
  thankYouClose,
}: Props) {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(25);
  const [customAmount, setCustomAmount] = useState("");
  const [email, setEmail] = useState("");
  const [touched, setTouched] = useState({ email: false, amount: false });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);

  // Show thank-you dialog if returning from successful Stripe checkout
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("donation") === "success") {
      setShowThankYou(true);
      // Clean the query param from the URL without reloading
      const clean = window.location.pathname;
      history.replaceState(null, "", clean);
    }
  }, []);

  const closeThankYou = useCallback(() => setShowThankYou(false), []);

  useEffect(() => {
    if (!showThankYou) return;
    function onKey(e: KeyboardEvent) { if (e.key === "Escape") closeThankYou(); }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [showThankYou, closeThankYou]);

  // The effective amount: custom input takes precedence over preset when it has a value
  const effectiveAmount =
    customAmount !== "" ? parseFloat(customAmount) : selectedAmount;

  const emailInvalid = touched.email && !EMAIL_RE.test(email);
  const amountInvalid =
    touched.amount && (!effectiveAmount || effectiveAmount < 1);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setTouched({ email: true, amount: true });

    if (!effectiveAmount || effectiveAmount < 1 || !EMAIL_RE.test(email))
      return;

    setIsLoading(true);
    setErrorMsg("");

    try {
      const successUrl = `${window.location.origin}${window.location.pathname}?donation=success`;
      const cancelUrl = `${window.location.origin}${window.location.pathname}?donation=cancelled`;

      const res = await fetch(`${apiUrl}/v1/donations/checkout`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept-Language": lang },
        // API expects amount in Rappen (cents), not CHF
        body: JSON.stringify({
          amount: Math.round(effectiveAmount * 100),
          email,
          successUrl,
          cancelUrl,
        }),
      });

      if (!res.ok) {
        // Try to surface the API error message
        const body = (await res.json().catch(() => null)) as {
          error?: string;
        } | null;
        const apiMsg = body?.error ?? "";
        // Strip field prefix like "email: " or "amount: " for cleaner display
        throw new Error(
          apiMsg.includes(": ")
            ? apiMsg.split(": ").slice(1).join(": ")
            : apiMsg,
        );
      }

      const { data } = (await res.json()) as { data: { url: string } };
      window.location.href = data.url;
    } catch (err) {
      const msg = err instanceof Error && err.message ? err.message : "";
      setErrorMsg(msg || error);
      setIsLoading(false);
    }
  }

  return (
    <>
    {showThankYou && (
      <>
        <div className="fixed inset-0 z-50 bg-black/50" aria-hidden="true" onClick={closeThankYou} />
        <div className="fixed inset-0 z-51 flex items-center justify-center p-4">
          <div className="w-full max-w-md rounded-xl border bg-background shadow-xl p-8 space-y-4 text-center">
            <div className="text-4xl">🌱</div>
            <h2 className="text-xl font-bold">{thankYouTitle}</h2>
            <p className="text-muted-foreground leading-relaxed">{thankYouBody}</p>
            <button
              onClick={closeThankYou}
              className="mt-2 inline-flex rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              {thankYouClose}
            </button>
          </div>
        </div>
      </>
    )}
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Preset amount buttons */}
      <div className="space-y-2">
        <label className="text-sm font-medium">{amountLabel}</label>
        <div className="flex flex-wrap gap-2">
          {PRESET_AMOUNTS.map((amount) => (
            <button
              key={amount}
              type="button"
              onClick={() => {
                setSelectedAmount(amount);
                setCustomAmount("");
                setTouched((t) => ({ ...t, amount: false }));
              }}
              className={`rounded-md border px-4 py-2 text-sm font-medium transition-colors ${
                selectedAmount === amount && customAmount === ""
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-input bg-background hover:bg-muted"
              }`}
            >
              CHF {amount}
            </button>
          ))}
          {/* Custom amount */}
          <input
            type="number"
            min="1"
            step="1"
            value={customAmount}
            onChange={(e) => {
              setCustomAmount(e.target.value);
              setSelectedAmount(null);
            }}
            onBlur={() => setTouched((t) => ({ ...t, amount: true }))}
            placeholder={customPlaceholder}
            className={`rounded-md border bg-background px-3 py-2 text-sm w-44 focus:outline-none focus:ring-2 focus:ring-ring ${amountInvalid ? "border-destructive" : "border-input"}`}
          />
        </div>
        {amountInvalid && (
          <p className="text-xs text-destructive">Mindestbetrag: CHF 1</p>
        )}
      </div>

      {/* Email */}
      <div className="space-y-2">
        <label htmlFor="donation-email" className="text-sm font-medium">
          {emailLabel}
        </label>
        <input
          id="donation-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => setTouched((t) => ({ ...t, email: true }))}
          placeholder={emailPlaceholder}
          className={`block w-full max-w-sm rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring ${emailInvalid ? "border-destructive" : "border-input"}`}
        />
        {emailInvalid && (
          <p className="text-xs text-destructive">
            {emailPlaceholder.includes("@")
              ? "Bitte eine gültige E-Mail-Adresse eingeben."
              : "Invalid email address."}
          </p>
        )}
      </div>

      {errorMsg && <p className="text-sm text-destructive">{errorMsg}</p>}

      <button
        type="submit"
        disabled={isLoading}
        className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading
          ? processing
          : `${cta}${effectiveAmount && effectiveAmount > 0 ? ` — CHF ${customAmount !== "" ? customAmount : selectedAmount}` : ""}`}
      </button>
    </form>
    </>
  );
}
