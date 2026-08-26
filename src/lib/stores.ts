export const APP_STORE_URL = 'https://apps.apple.com/ch/app/id6744942564'
export const TESTFLIGHT_URL = 'https://testflight.apple.com/join/MZ3HNzDW'
export const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=ch.agricoltivio.coltivio'

// The iOS listing is not public yet, so the iOS CTA still resolves to TestFlight to avoid a 404.
// The copy already speaks of the App Store. Point this at APP_STORE_URL once the listing is live.
export const IOS_DOWNLOAD_URL = TESTFLIGHT_URL
