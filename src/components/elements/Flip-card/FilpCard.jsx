import './flip-card.css';
import Card from '../Profile-card/Profile-card';
import { CSSTransition } from 'react-transition-group';
import { useState } from 'react';

function FlippableCard() {
    const [showFront, setShowFront] = useState(true);

    return (
        <div className="flippable-card-container">
            <CSSTransition
                in={showFront}
                timeout={300}
                classNames='flip'
            >
                <Card showFront={showFront} onClick={() => {
                    setShowFront((state) => !state);
                }} />
            </CSSTransition>
        </div>
    );
}

export default FlippableCard;
