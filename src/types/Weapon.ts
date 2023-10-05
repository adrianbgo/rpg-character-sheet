export interface Weapon {
    trait: "dexterity" | "strength";
}

export interface WeaponSlots {
    hand: Weapon;
}

export const WeaponTypes: { [key: string]: Weapon } = {
    none: {
        trait: "strength"
    },
    light: {
        trait: "dexterity"
    },
    heavy: {
        trait: "strength"
    }
}

export const InitialWeaponSlots = {
    hand: WeaponTypes.none
}