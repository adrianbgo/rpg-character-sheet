import React from 'react'
import '../../styles/components/Skill.scss'
import { Skill, SkillRank } from '../../types/Skill';
import { Attribute } from '../../types/Attribute';
import { trainSkill } from '../../util/trainSkill';
import { roll } from '../../util/roll';

interface SkillProps {
    name: string;
    skill: Skill;
    attributes: { [key: string]: Attribute };
    change: (newRank: 0 | 1 | 2 | 3 | 4 | 5) => void;
    changeRoll: (newRoll: number) => void;
}

const SkillComponent: React.FC<SkillProps> = ({ name, skill, attributes, change, changeRoll }) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const newRank = trainSkill(skill, attributes[skill.baseAttribute].value)
        change(newRank);
    }
    const handleRollClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const newRoll = roll(skill.rank);
        changeRoll(newRoll);
    }
    return (
        <div className='skill'>
            <p className='skill-name'><b>{name}</b>:</p>
            <p className='skill-rank'>{Math.min(skill.rank, attributes[skill.baseAttribute].value)}/<b className='skill-max-rank'>{Math.min(attributes[skill.baseAttribute].value, 5)}</b> <em>({SkillRank[skill.rank]})</em></p>
            <b className='skill-base-attribute'>({skill.baseAttribute})</b>
            <button className='skill-button button' onClick={(e) => handleClick(e)} role='button'>train</button>
            <button className='button' onClick={handleRollClick}>Roll</button>
            <p>{skill.rollValue}</p>
        </div>
    )
}

export default SkillComponent   