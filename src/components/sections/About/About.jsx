import { useState } from 'react';
import { ProfileCard } from '../../elements';
import { purpleSphere, blueSphere } from '../../../assets';
import { motion } from 'framer-motion';
import { slideIn, textVariant } from '../../../utils/motions';
import './about.css';

function About() {
    const [cardClick, setCardClick] = useState(true);

    const flipText = () => {
        setCardClick(!cardClick);
    }

    return (
        <div className='about-section'>
            <span id='about'></span>
            <motion.div
                initial='hidden' whileInView="show" viewport={{ once: true }}
                className='about-titles' variants={textVariant()}>
                <h2>About Me</h2>
                <h4>Overview of my skills and interests</h4>
                <div className='title-line'></div>
            </motion.div>
            <div className='about-wrapper'>
                <motion.div className='profile-picture'
                    initial='hidden' whileInView="show" viewport={{ once: true }}
                    variants={slideIn('left', 'tween', 0.2, 1)}>
                    <div onClick={flipText}>
                        <ProfileCard />
                    </div>
                    <p className='flip-text'>{cardClick ? 'Click to flip!' : 'Scan the QR to reach me!'}</p>
                </motion.div>
                <motion.div className='about-description'
                    initial='hidden' whileInView="show" viewport={{ once: true }}
                    variants={slideIn('right', 'tween', 0.2, 1)}>
                    <div className='about-text'>
                        <section>
                            <ul>
                                <li>I'm a passionate full-stack web developer specializing in MERN stack and ReactJS.</li>
                                <li>With expertise in frontend and backend web development, I create seamless and user-friendly web applications.</li>
                                <li>Proficient in ReactJS, NodeJS, and MongoDB and I've honed my problem-solving skills and stay updated on the latest trends.</li>
                                <li>Always a student at heart!</li>
                            </ul>
                        </section>
                        <div>
                            <img src={purpleSphere} alt='purplesphere' className='sphere purpleSphere' />
                            <img src={blueSphere} alt='bluesphere' className='sphere blueSphere' />
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default About;