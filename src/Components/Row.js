import axios from '../axios';
import React, { useEffect, useState } from 'react';
import './row.css';


function Row({ title, fetchUrl }) {

    const base_URL = "https://image.tmdb.org/t/p/original/";
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
                {movies.map(item => (
                    <img key={item.id}
                        className="row_poster"
                        src={`${base_URL}${item.poster_path}`}
                        alt={item.name} onClick={() => {
                            console.log("movie ID:>>>>> ", item.id);
                        }}
                    />
                ))}
            </div>
        </div>
    )
}

export default Row;
