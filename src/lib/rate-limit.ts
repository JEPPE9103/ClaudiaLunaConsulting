import { CONTACT_LIMITS } from "@/lib/contact-limits";

type RateBucket = {
  count: number;
  resetAt: number;
};

/**
 * Soft per-instance rate limit.
 * On Vercel serverless this is best-effort across warm instances only.
 * Primary spam controls remain honeypot, timing checks, validation and Resend limits.
 */
const rateBuckets = new Map<string, RateBucket>();

export function checkRateLimit(key: string) {
  const now = Date.now();
  const existing = rateBuckets.get(key);

  if (!existing || existing.resetAt <= now) {
    rateBuckets.set(key, {
      count: 1,
      resetAt: now + CONTACT_LIMITS.rateLimitWindowMs,
    });
    return { allowed: true as const, remaining: CONTACT_LIMITS.rateLimitMax - 1 };
  }

  if (existing.count >= CONTACT_LIMITS.rateLimitMax) {
    return {
      allowed: false as const,
      remaining: 0,
      retryAfterMs: existing.resetAt - now,
    };
  }

  existing.count += 1;
  rateBuckets.set(key, existing);
  return {
    allowed: true as const,
    remaining: CONTACT_LIMITS.rateLimitMax - existing.count,
  };
}

/** Test helper — clears in-memory buckets. */
export function resetRateLimitStore() {
  rateBuckets.clear();
}
