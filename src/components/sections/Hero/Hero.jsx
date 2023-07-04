import Typewriter from 'typewriter-effect';
import Lottie from 'lottie-react';
import { Blob } from '../../elements';
import { laptopAnimationData } from '../../../assets';
import { motion } from 'framer-motion';
import { textVariant } from '../../../utils/motions';
import './hero.css';

function Hero() {
    return (
        <div>
            <div className='hero-container'>
                <span id='home'></span>
                <motion.div className='titles' initial='hidden' whileInView="show"
                    viewport={{ once: true }} variants={textVariant()}>
                    <h2>Hi, I am <span className='name'>Narendran</span></h2>
                    <h4>I am currently a</h4>
                    <div className='typewriting'>
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter.typeString('<h3 style="display: inline;">Full Stack Developer</h3>')
                                    .pauseFor(1500)
                                    .deleteAll()
                                    .start();
                                typewriter.typeString('<h3 style="display: inline;">ReactJS Developer</h3>')
                                    .pauseFor(1500)
                                    .deleteAll()
                                    .start();
                                typewriter.typeString('<h3 style="display: inline;">Web Designer</h3>')
                                    .pauseFor(1500)
                                    .deleteAll()
                                    .start();
                            }}
                            options={{
                                autoStart: true,
                                loop: true,
                                cursorClassName: 'cursor'
                            }}
                        />
                    </div>
                    <div className='resume-wrapper'>
                        <motion.button
                            className='resume-button'
                            whileHover={{ scale: 1.1, backgroundColor: '#238b99' }}
                            whileTap={{ scale: 0.8 }}
                        >Resume</motion.button>
                    </div>
                </motion.div>
                <motion.div className='pictures' initial='hidden' whileInView="show"
                    viewport={{ once: true }} variants={textVariant()}>
                    <Blob />
                    <div className='laptop-lottie'>
                        <Lottie animationData={laptopAnimationData} />
                    </div>
                </motion.div>
                <div className='slider-container'>
                    <a href='#about'>
                        <div className='slider'>
                            <motion.div animate={{ y: [0, 19, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
                                className='slider-ball' />
                        </div>
                    </a>
                    <p className='swipe-text'>Click here to swipe!</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;