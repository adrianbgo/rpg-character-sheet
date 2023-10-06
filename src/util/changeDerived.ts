import { Attribute } from "../types/Attribute";
import { Skill } from "../types/Skill";

export const changeDerived = (attributeList: { [key: string]: Attribute }, skillList: { [key: string]: Skill }) => {
    const attributeNames = Object.keys(attributeList);
    const derivedAttributes = attributeNames.filter((attributeName) => attributeList[attributeName].computed);
    derivedAttributes.forEach((attributeName) => {
        const attribute = attributeList[attributeName];
        const { formula, dependents, damage } = attribute;
        if (formula && dependents) {
            const dependentValues = dependents.map((dependentName) => {
                return dependentName !== 'usage' ? attributeList[dependentName].value : attribute[dependentName]
            });
            attribute.value = formula(dependentValues);
        }
        if (damage) {
            attribute.value = Math.max(0, attribute.value - damage);
        }
    });
    const skillNames = Object.keys(skillList);
    skillNames.forEach((skillName) => {
        const skill = skillList[skillName];
        const { baseAttribute, rank } = skill;
        if (baseAttribute) {
            skill.rank = Math.min(rank, attributeList[baseAttribute].value) as 0 | 1 | 2 | 3 | 4 | 5;
        }
    })
}