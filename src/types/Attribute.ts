export interface Attribute {
  name: string;
  value: number;
  computed: boolean;
  dependents?: string[];
}

export const InitialAttributes = {
  strength: {
    name: "strength",
    value: 0,
    computed: false,
    dependents: ["vitality"],
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
  get vitality() {
    return {
      name: "vitality",
      value: this.strength.value + 3,
      computed: true,
    };
  },
  get evasion() {
    return {
      name: "evasion",
      value: this.dexterity.value + 10,
      computed: true,
    };
  },
  get armor() {
    return {
      name: "armor",
      value: this.evasion.value,
      computed: true,
    };
  },
  get alacrity() {
    return {
      name: "alacrity",
      value: this.mind.value + this.dexterity.value,
      computed: true,
    };
  },
  get tenacity() {
    return {
      name: "tenacity",
      value: this.presence.value + 1,
      computed: true,
    };
  },
  get power() {
    return {
      name: "power",
      value: 0,
      computed: true,
    };
  },
};
