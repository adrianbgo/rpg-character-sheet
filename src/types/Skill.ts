export const SkillRank = {
    0: "untrained",
    1: "novice",
    2: "apprentice",
    3: "adept",
    4: "expert",
    5: "master"
}

export interface Skill {
    rank: keyof typeof SkillRank;
    baseAttribute: string;
}

export const InitialSkills: { [key: string]: Skill } = {
    fighting: {
        rank: 0,
        baseAttribute: "strength",
    },
    stealth: {
        rank: 0,
        baseAttribute: "dexterity",
    },
    thievery: {
        rank: 0,
        baseAttribute: "dexterity",
    },
    archery: {
        rank: 0,
        baseAttribute: "dexterity",
    },
    learned: {
        rank: 0,
        baseAttribute: "mind",
    },
    survival: {
        rank: 0,
        baseAttribute: "mind",
    },
    perception: {
        rank: 0,
        baseAttribute: "mind",
    },
    apothecary: {
        rank: 0,
        baseAttribute: "mind",
    },
    intimidation: {
        rank: 0,
        baseAttribute: "presence",
    },
    performance: {
        rank: 0,
        baseAttribute: "presence",
    },
    manipulation: {
        rank: 0,
        baseAttribute: "presence",
    },
    insight: {
        rank: 0,
        baseAttribute: "presence",
    },
    power: {
        rank: 0,
        baseAttribute: "presence",
    },
}