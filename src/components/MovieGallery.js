import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid } from '@material-ui/core';
import './movieGallery.css';
import MovieCard from './MovieCard';
import FormSearch from './FormSearch';

const MovieGallery = () => {
    const [Movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [term, setTerm] = useState('spider man');

    useEffect(() => {
       const getMovie = async () => {
        // const response = await fetch(`https://api.tvmaze.com/search/shows?q=${term}`);
           const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${term}&api_key=3dbab9996a73281daab4840175a76c4f`);
           const resData = await response.json();
           const data = resData.results.map(x => ({
               _id: x.id,
               title: x.title,
               desc: x.overview,
               image: x.poster_path,
               rating: x.vote_average,
               releaseDate: x.release_date,
               language: x.original_language
           }))
            console.log(resData.results);
            setMovies(data);
            setIsLoading(false);
       }
       getMovie();
    }, [term]);



    return (
        <section className="search__area">
            <Container maxWidth="lg">
                <Typography variant="h4" className="search__heading">Available movies on site</Typography>
                <FormSearch searchText={text => setTerm(text)} />

                {!isLoading && Movies.length === 0 &&  <h2 className="loader">movie not found</h2>}

                {isLoading ? <h3 className="loader"><img src="../../../logo192.png" alt=""/><br></br>Loading...</h3> : 
                <Grid container spacing={3}>
                {Movies.map(movie => (
                     <Grid className="card__flex" key={movie._id} item xs={12} sm={6} md={4} lg={3}>
                     <MovieCard  {...movie}/>
                 </Grid>
                ))}
            </Grid>}
                    
            </Container>
        </section>
    )
}

export default MovieGallery;
