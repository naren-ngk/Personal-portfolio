import { projects } from '../../../constants';
import { ProjectCard } from '../../elements';
import { motion } from 'framer-motion';
import { textVariant } from '../../../utils/motions';
import './projects.css';

function Projects() {
    const gitHub_RepoLink = 'https://github.com/naren-ngk?tab=repositories';

    return (
        <div className='projects-wrapper'>
            <span id='projects'></span>
            <motion.div className='project-title' initial='hidden' whileInView="show"
                viewport={{ once: true }} variants={textVariant()}>
                <h2>Projects</h2>
                <div className='title-line'></div>
            </motion.div>
            <div className='projects-container'>
                {projects.map((project, index) => {
                    return <ProjectCard project={project} key={project.name} index={index} />
                })}
            </div>
            <div className='gitButton'>
                <motion.button
                    onClick={() => window.open(gitHub_RepoLink, '_blank')}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.8 }}
                    initial='hidden' whileInView="show"
                    viewport={{ once: true }} variants={textVariant()}>
                    More on GitHub
                </motion.button>
            </div>
        </div>
    );
}

export default Projects;