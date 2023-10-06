import React, { useState } from "react";
import TextInput from "../TextInput/TextInput";
import Stat from "../Stat/Stat";
import Skill from "../Skill/Skill";

import "../../styles/components/CharacterSheet.scss";
import { changeDerived } from "../../util/changeDerived";
import { Character, InitialCharacter } from "../../types/Character";
import { ArmorTypes } from "../../types/Armor";
import ArmorComponent from "../ArmorComponent/ArmorComponent";
import WeaponComponent from "../WeaponComponent/WeaponComponent";
import { WeaponTypes } from "../../types/Weapon";

const CharacterSheet: React.FC = () => {
    const [character, setCharacter] = useState<Character>(InitialCharacter);
    changeDerived(character.attributes, character.skills);
    return (
        <div className="container">
            <h1>Character Sheet</h1>
            <form className="character-sheet">
                <section id="name">
                    <TextInput
                        label="Character Name"
                        id="name"
                        placeholder="Johnny Appleseed"
                        onChange={(val) => setCharacter({ ...character, name: val })}
                        value={character.name}
                    />
                </section>
                <section id="base-attributes">
                    <h2>Base Attributes</h2>
                    {Object.keys(character.attributes).map((key: string) => {
                        if (!character.attributes[key].computed && !character.attributes[key].static) {
                            return (
                                <Stat
                                    id={key}
                                    key={key}
                                    type={key}
                                    stat={character.attributes[key]}
                                    incrementValue={(newUsage) => {
                                        setCharacter({
                                            ...character,
                                            attributes: {
                                                ...character.attributes,
                                                [key]: {
                                                    ...character.attributes[key],
                                                    usage: newUsage,
                                                }
                                            }
                                        }
                                        )
                                    }}
                                    takeDamage={(newDamage: number) => {
                                        setCharacter({
                                            ...character,
                                            attributes: {
                                                ...character.attributes,
                                                [key]: {
                                                    ...character.attributes[key],
                                                    damage: newDamage
                                                }
                                            },
                                            damage: newDamage
                                        })
                                    }}
                                />
                            );
                        }
                        return <React.Fragment key={key}></React.Fragment>;
                    })}
                </section>
                <section id='equippables'>
                    <h2>Armor</h2>
                    {Object.keys(character.armorSlots).map((key: string) => {
                        return (
                            <ArmorComponent onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                                setCharacter({
                                    ...character,
                                    attributes: {
                                        ...character.attributes,
                                        armorBonus: {
                                            ...character.attributes.armorBonus,
                                            value: ArmorTypes[e.target.value].bonus
                                        },
                                        armorReduction: {
                                            ...character.attributes.armorReduction,
                                            value: ArmorTypes[e.target.value].limit
                                        }
                                    },
                                    armorSlots: {
                                        ...character.armorSlots,
                                        [key]: {
                                            bonus: ArmorTypes[e.target.value].bonus,
                                            limit: ArmorTypes[e.target.value].limit,
                                            slot: ArmorTypes[e.target.value].slot
                                        }
                                    }
                                })
                            }} label={key} />
                        )
                    })}
                    <h2>Weapon</h2>
                    {Object.keys(character.weaponSlots).map((key: string) => {
                        return (
                            <WeaponComponent onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                                setCharacter({
                                    ...character,
                                    attributes: {
                                        ...character.attributes,
                                        armorBonus: {
                                            ...character.attributes.armorBonus,
                                            value: ArmorTypes[e.target.value].bonus
                                        },
                                        armorReduction: {
                                            ...character.attributes.armorReduction,
                                            value: ArmorTypes[e.target.value].limit
                                        }
                                    },
                                    weaponSlots: {
                                        ...character.weaponSlots,
                                        [key]: WeaponTypes[e.target.value]
                                    }
                                })
                            }} label={key} />
                        )
                    })}
                </section>
                <section id="combat-attributes">
                    <h2>Combat Attributes</h2>
                    {Object.keys(character.attributes).map((key: string) => {
                        if (character.attributes[key].computed && !character.attributes[key].static) {
                            return (
                                <Stat
                                    // key={key}
                                    // type={key}
                                    // computed={character.attributes[key].computed}
                                    // value={character.attributes[key].value}
                                    // onChange={() => { }}
                                    // id={key}
                                    // damage={character.attributes[key].damage !== undefined ? character.attributes[key].damage : false}
                                    // takeDamage={(newDamage: number) => {
                                    //     setCharacter({
                                    //         ...character,
                                    //         attributes: {
                                    //             ...character.attributes,
                                    //             [key]: {
                                    //                 ...character.attributes[key],
                                    //                 damage: newDamage
                                    //             }
                                    //         },
                                    //         damage: newDamage
                                    //     })
                                    // }}
                                    // incrementable={character.attributes[key].incrementable}
                                    // changeValue={(newUsage) => {
                                    //     setCharacter({
                                    //         ...character,
                                    //         attributes: {
                                    //             ...character.attributes,
                                    //             [key]: {
                                    //                 ...character.attributes[key],
                                    //                 usage: newUsage,
                                    //             }
                                    //         }
                                    //     }
                                    //     )
                                    // }}
                                    // usage={typeof character.attributes[key].usage === 'number' ? character.attributes[key].usage : 0}
                                    id={key}
                                    key={key}
                                    type={key}
                                    stat={character.attributes[key]}
                                    incrementValue={(newUsage) => {
                                        setCharacter({
                                            ...character,
                                            attributes: {
                                                ...character.attributes,
                                                [key]: {
                                                    ...character.attributes[key],
                                                    usage: newUsage,
                                                }
                                            }
                                        }
                                        )
                                    }}
                                    takeDamage={(newDamage: number) => {
                                        setCharacter({
                                            ...character,
                                            attributes: {
                                                ...character.attributes,
                                                [key]: {
                                                    ...character.attributes[key],
                                                    damage: newDamage
                                                }
                                            },
                                            damage: newDamage
                                        })
                                    }}
                                />
                            );
                        }
                        return <React.Fragment key={key}></React.Fragment>;
                    })}
                </section>
                <section id="skills">
                    <h2>Skills</h2>
                    {Object.keys(character.skills).map((key: string) => {
                        return (
                            <Skill
                                key={key}
                                name={key}
                                attributes={character.attributes}
                                skill={character.skills[key]}
                                change={(newRank: 0 | 1 | 2 | 3 | 4 | 5) => {
                                    setCharacter({
                                        ...character,
                                        skills: {
                                            ...character.skills,
                                            [key]: {
                                                ...character.skills[key],
                                                rank: newRank
                                            }
                                        }
                                    })
                                }}
                                changeRoll={(newRoll: number) => {
                                    setCharacter({
                                        ...character,
                                        skills: {
                                            ...character.skills,
                                            [key]: {
                                                ...character.skills[key],
                                                rollValue: newRoll
                                            }
                                        }
                                    })
                                }}
                            />
                        );
                    })}
                </section>
                <section id="import-export">
                    <label className='button primary'>
                        Import Character
                        <input type="file" onChange={
                            (e) => {
                                const reader = new FileReader();
                                reader.onload = (e) => {
                                    if (e.target) {
                                        const result: Character = JSON.parse(e.target.result as string);
                                        setCharacter(result)
                                    }
                                };
                                if (e.target.files) {
                                    reader.readAsText(e.target.files[0]);
                                }
                            }
                        } accept=".json" />
                    </label>
                    <a className='button secondary' href={"data:text/json;chaset=utf-8," + JSON.stringify(character)} download="character.json">Export Character</a>
                </section>
            </form>
        </div>
    );
};

export default CharacterSheet;
