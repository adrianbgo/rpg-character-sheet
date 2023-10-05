import { Skill } from "../types/Skill";

export const trainSkill = (skill: Skill, skillMax: number): 0 | 1 | 2 | 3 | 4 | 5 => {
    if (skill.rank < 5) {
        if (skill.rank < skillMax) {
            return skill.rank + 1 as 0 | 1 | 2 | 3 | 4 | 5;
        }
        return skill.rank;
    }

    return skill.rank;
}