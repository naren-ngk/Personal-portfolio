import Typewriter from 'typewriter-effect';
import './hero.css';

function Hero() {
    return (
        <div>
            <div className='hero-container'>
                <div className='titles'>
                    <h2>Hi, I am <span className='name'>Narendran</span></h2>
                    <h4>I am currently a</h4>
                    <div className='typewriting'>
                        <Typewriter
                            options={{
                                autoStart: true,
                                loop: true,
                            }}
                            onInit={(typewriter) => {
                                typewriter.typeString('<h3>Full Stack Developer</h3>')
                                    .pauseFor(1500)
                                    .deleteAll()
                                    .start();
                                typewriter.typeString('<h3>ReactJS Developer</h3>')
                                    .pauseFor(1500)
                                    .deleteAll()
                                    .start();
                                typewriter.typeString('<h3>Web Designer</h3>')
                                    .pauseFor(1500)
                                    .deleteAll()
                                    .start();
                            }}
                        />
                    </div>
                </div>
                <div className='pictures'></div>
            </div>
        </div>
    );
}

export default Hero;