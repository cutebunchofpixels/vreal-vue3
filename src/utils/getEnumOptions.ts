export function getEnumOptions<T>(obj: Record<string, T>, getLabel: (value: T) => string) {
  return Object.values(obj).map((value) => ({
    label: getLabel(value),
    value
  }))
}
