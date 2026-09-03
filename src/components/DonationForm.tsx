import { useState, useEffect, useCallback, useId } from "react";
import { useDialog } from "@/lib/useDialog";
import { buttonClass } from "@/lib/button";
import { inputClass } from "@/lib/input";

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
  errorAmount: string;
  errorEmail: string;
  thankYouTitle: string;
  thankYouBody: string;
  thankYouClose: string;
  closeLabel: string;
  /** Restyles the control colours for a gradient band. */
  onDark?: boolean;
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
  errorAmount,
  errorEmail,
  thankYouTitle,
  thankYouBody,
  thankYouClose,
  closeLabel,
  onDark = false,
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
  const thankYouRef = useDialog<HTMLDivElement>(showThankYou, closeThankYou);
  const thankYouTitleId = useId();

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
        <div
          ref={thankYouRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby={thankYouTitleId}
          className="fixed inset-0 z-[51] flex items-center justify-center p-4"
        >
          <div className="w-full max-w-md rounded-xl border bg-background shadow-xl p-8 space-y-4 text-center">
            <h2 id={thankYouTitleId} className="text-xl font-bold">{thankYouTitle}</h2>
            <p className="text-muted-foreground leading-relaxed">{thankYouBody}</p>
            <button
              onClick={closeThankYou}
              aria-label={closeLabel}
              className={buttonClass("primary", "sm", "mt-2")}
            >
              {thankYouClose}
            </button>
          </div>
        </div>
      </>
    )}
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Preset amount buttons */}
      <fieldset className="space-y-2">
        <legend className="text-sm font-medium">{amountLabel}</legend>
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
              aria-pressed={selectedAmount === amount && customAmount === ""}
              className={buttonClass(
                selectedAmount === amount && customAmount === ""
                  ? onDark
                    ? "onBrand"
                    : "primary"
                  : onDark
                    ? "onBrandGlass"
                    : "secondary",
                "sm",
              )}
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
            className={inputClass(amountInvalid, "w-44")}
          />
        </div>
        {amountInvalid && (
          <p className="text-xs text-destructive" role="alert">{errorAmount}</p>
        )}
      </fieldset>

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
          className={inputClass(emailInvalid, "block w-full max-w-sm")}
        />
        {emailInvalid && (
          <p className="text-xs text-destructive" role="alert">{errorEmail}</p>
        )}
      </div>

      {errorMsg && <p className="text-sm text-destructive" role="alert">{errorMsg}</p>}

      <button
        type="submit"
        disabled={isLoading}
        className={buttonClass(onDark ? "onBrandAccent" : "primary")}
      >
        {isLoading
          ? processing
          : `${cta}${effectiveAmount && effectiveAmount > 0 ? `, CHF ${customAmount !== "" ? customAmount : selectedAmount}` : ""}`}
      </button>
    </form>
    </>
  );
}
