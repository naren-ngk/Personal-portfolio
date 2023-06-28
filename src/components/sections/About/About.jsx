import { FlipProfileCard } from '../../elements';
import { purpleSphere, blueSphere } from '../../../assets';
import './about.css';

function About() {
    return (
        <div className='about-section'>
            <div className='about-titles'>
                <h2>About Me</h2>
                <h4>Overview of my skills and interests</h4>
                <div className='title-line'></div>
            </div>
            <div className='about-wrapper' >
                <div className='profile-picture'>
                    <FlipProfileCard />
                </div>
                <div className='about-description'>
                    <div className='about-text'>
                        <section>
                            <p>I'm a passionate full-stack web developer specializing in MERN stack and React.js. With expertise in frontend and backend development, I create seamless and user-friendly web applications. Proficient in React.js, Node.js, and MongoDB and I've honed my problem-solving skills and stay updated on the latest trends.</p>
                        </section>
                        <div>
                            <img src={purpleSphere} alt='purplesphere' className='sphere purpleSphere' />
                            <img src={blueSphere} alt='bluesphere' className='sphere blueSphere' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
