export function getEnumOptions<T>(obj: Record<string, T>) {
  return Object.values(obj).map((value) => ({
    label: value,
    value
  }))
}
