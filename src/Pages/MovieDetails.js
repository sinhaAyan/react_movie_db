import axios from '../axios';
import React, { useEffect, useState } from 'react'
import { API_KEY, imageBase_URL } from '../request';
import "./movieDetails.css"
import Card from '../Components/Card';

function MovieDetails({ match }) {
    let params = match.params;

    const [details, setDetails] = useState({});
    const [casts, setCasts] = useState([]);
    const [crews, setCrews] = useState([]);
    const [similarMovies, setSimilarMovies] = useState([]);

    useEffect(() => {
        async function fetchMovieDetails() {
            const response = await axios.get(`movie/${params.id}?api_key=${API_KEY}&language=en-US`);
            setDetails(response.data);

            const castAndCrew = await axios.get(`movie/${params.id}/credits?api_key=${API_KEY}&language=en-US`);
            //console.log(castAndCrew);
            setCasts(castAndCrew.data.cast);
            setCrews(castAndCrew.data.crew);
        }
        fetchMovieDetails();
    }, []);
    console.log(casts);
    //console.log(crews);
    function yearOnly(date) {
        return new Date(date).getFullYear();
    }

    function findDirector() {
        let obj = crews.find(crew => (crew.department === 'Directing'))
        return obj?.name;
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

                    <section className="movieDetails_director">
                        <h2 >{findDirector()}</h2>
                        <p>Director</p>
                    </section>
                </div>
            </div>

            <div className="movieDetails_cast">
                <h1>Top Billed Cast</h1>
                <section className="movieDetails_castRow">
                    {casts.map((cast, index) => (<Card id={index} castDetails={cast} />)).slice(0, 9)}
                </section>

            </div>


        </div>
    )
}

export default MovieDetails
