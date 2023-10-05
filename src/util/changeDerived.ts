import { Attribute } from "../types/Attribute";

export const changeDerived = (attributeList: { [key: string]: Attribute }) => {
    const attributeNames = Object.keys(attributeList);
    const derivedAttributes = attributeNames.filter((attributeName) => attributeList[attributeName].computed);
    derivedAttributes.forEach((attributeName) => {
        const attribute = attributeList[attributeName];
        const { formula, dependents } = attribute;
        if (formula && dependents) {
            const dependentValues = dependents.map((dependentName) => attributeList[dependentName].value);
            attribute.value = formula(dependentValues);
        }
    });
    return attributeList;
}