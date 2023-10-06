export interface Attribute {
  name: string;
  value: number;
  computed: boolean;
  dependents?: string[];
  formula?: (dependentValues: number[]) => number;
  static?: boolean;
  damage?: number;
  incrementable?: boolean;
  usage: number;
}

export const InitialAttributes = {
  strength: {
    name: "strength",
    value: 0,
    computed: false,
    usage: 0,
  },
  dexterity: {
    name: "dexterity",
    value: 0,
    computed: false,
    usage: 0,
  },
  mind: {
    name: "mind",
    value: 0,
    computed: false,
    usage: 0,
  },
  presence: {
    name: "presence",
    value: 0,
    computed: false,
    usage: 0,
  },
  vitality: {
    name: "vitality",
    value: 0,
    computed: true,
    dependents: ["strength"],
    formula: ([strength]: number[]) => strength + 3,
    damage: 0,
    usage: 0,
  },
  evasion: {
    name: "evasion",
    value: 0,
    computed: true,
    dependents: ["dexterity", "armorReduction"],
    formula: ([dexterity, armorReduction]: number[]) => dexterity + 10 - armorReduction,
    usage: 0,
  },
  armor: {
    name: "armor",
    value: 0,
    computed: true,
    dependents: ["evasion", "armorBonus"],
    formula: ([evasion, armorBonus]: number[]) => evasion + armorBonus,
    usage: 0,
  },
  alacrity: {
    name: "alacrity",
    value: 0,
    computed: true,
    dependents: ["mind", "dexterity"],
    formula: ([mind, dexterity]: number[]) => mind + dexterity,
    usage: 0,
  },
  tenacity: {
    name: "tenacity",
    value: 0,
    computed: true,
    dependents: ["presence", "usage"],
    formula: ([presence, usage]: number[]) => presence + 1 - usage,
    incrementable: true,
    usage: 0,
  },
  power: {
    name: "power",
    value: 0,
    computed: true,
    dependents: [],
    formula: () => 0,
    usage: 0,
  },
  armorBonus: {
    name: "armorBonus",
    value: 0,
    computed: false,
    dependents: [],
    static: true,
    usage: 0,
  },
  armorReduction: {
    name: "armorReduction",
    value: 0,
    computed: false,
    dependents: [],
    static: true,
    usage: 0,
  }
};
