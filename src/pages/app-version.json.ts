import type { APIRoute } from 'astro'
import { RELEASES } from '@/data/releases'

/**
 * Machine-readable release list for the mobile app (update banner). Notes are left
 * out, the app links to /releases for those. The whole list is published, future
 * dates included: the site is static, so the app decides what counts as released.
 */
export const GET: APIRoute = () => {
  const releases = RELEASES.map(({ version, releasedAt, platforms, minSupportedVersion }) => ({
    version,
    releasedAt,
    platforms,
    minSupportedVersion,
  }))
  return new Response(JSON.stringify({ releases }), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  })
}
