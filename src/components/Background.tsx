import { h } from "../jsx";

interface BackgroundProps {
  width: number;
  height: number;
}

export function Background({ width, height }: BackgroundProps) {
  return (
    <rect
      x={0}
      y={0}
      width={width}
      height={height}
      fill="url(#bgGradient)"
    />
  );
}
