import React from 'react'
import { ArmorTypes } from '../../types/Armor'
import { equipArmor } from '../../util/equipArmor'
import { Attribute } from '../../types/Attribute'
import { Skill } from '../../types/Skill'

interface EquippablesProps {
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const Equippables: React.FC<EquippablesProps> = ({ onChange }) => {
    return (
        <div className='equippables'>
            <section id="armor">
                <label htmlFor='armor'>Armor:</label>
                <select name="armor" id="armor" onChange={onChange} defaultValue={'none'}>
                    {
                        Object.keys(ArmorTypes).map((key: string) => {
                            return (
                                <option key={key} value={key}>{key}</option>
                            )
                        })
                    }
                </select>
            </section>
            <section id="weapons"></section>
        </div>
    )
}

export default Equippables