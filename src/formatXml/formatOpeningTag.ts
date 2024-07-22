import { XmlElement } from "./XmlElement";
import { formatAttributes } from "./formatAttributes";

export function formatOpeningTag(
  element: XmlElement,
) {
  const { name, attributes } = element;
  return (
    [
      `<${name}`,
      ...formatAttributes(attributes),
    ].join(" ") + ">"
  );
}
