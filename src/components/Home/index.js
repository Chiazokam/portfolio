import React from 'react';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Header from '../Header';
import About from './About';
import Tools from './Tools';
import SoftSkills from './SoftSkills';
import Companies from './Companies';
import Contact from './Contact';

const HomeComponent = () => {
    return (
        <div className='home-wrapper'>
                <section className='home-showcase'>
                    <Header />
                    <div className='showcase-content'>
                        <div className='home-text'>
                            <h1>CHIAZOKAM ECHETA</h1>
                            <p>Speaking passion? speak with me...</p>
                            <div className="arrow bounce">
                                <KeyboardArrowDownIcon />
                            </div>
                        </div>
                    </div>
                </section>
                
                <About />
                <Tools />
                <SoftSkills />
                <Companies />
                <Contact />
        </div>
    );
}

export default HomeComponent;
