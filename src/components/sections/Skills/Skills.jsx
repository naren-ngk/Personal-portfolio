import { useState } from 'react';
import { SkillCard } from '../../elements';
import { technologies } from '../../../constants';
import { Dropdown } from '../../elements';
import './skills.css';

function Skills() {
    const [selection, setSelection] = useState(null);
    const [isFiltered, setIsFiltered] = useState(false);

    const options = ['Frontend', , 'Backend', 'Design', 'Other'];

    const handleSelect = (option) => {
        setSelection(option);
        setIsFiltered(true);
    }

    const handleClear = () => {
        setSelection(null);
        setIsFiltered(false)
    }

    const filteredTech = technologies.filter(tech => (tech.type === selection));

    return (
        <div className='skills-section'>
            <div className='skills-title'>
                <h2>My Skills</h2>
                <div className='dropdown-wrapper'>
                    <Dropdown options={options} value={selection}
                        onChange={handleSelect} />
                    <button class="back-btn" onClick={handleClear}>Clear</button>
                </div>
            </div>
            <div className='skills-techs'>
                {isFiltered ? (
                    filteredTech.map(tech => (
                        <SkillCard tech={tech} key={tech.name} />
                    ))
                ) : (
                        technologies.map(tech => (
                            <SkillCard tech={tech} key={tech.name} />
                        ))
                    )
                }
            </div>
            <p className='dragger'>Click or drag any title</p>
        </div>
    );
}

export default Skills;