import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const Companies = () => {
    return (
        <section className='companies-section'>
            <Container fixed>
                <div className='section-title'>Who I Have Worked With...</div>
                <div className='companies-content'>

                        <Grid container spacing={4} className='company-card'>
                            <Grid item md={4} sm={12} xs={12}>
                                <Paper>
                                        <p>Andela</p>
                                </Paper>
                            </Grid>
                            <Grid item md={4} sm={12} xs={12}>
                                <Paper>
                                        <p>Punterclash</p>
                                </Paper>
                            </Grid>
                            <Grid item md={4} sm={12} xs={12}>
                                <Paper>
                                        <p>UBA</p>
                                </Paper>
                            </Grid>
                        </Grid>
                </div>
            </Container>
        </section>
    )
}

export default Companies;
