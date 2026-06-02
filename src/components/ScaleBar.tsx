import { h } from "../jsx";
import { XmlElement } from "../formatXml/XmlElement";

interface ScaleBarProps {
  svgWidth: number;
  svgHeight: number;
}

// eslint-disable-next-line max-lines-per-function
export function ScaleBar({
  svgWidth,
  svgHeight,
}: ScaleBarProps): XmlElement {
  const len = 20;
  const x = (svgWidth - len) / 2;
  const y = svgHeight - 22;
  return (
    <g>
      <rect
        x={x - 5}
        y={y - 8}
        width={len + 10}
        height={20}
        fill="white"
        opacity="0.8"
      />
      <line
        x1={x}
        y1={y}
        x2={x + len}
        y2={y}
        stroke="black"
        stroke-width={2}
      />
      <line
        x1={x}
        y1={y - 3}
        x2={x}
        y2={y + 3}
        stroke="black"
        stroke-width={2}
      />
      <line
        x1={x + len}
        y1={y - 3}
        x2={x + len}
        y2={y + 3}
        stroke="black"
        stroke-width={2}
      />
      <text
        x={x + len / 2}
        y={y + 13}
        text-anchor="middle"
        font-size="10"
        fill="black"
      >
        10mm
      </text>
    </g>
  );
}
