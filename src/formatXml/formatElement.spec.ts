import { formatElement } from "./formatElement";

describe("formatElement", () => {
  it("formats empty tag without attributes", () => {
    const element = {
      name: "hello",
    };
    const actual = formatElement(element);
    expect(actual).toBe("<hello />");
  });
  it("formats empty tag with attributes", () => {
    const element = {
      name: "img",
      attributes: {
        height: "100px",
        width: "140px",
      },
    };
    const actual = formatElement(element);
    expect(actual).toMatchInlineSnapshot(
      `"<img height="100px" width="140px" />"`,
    );
  });
  it("formats parent tag without attributes", () => {
    const element = {
      name: "div",
      children: [{ name: "br" }],
    };
    const actual = formatElement(element);
    expect(actual).toMatchInlineSnapshot(
      `"<div ><br /></div>"`,
    );
  });
  it("formats parent tag with text child", () => {
    const element = {
      name: "p",
      attributes: { id: "my-paragraph" },
      children: ["Hello"],
    };
    const actual = formatElement(element);
    expect(actual).toMatchInlineSnapshot(
      `"<p>Hello</p>"`,
    );
  });
});
