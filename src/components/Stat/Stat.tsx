import React from 'react';
import '../../styles/components/Stat.scss'

interface IStat {
    type: string;
    computed: boolean;
    formula?: () => number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: number;
    id: string;
}

const Stat: React.FC<IStat> = ({ type, computed, formula, onChange, value, id }) => {
    if (computed && formula) {
        return (
            <div className='stat'>
                <label htmlFor={type}>{type}</label>
                <input type='number' id={id} name={type} value={formula()} readOnly={computed} min={0} />
            </div>
        )
    }
    return (
        <div className='stat'>
            <label htmlFor={type}>{type}</label>
            <input type='number' id={id} name={type} readOnly={computed} onChange={(e) => onChange(e)} value={value} min={0} />
        </div>
    )
}

export default Stat