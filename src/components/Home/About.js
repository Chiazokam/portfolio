import React from 'react';
import Container from '@material-ui/core/Container';

const About = () => {
    return (
        <section className='about-section'>
            <Container fixed>
                <div className='section-title'>Who I am...</div>
                <div className='about-content'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis sapien diam. Sed sagittis, sapien eget porta 
                    semper, sem sem imperdiet augue, eget elementum enim turpis a lorem. Praesent id nisi odio. Aliquam commodo 
                    nibh vitae quam pharetra ultricies. Praesent et vehicula ante. Nunc at erat libero. Nullam quis cursus nisl. Maecenas 
                    placerat auctor leo, vel maximus orci hendrerit id. Curabitur vitae vulputate odio. Nulla facilisi.</p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis sapien diam. Sed sagittis, sapien eget porta semper, 
                    sem sem imperdiet augue, eget elementum enim turpis a lorem. Praesent id nisi odio. Aliquam commodo nibh vitae quam 
                    pharetra ultricies. Praesent et vehicula ante. Nunc at erat libero. Nullam quis cursus nisl. Maecenas placerat auctor leo, vel 
                    maximus orci hendrerit id. Curabitur vitae vulputate odio. Nulla facilisi.</p>
                </div>
            </Container>
        </section>
    )
}

export default About;
