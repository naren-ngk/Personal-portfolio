import { projects } from '../../../constants';
import { ProjectCard } from '../../elements';
import { motion } from 'framer-motion';
import { textVariant } from '../../../utils/motions';
import './projects.css';

function Projects() {
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
        </div>
    );
}

export default Projects;