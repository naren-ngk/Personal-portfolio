import './Dropdown.css';
import { useState, useEffect, useRef } from 'react';
import { GoChevronDown, GoChevronUp } from 'react-icons/go';
import { motion } from 'framer-motion';
import { dropDownVariants } from '../../../utils/motions';

function Dropdown({ options, value, onChange }) {
    const [isOpen, setIsOpen] = useState(false);
    const divEl = useRef();

    useEffect(() => {
        const handler = (event) => {
            if (!divEl.current) { return; }
            if (!divEl.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('click', handler, true);
        return () => {
            document.removeEventListener('click', handler);
        };
    }, []);

    const handleClick = () => {
        setIsOpen((currentIsOpen) => !currentIsOpen);
    };

    const handleOptionClick = (option) => {
        setIsOpen(false);
        onChange(option);
    }

    const renderedOptions = options.map(option => {
        return <div className="single-option" key={option.name} onClick={() => handleOptionClick(option)}>{option.name}</div>
    });

    return (
        <div ref={divEl} className="dropdown-box">
            <div className="dropdown-container panel"
                onClick={handleClick}>{value?.name || 'Filter...'}
                {isOpen ? <GoChevronUp className="drop-icon" /> : <GoChevronDown className="drop-icon" />}
            </div>
            {isOpen && <motion.div
                key={value} variants={dropDownVariants} animate={'show'} initial="hide"
                className="options-bar panel">{renderedOptions}</motion.div>}
        </div>
    );
}

export default Dropdown;