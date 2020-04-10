import React from 'react';
import Container from '@material-ui/core/Container';
import PhoneIcon from '@material-ui/icons/Phone';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import MessageIcon from '@material-ui/icons/Message';

const Contact = () => {
    return (
        <section className='contact-section'>
            <Container fixed>
                <div className='section-title'>How To Reach Me...</div>
                <div className='contact-content'>
                    <div className="contact-icon bounce">
                        <PhoneIcon />
                    </div>
                    <div className='contact-detail'>
                        <p>&nbsp;+234 0 7016020438</p>
                    </div>

                    <div className="contact-icon bounce">
                        <MessageIcon />
                    </div>
                    <div className='contact-detail'>
                        <p className='direct-message'>&nbsp;Click to send a direct message</p>
                    </div>

                    <div className="contact-icon bounce">
                        <EmailIcon />
                    </div>
                    <div className='contact-detail'>
                        <p>&nbsp;chiazokamecheta@gmail.com</p>
                    </div>

                    <div className="contact-icon bounce">
                        <LinkedInIcon />
                    </div>
                    <div className='contact-detail'>
                        <p>&nbsp;<a href='https://www.linkedin.com/in/chiazokamecheta/' target='_blank'>Click to Visit</a></p>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Contact;
