import React from 'react'
import TextInput from '../TextInput/TextInput'
import Stat from '../Stat/Stat'

const CharacterSheet = () => {
    return (
        <div className='character-sheet'>
            <h1>Character Sheet</h1>
            <form>
                <section id="name">
                    <TextInput label='Character Name' id='name' placeholder='Johnny Appleseed' />
                </section>
                <section id="stats">
                    <h2>Base Attributes</h2>
                    <Stat type='strength' computed={false} />
                    <Stat type='dexterity' computed={false} />
                    <Stat type='mind' computed={false} />
                    <Stat type='presence' computed={false} />
                </section>
            </form>
        </div>
    )
}

export default CharacterSheet