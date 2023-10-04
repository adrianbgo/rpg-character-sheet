export const AttributeList: Array<IBaseAttribute> = [
    {
        name: "strength",
        computed: false,
    },
    {
        name: "dexterity",
        computed: false,
    },
    {
        name: "mind",
        computed: false,
    },
    {
        name: "presence",
        computed: false
    },
    {

    }
]

export interface IBaseAttribute {
    name: string;
    computed: boolean;
    formula?: () => number;
}