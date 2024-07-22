import fs from "node:fs";
import { render } from "../src/render";
import { parse } from "yaml";
import { Specification } from "../src/Specification";

describe("examples", () => {
  const names = fs
    .readdirSync("./examples")
    .filter((name) => name.endsWith(".yml"))
    .map((name) => name.slice(0, -4));
  for (const name of names) {
    const ymlFilename = `./examples/${name}.yml`;
    const svgFilename = `./examples/${name}.svg`;
    it("renders " + name, () => {
      expect(true).toBe(true);
      const ymlText = fs.readFileSync(
        ymlFilename,
        "utf-8",
      );
      const spec = parse(
        ymlText,
      ) as Specification;

      if (!fs.existsSync(svgFilename)) {
        const svgText = render(spec);
        fs.writeFileSync(svgFilename, svgText);
        throw new Error(
          "SVG file not found, written",
        );
      } else {
        const actual = render(spec);
        const expected = fs.readFileSync(
          svgFilename,
          "utf-8",
        );
        expect(expected).toBe(actual);
      }
    });
  }
});
