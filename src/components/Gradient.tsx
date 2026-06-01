import { h } from "../jsx";

interface GradientProps {
  children?: any[];
}

export function Gradient({ children }: GradientProps = {}) {
  return (
    <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#999999" />
      <stop offset="100%" stop-color="#CCCCCC" />
    </linearGradient>
  );
}
