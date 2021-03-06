import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Spinner } from "../components/Spinner";
import { getMovieImg } from "../utils/getMovieImg";
import { obtenPath } from "../utils/httpClient";
import styles from "./MovieDetails.module.css";

export function MovieDetails() {
    const {movieId} = useParams();
    //console.log("Este es el parámetro del id:"+ movieId);
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState (null);



    useEffect(() => {
        setIsLoading(true);
        obtenPath("/movie/" + movieId).then(data => {
            setIsLoading(false);
            setMovie(data);
        });
    }, [movieId]);

    if(isLoading) {
        return <Spinner />;
    }

    if (!movie) {
        return null;
    }
    
    const imageUrl = getMovieImg(movie.poster_path, 500); 
    return (
        
        <div className={styles.detailsContainer}>
            <img className={styles.col + " " + styles.movieImage} 
            src={imageUrl} 
            alt={movie.title} 
            />
            <div className={styles.col + " " + styles.movieDetails} >
                <p className={styles.firstItem}>
                    <strong>Title:</strong> {movie.title}
                </p>
                <p>
                  <strong>Genres:</strong>{" "}  
                  {movie.genres.map(genre => genre.name).join(", ")}
                </p>
                <p>
                    <strong>Description:</strong> {movie.overview}
                </p>
            </div>
        </div>
    );
}