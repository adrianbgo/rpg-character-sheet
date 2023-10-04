export interface Attribute {
    name: string;
    value: number;
    computed: boolean;
    formula?: () => number;
    dependencies?: string[];
}

export const InitialAttributes = () => {
    const parent: { [key: string]: Attribute } = {
        strength: {
            name: "strength",
            value: 0,
            computed: false,
            dependencies: ['vitality']
        },
        dexterity: {
            name: "dexterity",
            value: 0,
            computed: false
        },
        mind: {
            name: "mind",
            value: 0,
            computed: false
        },
        presence: {
            name: "presence",
            value: 0,
            computed: false
        },
        vitality: {
            name: "vitality",
            value: 0,
            computed: true,
            formula: () => parent.strength.value + 3,
        },
        evasion: {
            name: "evasion",
            value: 0,
            computed: true,
            formula: () => parent.dexterity.value + 10,
        },
        armor: {
            name: "armor",
            value: 0,
            computed: true,
            formula: () => parent.evasion.value,
        },
        alacrity: {
            name: "alacrity",
            value: 0,
            computed: true,
            formula: () => parent.mind.value + parent.dexterity.value,
        },
        tenacity: {
            name: "tenacity",
            value: 0,
            computed: true,
            formula: () => parent.presence.value + 1,
        },
        power: {
            name: "power",
            value: 0,
            computed: true,
            formula: () => 0
        },
    };

    return parent;
}