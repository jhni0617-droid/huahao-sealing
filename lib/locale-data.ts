/**
 * Locale-aware data getter.
 * Returns data for the matching locale, falling back to English for unsupported locales.
 */
export function getLocalized<T>(data: Record<string, T>, locale: string): T {
  return data[locale] ?? data.en ?? data.zh
}
