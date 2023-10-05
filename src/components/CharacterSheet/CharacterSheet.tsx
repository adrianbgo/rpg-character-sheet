import React, { useEffect, useState } from "react";
import TextInput from "../TextInput/TextInput";
import Stat from "../Stat/Stat";
import Skill from "../Skill/Skill";

import "../../styles/components/CharacterSheet.scss";
import { InitialAttributes, Attribute } from "../../types/Attribute";

const CharacterSheet: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [attributes, setAttributes] = useState<{ [key: string]: Attribute }>(
    InitialAttributes
  );

  useEffect(() => {
    console.log(attributes.vitality.value);
  }, [attributes]);
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
                      },
                      [attributes[key].dependents![0]]: {
                        ...attributes[attributes[key].dependents![0]],
                        
                      },
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
                  onChange={() => {}}
                  id={key}
                />
              );
            }
            return <></>;
          })}
        </section>
        <section id="skills">
          <h2>Skills</h2>
          <Skill
            name={"fighting"}
            rank={0}
            baseAttribute={attributes.strength}
            change={() => {}}
          />
          <Skill
            name={"thievery"}
            rank={0}
            baseAttribute={attributes.dexterity}
            change={() => {}}
          />
          <Skill
            name={"stealth"}
            rank={0}
            baseAttribute={attributes.dexterity}
            change={() => {}}
          />
          <Skill
            name={"archery"}
            rank={0}
            baseAttribute={attributes.dexterity}
            change={() => {}}
          />
          <Skill
            name={"learned"}
            rank={0}
            baseAttribute={attributes.mind}
            change={() => {}}
          />
          <Skill
            name={"survival"}
            rank={0}
            baseAttribute={attributes.mind}
            change={() => {}}
          />
          <Skill
            name={"perception"}
            rank={0}
            baseAttribute={attributes.mind}
            change={() => {}}
          />
          <Skill
            name={"apothecary"}
            rank={0}
            baseAttribute={attributes.mind}
            change={() => {}}
          />
          <Skill
            name={"intimidation"}
            rank={0}
            baseAttribute={attributes.presence}
            change={() => {}}
          />
          <Skill
            name={"performance"}
            rank={0}
            baseAttribute={attributes.presence}
            change={() => {}}
          />
          <Skill
            name={"manipulation"}
            rank={0}
            baseAttribute={attributes.presence}
            change={() => {}}
          />
          <Skill
            name={"insight"}
            rank={0}
            baseAttribute={attributes.presence}
            change={() => {}}
          />
          <Skill
            name={"power"}
            rank={0}
            baseAttribute={attributes.presence}
            change={() => {}}
          />
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
