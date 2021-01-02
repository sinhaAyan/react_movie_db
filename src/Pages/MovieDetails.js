import axios from '../axios';
import React, { useEffect, useState } from 'react'
import { API_KEY, imageBase_URL } from '../request';
import "./movieDetails.css"

function MovieDetails({ match }) {
    let params = match.params;
    const [details, setDetails] = useState({});

    useEffect(() => {
        async function fetchMovieDetails() {
            const response = await axios.get(`movie/${params.id}?api_key=${API_KEY}&language=en-US`);
            setDetails(response?.data);
        }
        fetchMovieDetails();
    }, []);
    console.log(details);
    function yearOnly(date) {
        return new Date(date).getFullYear();
    }

    return (
        <div className="movieDetails">
            <div className="movieDetails_hero">
                <div className="hero" style={{
                    height: "100%",
                    width: "100%",
                    backgroundSize: "cover",
                    backgroundImage: `url(${imageBase_URL}${details.backdrop_path})`,
                    backgroundPosition: "center center",
                    opacity: "0.3",
                }}></div>
                <img className="movieDetails_poster"
                    src={`${imageBase_URL}${details.poster_path}`}
                    alt="poster" />
                <div className="movieDetails_description">

                    <h1>{details?.title} <small>
                        ({yearOnly(details?.release_date)})</small>
                    </h1>

                    <p>{details.release_date} • {details.genres?.map(item => {
                        return `${item.name} `
                    })} • {Math.floor(Number(details?.runtime) / 60)}h {Math.floor(Number(details?.runtime) % 60)}m
                    </p>

                    <p className="movieDetails_tagline"><i>{details?.tagline}</i></p>

                    <h2>overview</h2>
                    <p className="movieDetails_overview">{details?.overview}</p>

                </div>

            </div>


        </div>
    )
}

export default MovieDetails
