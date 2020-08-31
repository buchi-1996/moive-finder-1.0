import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid } from '@material-ui/core';
import './movieGallery.css';
import MovieCard from './MovieCard';
import FormSearch from './FormSearch';

const MovieGallery = () => {
    const [Movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [term, setTerm] = useState('game of thrones');

    useEffect(() => {
       const getMovie = async () => {
           const response = await fetch(`http://api.tvmaze.com/search/shows?q=${term}`);
           const resData = await response.json();
           const data = resData.map(res => {
               return {
                   _id: res.show.id,
                   name: res.show.name,
                   showImage: res.show.image ? res.show.image.original : '',
                   genres: res.show.genres,
                   rating: res.show.rating.average,
                   language: res.show.language,
                   summary: res.show.summary,
                   filmUrl: res.show.url
               }
           })
            console.log(resData);
            setMovies(data);
            setIsLoading(false);
       }
       getMovie();
    }, [term]);



    return (
        <section className="search__area">
            <Container>
                <Typography variant="h4" className="search__heading">Available movies on site</Typography>
                <FormSearch searchText={text => setTerm(text)} />

                {!isLoading && Movies.length === 0 &&  <h2 className="loader">movie not found</h2>}

                {isLoading ? <h2 className="loader">Loading....</h2> : 
                <Grid container spacing={3}>
                {Movies.map(movie => (
                     <Grid className="card__flex" key={movie._id} item xs={12} sm={6} md={4} lg={4}>
                     <MovieCard  {...movie}/>
                 </Grid>
                ))}
            </Grid>}
                    
            </Container>
        </section>
    )
}

export default MovieGallery;
