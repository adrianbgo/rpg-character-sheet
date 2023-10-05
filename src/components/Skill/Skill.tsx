import React from 'react'
import '../../styles/components/Skill.scss'
import { SkillType, SkillRank } from '../../types/Skill';
import { Attribute } from '../../types/Attribute';

interface ISkill {
    name: string;
    skill: SkillType;
    attributes: { [key: string]: Attribute };
}

const Skill: React.FC<ISkill> = ({ name, skill, attributes }) => (
    <div className='skill'>
        <p className='skill-name'><b>{name}</b>:</p>
        <p className='skill-rank'>{Math.min(skill.rank, attributes[skill.baseAttribute].value)}/<b className='skill-max-rank'>{Math.min(attributes[skill.baseAttribute].value, 5)}</b> <em>({SkillRank[skill.rank]})</em></p>
        <b className='skill-base-attribute'>({skill.baseAttribute})</b>
        <button className='skill-button' onClick={skill.change}>train</button>
    </div>
)

export default Skill    