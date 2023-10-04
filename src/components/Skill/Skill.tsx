import React, { FC } from 'react'
import { Attribute } from '../../types/Attribute';

interface ISkill {
    rank: number;
    baseAttribute: Attribute;
    name: string;
}

const Skill: FC<ISkill> = ({ rank, baseAttribute, name }) => {
    return (
        <div className='skill'>
            <p className='skill-name'>{name}: {rank}/<b>{baseAttribute.value}</b> ({baseAttribute.name})</p>
            <button className='skill-button' onClick={baseAttribute.change}>train</button>
        </div>
    )
}

export default Skill