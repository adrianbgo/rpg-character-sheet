import { Attribute } from "./Attribute";
import { InitialAttributes } from "./Attribute";

export const SkillRank = {
    0: "untrained",
    1: "novice",
    2: "apprentice",
    3: "adept",
    4: "expert",
    5: "master"
}

export interface SkillType {
    rank: 0 | 1 | 2 | 3 | 4 | 5;
    baseAttribute: string;
    change: () => void;
}

export const InitialSkills: { [key: string]: SkillType } = {
    fighting: {
        rank: 0,
        baseAttribute: "strength",
        change: () => { },
    },
    stealth: {
        rank: 0,
        baseAttribute: "dexterity",
        change: () => { },
    },
    thievery: {
        rank: 0,
        baseAttribute: "dexterity",
        change: () => { },
    },
    archery: {
        rank: 0,
        baseAttribute: "dexterity",
        change: () => { },
    },
    learned: {
        rank: 0,
        baseAttribute: "mind",
        change: () => { },
    },
    survival: {
        rank: 0,
        baseAttribute: "mind",
        change: () => { },
    },
    perception: {
        rank: 0,
        baseAttribute: "mind",
        change: () => { },
    },
    apothecary: {
        rank: 0,
        baseAttribute: "mind",
        change: () => { },
    },
    intimidation: {
        rank: 0,
        baseAttribute: "presence",
        change: () => { },
    },
    performance: {
        rank: 0,
        baseAttribute: "presence",
        change: () => { },
    },
    manipulation: {
        rank: 0,
        baseAttribute: "presence",
        change: () => { },
    },
    insight: {
        rank: 0,
        baseAttribute: "presence",
        change: () => { },
    },
    power: {
        rank: 0,
        baseAttribute: "presence",
        change: () => { },
    },
}