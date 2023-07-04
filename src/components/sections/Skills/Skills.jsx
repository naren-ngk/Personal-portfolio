import { useState } from 'react';
import { SkillCard } from '../../elements';
import { technologies } from '../../../constants';
import { Dropdown } from '../../elements';
import { motion } from 'framer-motion';
import { textVariant } from '../../../utils/motions';
import './skills.css';

function Skills() {
    const [selection, setSelection] = useState(null);
    const [isFiltered, setIsFiltered] = useState(false);

    const options = [
        { name: 'Frontend', progress: 95 },
        { name: 'Backend', progress: 85 },
        { name: 'Design', progress: 80 },
        { name: 'Other', progress: 85 },
    ];

    const handleSelect = (option) => {
        setSelection(option);
        setIsFiltered(true);
    }

    const handleClear = () => {
        setSelection(null);
        setIsFiltered(false);
    }

    const filteredTech = technologies.filter(tech => (tech.type === selection?.name));

    return (
        <div className='skills-section'>
            <div className='skills-title'>
                <motion.div variants={textVariant()}
                    initial='hidden' whileInView="show" viewport={{ once: true }}>
                    <h2>My Skills</h2>
                    <div className='title-line'></div>
                </motion.div>
                <motion.div className='dropdown-wrapper' variants={textVariant()}
                    initial='hidden' whileInView="show" viewport={{ once: true }}>
                    <Dropdown options={options} value={selection}
                        onChange={handleSelect} />
                    <button class="back-btn" onClick={handleClear}>Clear</button>
                </motion.div>
            </div>
            {isFiltered ? (
                <>
                    <div className='skills-techs'>
                        {filteredTech.map(tech => (
                            <SkillCard tech={tech} key={tech.name} />))
                        }
                    </div>
                    <motion.div className='progerss-container' variants={textVariant()}
                        initial='hidden' whileInView="show" viewport={{ once: true }}>
                        <h3>My expertise in<span>&nbsp;{selection.name}&nbsp;</span>skills</h3>
                        <div className='progress-wrapper'>
                            <div className="progress-bar">
                                <motion.div
                                    key={selection.progress}
                                    className="progress-value"
                                    animate={{ width: `${selection.progress}%` }}
                                    transition={{ duration: 1 }}
                                ></motion.div>
                            </div>
                            <div>
                                <h2>{`${selection.progress}%`}</h2>
                            </div>
                        </div>
                    </motion.div>
                </>
            ) : (
                    <div className='skills-techs'>
                        {technologies.map(tech => (
                            <SkillCard tech={tech} key={tech.name} />))
                        }
                    </div>
                )
            }
            <p className='dragger'>Click or drag any title!</p>
        </div>
    );
}

export default Skills;