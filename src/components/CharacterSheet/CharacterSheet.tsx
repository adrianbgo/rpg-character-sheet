import React, { useEffect, useState } from "react";
import TextInput from "../TextInput/TextInput";
import Stat from "../Stat/Stat";
import Skill from "../Skill/Skill";

import "../../styles/components/CharacterSheet.scss";
import { InitialAttributes, Attribute } from "../../types/Attribute";
import { changeDerived } from "../../util/changeDerived";
import { InitialSkills, SkillType } from "../../types/Skill";

const CharacterSheet: React.FC = () => {
    const [name, setName] = useState<string>("");
    const [attributes, setAttributes] = useState<{ [key: string]: Attribute }>(
        InitialAttributes
    );
    const [skills, setSkills] = useState<{ [key: string]: SkillType }>(InitialSkills);

    changeDerived(attributes);
    return (
        <div className="container">
            <h1>Character Sheet</h1>
            <form className="character-sheet">
                <section id="name">
                    <TextInput
                        label="Character Name"
                        id="name"
                        placeholder="Johnny Appleseed"
                        onChange={setName}
                        value={name}
                    />
                </section>
                <section id="base-attributes">
                    <h2>Base Attributes</h2>
                    {Object.keys(attributes).map((key: string) => {
                        if (attributes[key].computed === false) {
                            return (
                                <Stat
                                    id={key}
                                    key={key}
                                    type={key}
                                    computed={attributes[key].computed}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                        setAttributes({
                                            ...attributes,
                                            [key]: {
                                                ...attributes[key],
                                                value: e.target.valueAsNumber,
                                            }
                                        });
                                    }}
                                    value={attributes[key].value}
                                />
                            );
                        }
                        return <></>;
                    })}
                </section>
                <section id="combat-attributes">
                    <h2>Combat Attributes</h2>
                    {Object.keys(attributes).map((key: string) => {
                        if (attributes[key].computed === true) {
                            return (
                                <Stat
                                    key={key}
                                    type={key}
                                    computed={attributes[key].computed}
                                    value={attributes[key].value}
                                    onChange={() => { }}
                                    id={key}
                                />
                            );
                        }
                        return <></>;
                    })}
                </section>
                <section id="skills">
                    <h2>Skills</h2>
                    {Object.keys(skills).map((key: string) => {
                        return (
                            <Skill
                                key={key}
                                name={key}
                                attributes={attributes}
                                skill={skills[key]}
                            />
                        );
                    })}
                </section>
                <section id="import-export">
                    <button type="button" id="import-button" className="primary">
                        Import Character
                    </button>
                    <button type="button" id="export-button" className="secondary">
                        Export Character
                    </button>
                </section>
            </form>
        </div>
    );
};

export default CharacterSheet;
