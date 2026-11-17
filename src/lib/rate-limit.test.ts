import { beforeEach, describe, expect, it } from "vitest";
import { CONTACT_LIMITS } from "@/lib/contact-limits";
import { checkRateLimit, resetRateLimitStore } from "@/lib/rate-limit";

describe("checkRateLimit", () => {
  beforeEach(() => {
    resetRateLimitStore();
  });

  it("allows requests under the limit", () => {
    for (let i = 0; i < CONTACT_LIMITS.rateLimitMax; i += 1) {
      expect(checkRateLimit("test-ip").allowed).toBe(true);
    }
  });

  it("blocks requests over the limit", () => {
    for (let i = 0; i < CONTACT_LIMITS.rateLimitMax; i += 1) {
      checkRateLimit("burst-ip");
    }
    const blocked = checkRateLimit("burst-ip");
    expect(blocked.allowed).toBe(false);
    if (!blocked.allowed) {
      expect(blocked.retryAfterMs).toBeGreaterThan(0);
    }
  });
});
