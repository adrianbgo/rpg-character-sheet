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
    rollValue: number;
}

export const InitialSkills: { [key: string]: Skill } = {
    fighting: {
        rank: 0,
        baseAttribute: "strength",
        rollValue: 0,
    },
    stealth: {
        rank: 0,
        baseAttribute: "dexterity",
        rollValue: 0,
    },
    thievery: {
        rank: 0,
        baseAttribute: "dexterity",
        rollValue: 0,
    },
    archery: {
        rank: 0,
        baseAttribute: "dexterity",
        rollValue: 0,
    },
    learned: {
        rank: 0,
        baseAttribute: "mind",
        rollValue: 0,
    },
    survival: {
        rank: 0,
        baseAttribute: "mind",
        rollValue: 0,
    },
    perception: {
        rank: 0,
        baseAttribute: "mind",
        rollValue: 0,
    },
    apothecary: {
        rank: 0,
        baseAttribute: "mind",
        rollValue: 0,
    },
    intimidation: {
        rank: 0,
        baseAttribute: "presence",
        rollValue: 0,
    },
    performance: {
        rank: 0,
        baseAttribute: "presence",
        rollValue: 0,
    },
    manipulation: {
        rank: 0,
        baseAttribute: "presence",
        rollValue: 0,
    },
    insight: {
        rank: 0,
        baseAttribute: "presence",
        rollValue: 0,
    },
    power: {
        rank: 0,
        baseAttribute: "presence",
        rollValue: 0,
    },
}