import { Weapon, WeaponTypes } from "../../types/Weapon"

interface WeaponProps {
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
    label: string
}

const WeaponComponent: React.FC<WeaponProps> = ({ onChange, label }) => {
    return (
        <section id="armor">
            <label htmlFor='armor'>{label}:</label>
            <select name="armor" id="armor" onChange={onChange} defaultValue={'none'}>
                {
                    Object.keys(WeaponTypes).map((key: string) => {
                        return (
                            <option key={key} value={key}>{key}</option>
                        )
                    })
                }
            </select>
        </section>
    )
}

export default WeaponComponent;