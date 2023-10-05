export interface Attribute {
  name: string;
  value: number;
  computed: boolean;
  dependents?: string[];
  formula?: (dependentValues: number[]) => number;
}

export const InitialAttributes = {
  strength: {
    name: "strength",
    value: 0,
    computed: false,
  },
  dexterity: {
    name: "dexterity",
    value: 0,
    computed: false,
  },
  mind: {
    name: "mind",
    value: 0,
    computed: false,
  },
  presence: {
    name: "presence",
    value: 0,
    computed: false,
  },
  vitality: {
    name: "vitality",
    value: 0,
    computed: true,
    dependents: ["strength"],
    formula: ([strength]: number[]) => strength + 3,
  },
  evasion: {
    name: "evasion",
    value: 0,
    computed: true,
    dependents: ["dexterity"],
    formula: ([dexterity]: number[]) => dexterity + 10,
  },
  armor: {
    name: "armor",
    value: 0,
    computed: true,
    dependents: ["evasion"],
    formula: ([evasion]: number[]) => evasion,
  },
  alacrity: {
    name: "alacrity",
    value: 0,
    computed: true,
    dependents: ["mind", "dexterity"],
    formula: ([mind, dexterity]: number[]) => mind + dexterity,
  },
  tenacity: {
    name: "tenacity",
    value: 0,
    computed: true,
    dependents: ["presence"],
    formula: ([presence]: number[]) => presence + 1,
  },
  power: {
    name: "power",
    value: 0,
    computed: true,
    dependents: [],
    formula: () => 0,
  },
};
