import { h } from "../jsx";
import { XmlElement } from "../formatXml/XmlElement";

interface ScaleBarProps {
  svgWidth: number;
  svgHeight: number;
}

export function ScaleBar({ svgWidth, svgHeight }: ScaleBarProps): XmlElement {
  const scaleBarLength = 20; // 10mm at 2px/mm scale
  const scaleBarX = (svgWidth - scaleBarLength) / 2;
  const scaleBarY = svgHeight - 22;
  return (
    <g>
      <rect
        x={scaleBarX - 5}
        y={scaleBarY - 8}
        width={scaleBarLength + 10}
        height={20}
        fill="white"
        opacity="0.8"
      />
      <line
        x1={scaleBarX}
        y1={scaleBarY}
        x2={scaleBarX + scaleBarLength}
        y2={scaleBarY}
        stroke="black"
        stroke-width={2}
      />
      <line
        x1={scaleBarX}
        y1={scaleBarY - 3}
        x2={scaleBarX}
        y2={scaleBarY + 3}
        stroke="black"
        stroke-width={2}
      />
      <line
        x1={scaleBarX + scaleBarLength}
        y1={scaleBarY - 3}
        x2={scaleBarX + scaleBarLength}
        y2={scaleBarY + 3}
        stroke="black"
        stroke-width={2}
      />
      <text
        x={scaleBarX + scaleBarLength / 2}
        y={scaleBarY + 13}
        text-anchor="middle"
        font-size="10"
        fill="black"
      >
        10mm
      </text>
    </g>
  );
}
