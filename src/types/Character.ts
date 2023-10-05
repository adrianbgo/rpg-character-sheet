import { Attribute, InitialAttributes } from "./Attribute";
import { InitialSkills, SkillType } from "./Skill";

export interface Character {
    name: string;
    attributes: { [key: string]: Attribute };
    skills: { [key: string]: SkillType };
}

export const InitialCharacter: Character = {
    name: "",
    attributes: InitialAttributes,
    skills: InitialSkills,
}