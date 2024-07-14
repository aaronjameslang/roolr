import { formatAttributes } from "./formatAttributes";
import { XmlElement } from "./XmlElement";
import { formatOpeningTag } from "./formatOpeningTag";
import { formatClosingTag } from "./formatClosingTag";
import { formatEmptyTag } from "./formatEmptyTag";

export function formatElement(
  element: XmlElement,
): string {
  const { children } =
    element;
  if (!children?.length)
    return formatEmptyTag(element);
  return [
    formatOpeningTag(element),
    ...children.map(formatChild),
    formatClosingTag(element),
  ].join("");
}

export function formatChild(
  child: XmlElement | string,
) {
  if (typeof child === "string") return child;
  return formatElement(child);
}