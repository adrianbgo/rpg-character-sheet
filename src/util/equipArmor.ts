import { ArmorTypes } from "../types/Armor"
import { Attribute } from "../types/Attribute";
import { Skill } from "../types/Skill";
export const equipArmor = (armorType: string, attributes: { [key: string]: Attribute }, skills: { [key: string]: Skill }): void => {
    const armor = ArmorTypes[armorType];
    attributes.armorBonus.value = armor.bonus;
    console.log(attributes.armorBonus.value);
}