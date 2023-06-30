import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import './contact.css';

function Contact() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [spanMessage, setSpanMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true);
        emailjs.send(process.env.REACT_APP_SERVICE_KEY, process.env.REACT_APP_TEMPLATE_KEY,
            {
                from_name: `${firstName} ${lastName}`,
                to_name: 'Naren',
                from_email: email,
                to_email: 'narensakthiit@gmail.com',
                message: message
            },
            process.env.REACT_APP_API_KEY
        ).then(() => {
            setLoading(false);
            setSpanMessage('I will get back to you! Thank you!');
            setEmail('');
            setFirstName('');
            setLastName('');
            setMessage('');
            setTimeout(() => {
                setSpanMessage('');
            }, 5000);
        }, (error) => {
            setLoading(false);
            setSpanMessage('Something went wrong! Try again!');
        });
    }

    return (
        <div className="contact-container">
            <div className='form-heading'>
                <h3>Contact Me</h3>
                <div className='title-line'></div>
            </div>
            <div className='contact-wrapper'>
                <form className='contact-form' onSubmit={handleSubmit}>
                    <div className='form-gradient'></div>
                    <h2>Send me a message</h2>
                    <div className='form-names'>
                        <input
                            placeholder="First Name"
                            value={firstName} required
                            onChange={(e) => setFirstName(e.target.value)} />
                        <input
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)} />
                    </div>
                    <div className='form-email'>
                        <input placeholder="Email"
                            type='email'
                            value={email} required
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='form-desc'>
                        <textarea placeholder='Your Message Here...'
                            value={message} required
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                    <motion.button
                        type="submit" className='form-submit'
                        whileHover={{ scale: 0.95, }}
                        whileTap={{ scale: 1 }}>
                        {loading ? 'Sending...' : 'Submit'}
                    </motion.button>
                </form>
                <p className='span-msg'>{spanMessage}</p>
            </div>
        </div>
    );
}

export default Contact;