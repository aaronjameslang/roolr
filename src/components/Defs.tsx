import { h } from "../jsx";
import { Gradient } from "./Gradient";

interface DefsProps {
  children?: any[];
}

export function Defs({ children }: DefsProps = {}) {
  return (
    <defs>
      <Gradient />
    </defs>
  );
}
