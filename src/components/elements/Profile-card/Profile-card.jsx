import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './profile-card.css';
import './flip-transition.css';
import { qrCode } from '../../../assets';

function ProfileCard() {
    const [showFront, setShowFront] = useState(true);

    return (
        <div className="flippable-card-container">
            <CSSTransition
                in={showFront}
                timeout={300}
                classNames='flip'
            >
                <div className="card" onClick={() => {
                    setShowFront((state) => !state);
                }}>
                    <div className="card-back">
                        <img src={qrCode} alt='qrcode' className='qrImage' />
                    </div>
                    <div className="card-front"></div>
                </div>
            </CSSTransition>
        </div>
    );
}

export default ProfileCard;
