import { Attribute } from "../types/Attribute";

export const changeAttribute = (
  attribute: string,
  attributeList: { [key: string]: Attribute },
  value: number
): { [key: string]: Attribute } => {
  attributeList[attribute].value = value;
  console.log(value);
  console.log(attributeList[attribute].value);
  return attributeList;
};
