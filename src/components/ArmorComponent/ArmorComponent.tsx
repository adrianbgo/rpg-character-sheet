import React from 'react'
import { ArmorTypes } from '../../types/Armor'

interface ArmorProps {
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
    label: string
}

const ArmorComponent: React.FC<ArmorProps> = ({ onChange, label }) => {
    return (
        <section id="armor">
            <label htmlFor='armor'>{label}:</label>
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
    )
}

export default ArmorComponent;