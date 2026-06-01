import { XmlElement } from "./formatXml/XmlElement";

export function h(
  name: string | Function,
  attributes: Record<string, string | number | undefined> | null,
  ...children: (string | any)[]
): XmlElement {
  // Handle component functions
  if (typeof name === "function") {
    return name({ ...attributes, children });
  }

  const element: any = {
    name,
  };

  if (attributes) {
    element.attributes = Object.fromEntries(
      Object.entries(attributes).filter(([_, value]) => value !== undefined)
    );
  }

  if (children.length > 0) {
    element.children = children.flat();
  }

  return element;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [key: string]: any;
    }
  }
}
