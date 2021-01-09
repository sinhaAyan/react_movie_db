import axios from '../axios';
import React, { useEffect, useState } from 'react'
import { requests, API_KEY } from '../request';
import './banner.css';
import MoviePlayerModal from './MoviePlayerModal';
import ReactPlayer from 'react-player';


function Banner() {
    const [movie, setMovie] = useState({});
    const [modalToggle, setModalToggle] = useState(false);
    const [trailer, setTrailer] = useState("");

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchTrending);
            setMovie(request.data.results[Math.floor(Math.random()
                * request.data.results.length - 1)]);
            return request;
        }
        fetchData();
    }, []);

    useEffect(() => {
        async function fetchData() {
            const getVideo = (movie?.id) && await axios.get(`movie/${movie.id}/videos?api_key=${API_KEY}&language=en-US`);
            console.log(getVideo);
            setTrailer(getVideo?.data?.results[0]);
        } fetchData();
    }, [movie?.id])


    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    const modalHandler = (e) => {
        e.preventDefault();
        setModalToggle(!modalToggle);
    }

    const Player = (props) => {
        const youtubeUrl = "https://www.youtube.com/watch?v=";
        return (
            <ReactPlayer url={youtubeUrl + trailer?.key}
                playing
                width="100%"
            />
        );
    };

    return (
        <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage:
                    `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: "center center",
            }}
        >
            <div className="banner_contents">
                <h1 className="banner_title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>

                <MoviePlayerModal show={modalToggle} modalClosed={modalHandler}>
                    <div>The Best Has Happened To ME</div>
                    {modalToggle && <Player />}
                </MoviePlayerModal>


                <div className="banner_buttons">
                    <button className="banner_button"
                        onClick={modalHandler}>Play</button>
                </div>
                <h1 className="banner_description">
                    {truncate(movie?.overview, 150)}
                </h1>
            </div>
            <div className="banner_fadeBottom" />
        </header>
    )
}

export default Banner
