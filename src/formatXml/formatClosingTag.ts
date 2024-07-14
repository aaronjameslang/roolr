import { XmlElement } from "./XmlElement";

export function formatClosingTag(
  element: XmlElement,
) {
  const { name } = element;
  return `</${name}>`;
}
