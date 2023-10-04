import React from 'react'
import { Attribute } from '../../types/Attribute';
import '../../styles/components/Skill.scss'
import { SkillRank } from '../../types/SkillRank';

interface ISkill {
    rank: 0 | 1 | 2 | 3 | 4 | 5;
    baseAttribute: Attribute;
    name: string;
    change: () => void;
}

const Skill: React.FC<ISkill> = ({ rank, baseAttribute, name, change }) => {
    return (
        <div className='skill'>
            <p className='skill-name'><b>{name}</b>:</p>
            <p className='skill-rank'>{rank}/<b className='skill-max-rank'>{baseAttribute.value}</b></p>
            <b className='skill-base-attribute'>({baseAttribute.name})</b>
            <p className='skill-status'>{SkillRank[rank]}</p>
            <button className='skill-button' onClick={change}>train</button>
        </div>
    )
}

export default Skill    