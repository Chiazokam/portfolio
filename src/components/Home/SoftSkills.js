import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import team from '../../images/team.svg';
import scalable from '../../images/ruler.svg';
import extend from '../../images/extend.svg';
import feedback from '../../images/feedback.svg';
import test from '../../images/test.svg';

const SoftSkills = () => {
    return (
        <section className='soft-skills-section'>
            <Container fixed>
                <div className='section-title'>How I Work...</div>
                <div className='soft-skills-content'>
                        <Grid container spacing={4}>
                            <Grid item md={3} sm={6} xs={12}>
                                <Paper>
                                    <img src={team} alt='team' />
                                    <div className='soft-skill-title'>Good Team Player</div>
                                    <div className='soft-skill-content'>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis sapien diam. 
                                            Sed sagittis, sapien eget porta semper, sem sem imperdiet augue</p>
                                    </div>
                                </Paper>
                            </Grid>
                            <Grid item md={3} sm={6} xs={12}>
                                <Paper>
                                    <img src={scalable} alt='scalable' />
                                    <div className='soft-skill-title'>Scalability</div>
                                    <div className='soft-skill-content'>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis sapien diam. 
                                            Sed sagittis, sapien eget porta semper, sem sem imperdiet augue</p>
                                    </div>
                                </Paper>
                            </Grid>
                            <Grid item md={3} sm={6} xs={12}>
                                <Paper>
                                    <img src={test} alt='test' />
                                    <div className='soft-skill-title'>Test-Driven Development</div>
                                    <div className='soft-skill-content'>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis sapien diam. 
                                            Sed sagittis, sapien eget porta semper, sem sem imperdiet augue</p>
                                    </div>
                                </Paper>
                            </Grid>
                            <Grid item md={3} sm={6} xs={12}>
                                <Paper>
                                    <img src={extend} alt='extend' />
                                    <div className='soft-skill-title'>Extensibility</div>
                                    <div className='soft-skill-content'>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis sapien diam. 
                                            Sed sagittis, sapien eget porta semper, sem sem imperdiet augue</p>
                                    </div>
                                </Paper>
                            </Grid>

                            <Grid item md={3} sm={6} xs={12}>
                                <Paper>
                                    <img src={feedback} alt='feedback' />
                                    <div className='soft-skill-title'>Feedback</div>
                                    <div className='soft-skill-content'>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis sapien diam. 
                                            Sed sagittis, sapien eget porta semper, sem sem imperdiet augue</p>
                                    </div>
                                </Paper>
                            </Grid>
                            <Grid item md={3} sm={6} xs={12}>
                                <Paper>
                                    <img src={extend} alt='extend' />
                                    <div className='soft-skill-title'>Good Team Spirit</div>
                                    <div className='soft-skill-content'>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis sapien diam. 
                                            Sed sagittis, sapien eget porta semper, sem sem imperdiet augue</p>
                                    </div>
                                </Paper>
                            </Grid>
                            <Grid item md={3} sm={6} xs={12}>
                                    <Paper>
                                        <img src={extend} alt='extend' />
                                        <div className='soft-skill-title'>Good Team Spirit</div>
                                        <div className='soft-skill-content'>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis sapien diam. 
                                            Sed sagittis, sapien eget porta semper, sem sem imperdiet augue</p>
                                    </div>
                                </Paper>
                            </Grid>
                            <Grid item md={3} sm={6} xs={12}>
                                <Paper>
                                    <img src={test} alt='test' />
                                    <div className='soft-skill-title'>Good Team Spirit</div>
                                    <div className='soft-skill-content'>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis sapien diam. 
                                            Sed sagittis, sapien eget porta semper, sem sem imperdiet augue</p>
                                    </div>
                                </Paper>
                            </Grid>
                        </Grid>
                </div>
            </Container>
        </section>
    )
}

export default SoftSkills;
