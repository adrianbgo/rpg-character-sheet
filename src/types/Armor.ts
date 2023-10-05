export interface Armor {
    bonus: number;
    limit: number;
    slot: keyof ArmorSlots;
}

export const ArmorTypes: { [key: string]: Armor } = {
    none: {
        bonus: 0,
        limit: 0,
        slot: "chest"
    },
    light: {
        bonus: 1,
        limit: 1,
        slot: "chest"
    },
    medium: {
        bonus: 2,
        limit: 2,
        slot: "chest"
    },
    heavy: {
        bonus: 3,
        limit: 3,
        slot: "chest"
    },
    buffed: {
        bonus: 4,
        limit: 4,
        slot: "chest"
    }
}

export interface ArmorSlots {
    chest: Armor;
}

export const InitialArmorSlots = {
    chest: ArmorTypes.none
}
