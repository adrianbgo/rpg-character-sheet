import React from 'react'
import '../../styles/components/DamageCounter.scss'

interface IDamageCounter {
    damage: number;
    change: (newDamage: number) => void;
}

const DamageCounter: React.FC<IDamageCounter> = ({ damage, change }) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const newDamage = damage + 1;
        change(newDamage);
    }
    return (
        <div className='damage-counter'>
            <p>{damage}</p><button onClick={handleClick} className='button'>damage</button>
        </div>
    )
}

export default DamageCounter