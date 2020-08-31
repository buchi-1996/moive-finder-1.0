import React from 'react';
import { Grid, Container, Button, Typography, Card, CardActions, CardMedia } from '@material-ui/core'; 
import './hero.css';

const Hero = () => {
    return (
      <section className="hero">
            <Container maxWidth="lg">
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" className="hero__title">We've Got Quality Movies</Typography>
                    <Typography color="textSecondary" variant="p" className="hero__subtitle">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi adipisci, sapiente debitis at ea soluta doloribus odio ipsa ad et, vel tempore! Minus fugiat reiciendis, eligendi possimus facilis, tempora, molestias doloremque corrupti consequuntur iste porro nisi qui quam animi cumque!</Typography>
                    <CardActions className="hero__buttons">
                        <Button variant="contained" color="default">Explore</Button>
                        <Button variant="contained" color="primary">Discorver</Button>
                    </CardActions>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card className="hero__img">
                        <CardMedia 
                        style={{height: "400px"}}
                        image="https://thumbs.gfycat.com/ReflectingNeglectedBug-size_restricted.gif"
                        />
                    </Card>
                </Grid>
            </Grid>
        </Container>
      </section>
    )
}

export default Hero;
