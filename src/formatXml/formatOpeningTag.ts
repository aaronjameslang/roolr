import { XmlElement } from "./XmlElement";
import { formatAttributes } from "./formatAttributes";

export function formatOpeningTag(
  element: XmlElement,
) {
  const { name, attributes } = element;
  if (Object.keys(attributes??{}).length) return `<${name}>`;
  return `<${name} ${formatAttributes(attributes)}>`;
}
