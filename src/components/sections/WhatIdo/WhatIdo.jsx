import { useState, useRef, useEffect } from 'react';
import Lottie from 'lottie-react';
import { whatIDoTitles } from '../../../constants';
import { motion } from 'framer-motion';
import { slideIn, textVariant } from '../../../utils/motions';
import './whatIdo.css';

function WhatIdo() {
    const [iconNumber, setIconNumber] = useState(0);
    const prevH2Ref = useRef(0);

    useEffect(() => {
        const element = document.getElementById(`h2-${prevH2Ref.current}`);
        element.classList.remove(`h2-${prevH2Ref.current}`);
        prevH2Ref.current = iconNumber;
    }, [iconNumber]);

    const handleH2Enter = (event) => {
        if (event.target.id.slice(3) % 2 === 0) {
            event.target.classList.add('even-h2');
        } else {
            event.target.classList.add('odd-h2');
        }
    };

    const handleH2Leave = (event) => {
        if (event.target.id.slice(3) % 2 === 0) {
            event.target.classList.remove('even-h2');
        } else {
            event.target.classList.remove('odd-h2');
        }
    };

    const handleH2Click = (event) => {
        event.target.classList.add(`h2-${event.target.id.slice(3)}`);
        setIconNumber(Number(event.target.id.slice(3)));
    }

    return (
        <div className='what-section'>
            <motion.div className='what-heading' variants={textVariant()}
                initial='hidden' whileInView="show" viewport={{ once: true }}>
                <p>What I do?</p>
                <div className='title-line'></div>
            </motion.div>
            <div className='what-wrapper'>
                <motion.div className='what-titles'
                    initial='hidden' whileInView="show" viewport={{ once: true }}
                    variants={slideIn('left', 'tween', 0.2, 1)}>>
                    {whatIDoTitles.map(title => (
                        <motion.h2 id={`h2-${title.id}`} onClick={handleH2Click}
                            onMouseEnter={handleH2Enter} onMouseLeave={handleH2Leave}
                            className='what-single-title'
                            whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}
                        >
                            {title.name}
                        </motion.h2>
                    ))}
                    <p className='whatido-text'>Click any title!</p>
                </motion.div>
                <motion.div className='what-icons'
                    initial='hidden' whileInView="show" viewport={{ once: true }}
                    variants={slideIn('right', 'tween', 0.2, 1)}>>
                    <div className='icon-blob' />
                    {whatIDoTitles.map(title => {
                        if (title.id === iconNumber) {
                            return (
                                <div className='lottie-title-icon'>
                                    <Lottie animationData={title.icon} />
                                </div>
                            );
                        } else {
                            return null;
                        }
                    })}
                </motion.div>
            </div>
        </div>
    );
}

export default WhatIdo;