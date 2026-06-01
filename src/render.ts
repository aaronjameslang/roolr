import { Specification } from "./Specification";
import { formatElement } from "./formatXml/formatElement";

export function render(spec: Specification) {
  const svgWidth = spec.length * 2;
  const svgHeight = spec.width * 2;
  const offsetX = (svgWidth - spec.length) / 2;
  const offsetY = (svgHeight - spec.width) / 2;

  const gradient = {
    name: "linearGradient",
    attributes: {
      id: "bgGradient",
      x1: "0%",
      y1: "0%",
      x2: "100%",
      y2: "100%",
    },
    children: [
      {
        name: "stop",
        attributes: {
          offset: "0%",
          "stop-color": "#999999",
        },
      },
      {
        name: "stop",
        attributes: {
          offset: "100%",
          "stop-color": "#CCCCCC",
        },
      },
    ],
  };

  const defs = {
    name: "defs",
    children: [gradient],
  };

  const background = {
    name: "rect",
    attributes: {
      x: 0,
      y: 0,
      width: svgWidth,
      height: svgHeight,
      fill: "url(#bgGradient)",
    },
  };

  const outline = {
    name: "rect",
    attributes: {
      x: offsetX,
      y: offsetY,
      width: spec.length,
      height: spec.width,
      fill: "black",
      style: `stroke-width:${spec.kerf ?? 3};stroke:red`,
    },
  };

  const root = {
    name: "svg",
    attributes: {
      width: svgWidth,
      height: svgHeight,
      xmlns: "http://www.w3.org/2000/svg",
    },
    children: [defs, background, outline],
  };
  return formatElement(root);
}
