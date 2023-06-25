import { SkillCard } from '../../elements';
import { technologies } from '../../../constants';
import './skills.css';

function Skills() {
    return (
        <div className='skills-section'>
            <div className='skills-title'>
                <h2>My Skills</h2>
            </div>
            <div className='skills-techs'>
                {technologies.map(tech=> (
                    <SkillCard tech={tech} key={tech.name} />
                ))}
            </div>
        </div>
    )
}

export default Skills;