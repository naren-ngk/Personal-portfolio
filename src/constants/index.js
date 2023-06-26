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