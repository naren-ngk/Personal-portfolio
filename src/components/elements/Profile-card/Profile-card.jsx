import { useRef } from 'react';
import './profile-card.css';
import './flip-transition.css';
import { qrCode } from '../../../assets';

function ProfileCard({ onClick, showFront }) {
    const flipRef = useRef();

    const flipText = () => {
        flipRef.current.classList.toggle('transform-flip');
    }

    const handleClick = () => {
        onClick();
        flipText();
    }

    return (
        <div className="card" onClick={handleClick}>
            <div className="card-back">
                <img src={qrCode} alt='qrcode' className='qrImage' />
            </div>
            <div className="card-front"></div>
            <p className='flip-text' ref={flipRef}>{showFront ? 'Click to flip!' : 'Scan the QR to reach me!'}</p>
        </div>
    );
}

export default ProfileCard;
