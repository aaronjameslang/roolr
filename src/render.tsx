import { Specification } from "./Specification";
import { formatElement } from "./formatXml/formatElement";
import { h } from "./jsx";
import { Defs } from "./components/Defs";
import { Background } from "./components/Background";
import { Outline } from "./components/Outline";
import { ScaleBar } from "./components/ScaleBar";

export function render(spec: Specification) {
  const svgWidth = spec.length * 2;
  const svgHeight = spec.width * 2 + 30;
  const offsetX = (svgWidth - spec.length) / 2;
  const offsetY =
    (svgHeight - spec.width - 30) / 2;

  const root = {
    name: "svg",
    attributes: {
      width: svgWidth,
      height: svgHeight,
      xmlns: "http://www.w3.org/2000/svg",
    },
    children: [
      <Defs />,
      <Background
        width={svgWidth}
        height={svgHeight}
      />,
      <Outline
        spec={spec}
        offsetX={offsetX}
        offsetY={offsetY}
      />,
      <ScaleBar
        svgWidth={svgWidth}
        svgHeight={svgHeight}
      />,
    ],
  };
  return formatElement(root);
}
