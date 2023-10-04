import React from 'react';
import '../../styles/components/Stat.scss'

interface IStat {
    type: string;
    computed: boolean;
    formula?: () => number;
}

const Stat: React.FC<IStat> = ({ type, computed, formula }) => {
    if (computed && formula) {
        return (
            <div className='stat'>
                <label htmlFor={type}>{type}</label>
                <input type='number' id={type} name={type} value={formula()} readOnly={computed} />
            </div>
        )
    }
    return (
        <div className='stat'>
            <label htmlFor={type}>{type}</label>
            <input type='number' id={type} name={type} defaultValue={0} readOnly={computed} />
        </div>
    )
}

export default Stat