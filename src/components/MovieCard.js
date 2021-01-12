import React from 'react';
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Box
} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import './movieCard.css';

const MovieCard = ({_id, title, desc, image, rating, releaseDate, language}) => {
    return (
        <Card className="movie__card">
            <CardMedia
                style={{ height: "200px", objectFit: "contain", width: "60%", margin: "auto", borderBottomLeftRadius: 100, borderBottomRightRadius: 100,}}
                image={`https://image.tmdb.org/t/p/w185/${image}`}
                title={title} />
            <CardContent>
                <Typography variant="h5" className="movie__heading"><a href={`https://www.themoviedb.org/movie/${_id}`}>{title}</a></Typography>
                <p><strong>Summary:</strong> {`${desc.slice(0, 100)}...`}</p>
                <p className="rating__box"><strong>Rating:</strong> <Box ml={2}>
                    <Rating name="read-only" value={rating} readOnly />
                </Box></p>
                <p><strong>Language:</strong> {language.toUpperCase()}</p>
                <p><strong>Release Date:</strong> {releaseDate}</p>

            </CardContent>
        </Card>
    )
}

export default MovieCard;
