export function toURLSearchParams(obj: any): URLSearchParams {
  const result = new URLSearchParams()

  for (const [key, value] of Object.entries(obj)) {
    if (value === null || value === undefined) {
      continue
    }

    result.set(key, String(value))
  }

  return result
}
