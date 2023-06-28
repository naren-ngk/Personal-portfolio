import { motion } from 'framer-motion';
import './ProjectCard.css';

function ProjectCard({ project }) {
    return (
        <motion.div
            whileHover={{ x: 15, y: -10 }}
            className='projectcard-container'>
            <div className='projectCard-img'>
                <img src={project.thumbnail} />
            </div>
            <div className='projectCard-title'>
                <h4>{project.name}</h4>
            </div>
            <div className='projectCard-desc'>
                <p>{project.description}</p>
            </div>
            <div className='projectCard-btn'>
                <motion.button
                    onClick={() => window.open(project.link, '_blank')}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.8 }}>
                    View Project
                </motion.button>
            </div>
        </motion.div>
    );
}

export default ProjectCard;
