import {
    studentAnimationData, reactjsAnimationData, nodejsAnimationData,
    webDesignAnimationData, fullStackAnimationData, css,
    docker,
    figma,
    git,
    html,
    javascript,
    mongodb,
    nodejs,
    reactjs,
    redux,
    tailwind,
    typescript,
    threejs,
    CEGConfum, BlogSpot, DallE, portfolio3d
} from '../assets';

export const navLinks = [
    {
        id: "home",
        title: "Home",
    },
    {
        id: "about",
        title: "About",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

export const whatIDoTitles = [
    {
        id: 0,
        name: 'Full stack Developer',
        icon: fullStackAnimationData
    },
    {
        id: 1,
        name: 'ReactJS Developer',
        icon: reactjsAnimationData
    },
    {
        id: 2,
        name: 'NodeJS Developer',
        icon: nodejsAnimationData
    },
    {
        id: 3,
        name: 'UI/UX Developer',
        icon: webDesignAnimationData
    },
    {
        id: 4,
        name: 'Student',
        icon: studentAnimationData
    },
]

export const technologies = [
    {
        name: "HTML 5",
        icon: html,
        type: 'Frontend'
    },
    {
        name: "CSS 3",
        icon: css,
        type: 'Frontend'
    },
    {
        name: "JavaScript",
        icon: javascript,
        type: 'Frontend'
    },
    {
        name: "TypeScript",
        icon: typescript,
        type: 'Frontend'
    },
    {
        name: "React JS",
        icon: reactjs,
        type: 'Frontend'
    },
    {
        name: "Redux Toolkit",
        icon: redux,
        type: 'Frontend'
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
        type: 'Frontend'
    },
    {
        name: "Node JS",
        icon: nodejs,
        type: 'Backend'
    },
    {
        name: "MongoDB",
        icon: mongodb,
        type: 'Backend'
    },
    {
        name: "Three JS",
        icon: threejs,
        type: 'Frontend'
    },
    {
        name: "git",
        icon: git,
        type: 'Other'
    },
    {
        name: "figma",
        icon: figma,
        type: 'Design'
    },
    {
        name: "docker",
        icon: docker,
        type: 'Other'
    },
];

export const projects = [
    {
        name: 'BlogSpot',
        description: 'An AI powered automated blog application implemented using MERN stack and OpenAI APIs to create a seamless user experience.',
        link: 'https://github.com/naren-ngk/Blog-Application',
        thumbnail: BlogSpot
    },
    {
        name: 'DALL-E Clone',
        description: 'A MERN stack application which implements the functionalities of an AI image generating application using OpenAI APIs.',
        link: 'https://github.com/naren-ngk/DALL-E-clone',
        thumbnail: DallE
    },
    {
        name: 'CEG Confum',
        description: 'An intra-college social media platform developed for posting anonymous confessions and memory diary implemented using NodeJS and MongoDB.',
        link: 'https://github.com/naren-ngk/CEG-Confum',
        thumbnail: CEGConfum
    },
    {
        name: '3D Portfolio',
        description: 'Modern and visualy appealing portfolio implemented using ReactJS with the help of ThreeJS for manipulation of 3d objects.',
        link: 'https://github.com/naren-ngk/3d-portfolio',
        thumbnail: portfolio3d
    }
];