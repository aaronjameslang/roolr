import { h } from "../jsx";

interface BackgroundProps {
  width: number;
  height: number;
  children?: any[];
}

export function Background({ width, height, children }: BackgroundProps) {
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
