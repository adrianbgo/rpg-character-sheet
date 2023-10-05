import { Armor, InitialArmorSlots } from "./Armor";
import { Attribute, InitialAttributes } from "./Attribute";
import { InitialSkills, Skill } from "./Skill";

export interface Character {
    name: string;
    attributes: { [key: string]: Attribute };
    skills: { [key: string]: Skill };
    armorSlots: { [key: string]: Armor }
}

export const InitialCharacter: Character = {
    name: "",
    attributes: InitialAttributes,
    skills: InitialSkills,
    armorSlots: InitialArmorSlots
}