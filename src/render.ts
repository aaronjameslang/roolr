import { Specification } from "./Specification";
import { formatElement } from "./formatXml/formatElement";

export function render(spec: Specification) {
  const outline = {
    name: "rect",
    attributes: {
      x: 0,
      y: 0,
      width: spec.length,
      height: spec.width,
      fill: "black",
      style: `stroke-width:${spec.kerf ?? 3};stroke:red`,
    },
  };
  const root = {
    name: "svg",
    attributes: {
      width: spec.length,
      height: spec.width,
      xmlns: "http://www.w3.org/2000/svg",
    },
    children: [outline],
  };
  return formatElement(root);
}
