import React from 'react'
import TextInput from '../TextInput/TextInput'
import Stat from '../Stat/Stat'
import Skill from '../Skill/Skill'

import '../../styles/components/CharacterSheet.scss'

const CharacterSheet: React.FC = () => {
    return (
        <div className='container'>
            <h1>Character Sheet</h1>
            <form className='character-sheet'>
                <section id="name">
                    <TextInput label='Character Name' id='name' placeholder='Johnny Appleseed' />
                </section>
                <section id="base-attributes">
                    <h2>Base Attributes</h2>
                    <Stat type='strength' computed={false} />
                    <Stat type='dexterity' computed={false} />
                    <Stat type='mind' computed={false} />
                    <Stat type='presence' computed={false} />
                </section>
                <section id="combat-attributes">
                    <h2>Combat Attributes</h2>
                    <Stat type='vitality' computed={true} formula={() => 0} />
                    <Stat type='evasion' computed={true} formula={() => 0} />
                    <Stat type='armor' computed={true} formula={() => 0} />
                    <Stat type='alacrity' computed={true} formula={() => 0} />
                    <Stat type='tenacity' computed={true} formula={() => 0} />
                    <Stat type='power' computed={true} formula={() => 0} />
                </section>
                <section id="skills">
                    <h2>Skills</h2>
                    <Skill name={'fighting'} rank={0} baseAttribute={{ name: 'strength', value: 0, change: () => { } }} />
                    <Skill name={'thievery'} rank={0} baseAttribute={{ name: 'dexterity', value: 0, change: () => { } }} />
                    <Skill name={'stealth'} rank={0} baseAttribute={{ name: 'dexterity', value: 0, change: () => { } }} />
                    <Skill name={'archery'} rank={0} baseAttribute={{ name: 'dexterity', value: 0, change: () => { } }} />
                    <Skill name={'learned'} rank={0} baseAttribute={{ name: 'mind', value: 0, change: () => { } }} />
                    <Skill name={'survival'} rank={0} baseAttribute={{ name: 'mind', value: 0, change: () => { } }} />
                    <Skill name={'perception'} rank={0} baseAttribute={{ name: 'mind', value: 0, change: () => { } }} />
                    <Skill name={'apothecary'} rank={0} baseAttribute={{ name: 'mind', value: 0, change: () => { } }} />
                    <Skill name={'intimidation'} rank={0} baseAttribute={{ name: 'presence', value: 0, change: () => { } }} />
                    <Skill name={'performance'} rank={0} baseAttribute={{ name: 'presence', value: 0, change: () => { } }} />
                    <Skill name={'manipulation'} rank={0} baseAttribute={{ name: 'presence', value: 0, change: () => { } }} />
                    <Skill name={'insight'} rank={0} baseAttribute={{ name: 'presence', value: 0, change: () => { } }} />
                    <Skill name={'power'} rank={0} baseAttribute={{ name: 'presence', value: 0, change: () => { } }} />
                </section>
                <section id='import-export'>
                    <button type='button' id='import-button' className='primary'>Import Character</button>
                    <button type='button' id='export-button' className='secondary'>Export Character</button>
                </section>
            </form>
        </div>
    )
}

export default CharacterSheet