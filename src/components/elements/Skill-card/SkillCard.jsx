import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { motion } from "framer-motion"
import './SkillCard.css';

function SkillCard({ tech }) {
    const [showFront, setShowFront] = useState(true);

    return (
        <motion.div className="skillcard-container"
            drag
            dragConstraints={{
                top: -50,
                left: -50,
                right: 50,
                bottom: 50
            }}>
            <CSSTransition
                in={showFront}
                timeout={300}
                classNames='flip'
            >
                <div className="skillcard" onClick={() => {
                    setShowFront((state) => !state);
                }}>
                    <div className="skillcard-back">
                        <img src={tech.icon} alt={tech.name} className='tech-icon back-icon' />
                    </div>
                    <div className="skillcard-front">
                        <img src={tech.icon} alt={tech.name} className='tech-icon' />
                    </div>
                </div>
            </CSSTransition>
        </ motion.div >
    )
}

export default SkillCard;
