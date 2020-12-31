import React from 'react'
import Banner from '../Components/Banner'
import Row from '../Components/Row'
import requests from '../request'

function Home() {
    return (
        <div>
            <Banner />
            <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
            <Row title="Tranding Now" fetchUrl={requests.fetchTrending} />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row title="Adventure Movies" fetchUrl={requests.fetchAdventureMovies} />
            <Row title="Animation Movies" fetchUrl={requests.fetchAnimationMovies} />
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Crime Movies" fetchUrl={requests.fetchCrimeMovies} />
            <Row title="Documentary Movies" fetchUrl={requests.fetchDocumentaryMovies} />
            <Row title="Drama" fetchUrl={requests.fetchDramaMovies} />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
            <Row title="Thiller Movies" fetchUrl={requests.fetchThrillerMovies} />
            <Row title="War Movies" fetchUrl={requests.fetchWarMovies} />

        </div>
    )
}

export default Home
