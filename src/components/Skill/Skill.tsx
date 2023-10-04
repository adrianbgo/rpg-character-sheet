import React, { FC } from 'react'
import { Attribute } from '../../types/Attribute';
import '../../styles/components/Skill.scss'

interface ISkill {
    rank: number;
    baseAttribute: Attribute;
    name: string;
}

const Skill: FC<ISkill> = ({ rank, baseAttribute, name }) => {
    return (
        <div className='skill'>
            <p className='skill-name'><b>{name}</b>:</p>
            <p>{rank}/<b>{baseAttribute.value}</b></p>
            <b>({baseAttribute.name})</b>
            <button className='skill-button' onClick={baseAttribute.change}>train</button>
        </div>
    )
}

export default Skill