import { h } from "../jsx";
import { XmlElement } from "../formatXml/XmlElement";
import { Axis } from "../Specification";

interface TicksProps {
  axes: Axis[];
  length: number;
  offsetX: number;
  offsetY: number;
  rulerHeight: number;
  kerf: number;
}

interface AxisProps {
  axis: Axis;
  length: number;
  offsetX: number;
  offsetY: number;
  rulerHeight: number;
  kerf: number;
}

function Axis({
  axis,
  length,
  offsetX,
  offsetY,
  rulerHeight,
  kerf,
}: AxisProps): XmlElement {
  const tickHeight = axis.tickHeight ?? 3;
  const tickCount = Math.floor(
    length / axis.scale,
  );

  return (
    <g>
      {Array.from(
        { length: tickCount + 1 },
        (_, n) => {
          const x = offsetX + n * axis.scale;
          const isTop = axis.side === "top";
          const y1 = isTop
            ? offsetY
            : offsetY + rulerHeight;
          const y2 = isTop
            ? offsetY + tickHeight
            : offsetY +
              rulerHeight -
              tickHeight;

          return (
            <line
              x1={x}
              y1={y1}
              x2={x}
              y2={y2}
              stroke="red"
              stroke-width={kerf}
            />
          );
        },
      )}
    </g>
  );
}

export function Ticks({
  axes,
  length,
  offsetX,
  offsetY,
  rulerHeight,
  kerf,
}: TicksProps): XmlElement {
  return (
    <g>
      {axes.map((axis) => (
        <Axis
          axis={axis}
          length={length}
          offsetX={offsetX}
          offsetY={offsetY}
          rulerHeight={rulerHeight}
          kerf={kerf}
        />
      ))}
    </g>
  );
}
