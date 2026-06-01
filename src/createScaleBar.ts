export function createScaleBar(svgWidth: number, svgHeight: number) {
  const scaleBarLength = 20; // 10mm at 2px/mm scale
  const scaleBarX = (svgWidth - scaleBarLength) / 2;
  const scaleBarY = svgHeight - 22;

  const scaleBarChildren: Array<string | any> = [
    {
      name: "rect",
      attributes: {
        x: scaleBarX - 5,
        y: scaleBarY - 8,
        width: scaleBarLength + 10,
        height: 20,
        fill: "white",
        opacity: "0.8",
      },
    },
    {
      name: "line",
      attributes: {
        x1: scaleBarX,
        y1: scaleBarY,
        x2: scaleBarX + scaleBarLength,
        y2: scaleBarY,
        stroke: "black",
        "stroke-width": 2,
      },
    },
    {
      name: "line",
      attributes: {
        x1: scaleBarX,
        y1: scaleBarY - 3,
        x2: scaleBarX,
        y2: scaleBarY + 3,
        stroke: "black",
        "stroke-width": 2,
      },
    },
    {
      name: "line",
      attributes: {
        x1: scaleBarX + scaleBarLength,
        y1: scaleBarY - 3,
        x2: scaleBarX + scaleBarLength,
        y2: scaleBarY + 3,
        stroke: "black",
        "stroke-width": 2,
      },
    },
    {
      name: "text",
      attributes: {
        x: scaleBarX + scaleBarLength / 2,
        y: scaleBarY + 13,
        "text-anchor": "middle",
        "font-size": "10",
        fill: "black",
      },
      children: ["10mm"],
    },
  ];

  return {
    name: "g",
    children: scaleBarChildren,
  };
}
