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

const MovieCard = ({ name, showImage, genres, language, summary, rating, filmUrl }) => {
    console.log(genres);
    return (
        <Card className="movie__card">
            <CardMedia
                style={{ height: "200px" }}
                image={showImage} />
            <CardContent>
                <Typography variant="h5" className="movie__heading"><a href={filmUrl}>{name}</a></Typography>
                <p><strong>Language:</strong> {language}</p>
                <p className="flex__cup"><strong className="genres">Genre:</strong> {genres.map(gen => (<span className="tags">{gen}</span>))}</p>
                <p className="rating__box"><strong>Rating:</strong> <Box ml={2}>
                    <Rating name="read-only" value={rating} readOnly />
                </Box></p>
                <p><strong>Summary:</strong> {`${summary.slice(0, 100)}...`}</p>
            </CardContent>
        </Card>
    )
}

export default MovieCard;
