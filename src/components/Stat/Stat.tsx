import React from 'react';
import '../../styles/components/Stat.scss'
import DamageCounter from '../DamageCounter/DamageCounter';
import { Attribute } from '../../types/Attribute';

interface IStat {
    type: string;
    // computed: boolean;
    formula?: () => number;
    // value: number;
    id: string;
    // damage?: number | boolean;
    takeDamage?: (newDamage: number) => void;
    // incrementable?: boolean;
    incrementValue?: (newValue: number) => void;
    stat: Attribute;
}

const Stat: React.FC<IStat> = ({ type, stat, incrementValue, formula, takeDamage, id }) => {
    const { computed, value, damage, incrementable, usage } = stat;
    const handleIncrement = (e: React.MouseEvent<HTMLButtonElement>, amount: number) => {
        e.preventDefault();
        const newUsage = usage - amount;
        incrementValue!(newUsage);
    }
    if (computed && formula) {
        return (
            <div className='stat'>
                <label htmlFor={type}>{type}</label>
                {incrementable ?
                    <div className='increment'>
                        <button onClick={(e) => handleIncrement(e, -1)} className='button'>-</button>
                        <input type='number' id={id} name={type} value={formula()} readOnly={computed} min={0} />
                        <button onClick={(e) => handleIncrement(e, 1)} className='button'>+</button>
                    </div> :
                    <input type='number' id={id} name={type} value={formula()} readOnly={computed} min={0} />
                }
                {typeof damage === 'number' && takeDamage ? <DamageCounter damage={damage} change={takeDamage} /> : null}
            </div>
        )
    }
    return (
        <div className='stat'>
            <label htmlFor={type}>{type}</label>
            {incrementable ?
                <div className='increment'>
                    <button onClick={(e) => handleIncrement(e, -1)} className='button'>-</button>
                    <input type='number' id={id} name={type} value={value} readOnly={computed} min={0} />
                    <button onClick={(e) => handleIncrement(e, 1)} className='button'>+</button>
                </div> :
                <input type='number' id={id} name={type} value={value} readOnly={computed} min={0} />
            }
            {typeof damage === 'number' && takeDamage ? <DamageCounter damage={damage} change={takeDamage} /> : null}
        </div>
    )
}

export default Stat