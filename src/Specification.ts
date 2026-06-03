export interface Axis {
  scale: number;
  side: "top" | "bottom";
  tickHeight?: number;
}

export interface Specification {
  length: number;
  width: number;
  kerf: number;
  axes?: Axis[];
}
