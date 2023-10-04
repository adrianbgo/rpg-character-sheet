import React from 'react'
import { Attribute } from '../../types/Attribute';
import '../../styles/components/Skill.scss'

interface ISkill {
    rank: number;
    baseAttribute: Attribute;
    name: string;
}

const Skill: React.FC<ISkill> = ({ rank, baseAttribute, name }) => {
    return (
        <div className='skill'>
            <p className='skill-name'><b>{name}</b>:</p>
            <p className='skill-rank'>{rank}/<b className='skill-max-rank'>{baseAttribute.value}</b></p>
            <b className='skill-base-attribute'>({baseAttribute.name})</b>
            <button className='skill-button' onClick={baseAttribute.change}>train</button>
        </div>
    )
}

export default Skill    