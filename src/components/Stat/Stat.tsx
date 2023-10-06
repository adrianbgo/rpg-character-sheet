import React from 'react';
import '../../styles/components/Stat.scss'
import DamageCounter from '../DamageCounter/DamageCounter';

interface IStat {
    type: string;
    computed: boolean;
    formula?: () => number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: number;
    id: string;
    damage?: number | boolean;
    takeDamage?: (newDamage: number) => void;
    incrementable?: boolean;
    changeValue: (newValue: number) => void;
    usage: number;
}

const Stat: React.FC<IStat> = ({ type, computed, formula, onChange, value, id, damage, takeDamage, incrementable, changeValue, usage }) => {
    const handleIncrement = (e: React.MouseEvent<HTMLButtonElement>, amount: number) => {
        e.preventDefault();
        const newValue = usage + amount;
        changeValue!(newValue);
    }
    if (computed && formula) {
        return (
            <div className={`stat ${incrementable ?? 'incrementable'}`}>
                <label htmlFor={type}>{type}</label>
                {
                    incrementable ?
                        <div className='increment'>
                            <button onClick={(e) => handleIncrement(e, 1)} className='button'>-</button>
                            <input type='number' id={id} name={type} defaultValue={5} min={0} />
                            <button onClick={(e) => handleIncrement(e, -1)} className='button'>+</button>
                        </div>
                        :
                        <input type='number' id={id} name={type} readOnly={computed} onChange={(e) => onChange(e)} value={formula()} min={0} />
                }
                {typeof damage === 'number' && takeDamage ? <DamageCounter damage={damage} change={takeDamage} /> : null}
            </div>
        )
    }
    return (
        <div className='stat'>
            <label htmlFor={type}>{type}</label>
            {
                incrementable ?
                    <div className='increment'>
                        <button onClick={(e) => handleIncrement(e, 1)} className='button'>-</button>
                        <input type='number' id={id} name={type} value={value} min={0} />
                        <button onClick={(e) => handleIncrement(e, -1)} className='button'>+</button>
                    </div>
                    :
                    <input type='number' id={id} name={type} readOnly={computed} onChange={(e) => onChange(e)} value={value} min={0} />
            }
            {typeof damage === 'number' && takeDamage ? <DamageCounter damage={damage} change={takeDamage} /> : null}
        </div>
    )
}

export default Stat