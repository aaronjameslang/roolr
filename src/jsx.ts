import { XmlElement } from "./formatXml/XmlElement";

type ComponentFunction = (props: Record<string, unknown>) => XmlElement;

export function h(
  name: string | ComponentFunction,
  attributes: Record<string, string | number | undefined> | null,
  ...children: (string | XmlElement)[]
): XmlElement {
  // Handle component functions
  if (typeof name === "function") {
    return name({ ...attributes, children });
  }

  const element: XmlElement = {
    name,
  };

  element.attributes = attributes??undefined;

  if (children.length > 0) {
    element.children = children.flat();
  }

  return element;
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      [key: string]: unknown;
    }
  }
}
