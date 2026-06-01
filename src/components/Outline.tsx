import { h } from "../jsx";
import { Specification } from "../Specification";

interface OutlineProps {
  spec: Specification;
  offsetX: number;
  offsetY: number;
}

export function Outline({ spec, offsetX, offsetY }: OutlineProps) {
  return (
    <rect
      x={offsetX}
      y={offsetY}
      width={spec.length}
      height={spec.width}
      fill="black"
      style={`stroke-width:${spec.kerf ?? 3};stroke:red`}
    />
  );
}
