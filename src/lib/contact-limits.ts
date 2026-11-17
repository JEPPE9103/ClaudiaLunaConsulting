export const CONTACT_LIMITS = {
  name: 120,
  company: 160,
  email: 254,
  message: 5000,
  minMessage: 10,
  minSubmitMs: 2500,
  rateLimitWindowMs: 15 * 60 * 1000,
  rateLimitMax: 5,
} as const;
