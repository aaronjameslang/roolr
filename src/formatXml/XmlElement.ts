import { AttributeMap } from "./AttributeMap";

export interface XmlElement {
  name: string;
  attributes?: AttributeMap;
  children?: Array<XmlElement | string>;
}
