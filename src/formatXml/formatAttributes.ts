import { AttributeMap } from "./AttributeMap";
import { formatAttribute } from "./formatAttribute";

export function formatAttributes(
  attributes?: AttributeMap,
) {
  if (!attributes) return [];
  return Object.keys(attributes).map((name) =>
    formatAttribute(name, attributes[name]),
  );
}
