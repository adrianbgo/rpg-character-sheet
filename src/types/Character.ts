import { Armor, InitialArmorSlots } from "./Armor";
import { Attribute, InitialAttributes } from "./Attribute";
import { InitialSkills, Skill } from "./Skill";
import { InitialWeaponSlots, Weapon } from "./Weapon";

export interface Character {
    name: string;
    attributes: { [key: string]: Attribute };
    skills: { [key: string]: Skill };
    armorSlots: { [key: string]: Armor }
    weaponSlots: { [key: string]: Weapon }
}

export const InitialCharacter: Character = {
    name: "",
    attributes: InitialAttributes,
    skills: InitialSkills,
    armorSlots: InitialArmorSlots,
    weaponSlots: InitialWeaponSlots
}