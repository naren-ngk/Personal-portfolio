export const slideIn = (direction, type, delay, duration) => {
    return {
        hidden: {
            x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
            y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
        },
        show: {
            x: 0,
            y: 0,
            transition: {
                type: type,
                delay: delay,
                duration: duration,
                ease: "easeOut",
            },
        },
    }
};


export const textVariant = (delay) => {
    return {
        hidden: {
            y: -50,
            opacity: 0,
        },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                duration: 1.25,
                delay: delay,
            },
        },
    };
};

export const dropDownVariants = {
    show: {
        opacity: 1,
        y: 0,
        transition: {
            ease: 'easeInOut',
            duration: 0.15
        }
    },
    hide: {
        y: -20,
        opacity: 0,
    }
};