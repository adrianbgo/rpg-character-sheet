import React, { useState } from "react";
import TextInput from "../TextInput/TextInput";
import Stat from "../Stat/Stat";
import Skill from "../Skill/Skill";

import "../../styles/components/CharacterSheet.scss";
import { changeDerived } from "../../util/changeDerived";
import { Character, InitialCharacter } from "../../types/Character";
import Equippables from "../Equippables/Equippables";
import { ArmorTypes } from "../../types/Armor";

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
                                    computed={character.attributes[key].computed}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                        setCharacter({
                                            ...character,
                                            attributes: {
                                                ...character.attributes,
                                                [key]: {
                                                    ...character.attributes[key],
                                                    value: e.target.valueAsNumber,
                                                }
                                            }
                                        })
                                    }}
                                    value={character.attributes[key].value}
                                />
                            );
                        }
                        return <React.Fragment key={key}></React.Fragment>;
                    })}
                </section>
                <section id='equippables'>
                    <h2>Equippables</h2>
                    <Equippables onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
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
                            }
                        })
                    }} />
                </section>
                <section id="combat-attributes">
                    <h2>Combat Attributes</h2>
                    {Object.keys(character.attributes).map((key: string) => {
                        if (character.attributes[key].computed && !character.attributes[key].static) {
                            return (
                                <Stat
                                    key={key}
                                    type={key}
                                    computed={character.attributes[key].computed}
                                    value={character.attributes[key].value}
                                    onChange={() => { }}
                                    id={key}
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
                                        const result = JSON.parse(e.target.result as string);
                                        setCharacter({
                                            name: result.name,
                                            attributes: result.attributes,
                                            skills: result.skills
                                        })
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
