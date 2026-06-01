export function formatAttribute(
  name: string,
  value: string | number | undefined,
) {
  if (value === undefined) {
    return "";
  }
  return `${name}="${value}"`;
}
