const API_KEY = '8a9987d318026123f28a73b5a314a0c1';

const requests = {
    fetchTrending: `trending/all/week?api_key=${API_KEY}`,
    fetchNetflixOriginals: `discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `movie/top_rated?api_key=${API_KEY}`,
    fetchActionMovies: `discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchAdventureMovies: `discover/movie?api_key=${API_KEY}&with_genres=12`,
    fetchAnimationMovies: `discover/movie?api_key=${API_KEY}&with_genres=16`,
    fetchComedyMovies: `discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchCrimeMovies: `discover/movie?api_key=${API_KEY}&with_genres=80`,
    fetchDocumentaryMovies: `discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchDramaMovies: `discover/movie?api_key=${API_KEY}&with_genres=18`,
    fetchHorrorMovies: `discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchThrillerMovies: `discover/movie?api_key=${API_KEY}&with_genres=53`,
    fetchWarMovies: `discover/movie?api_key=${API_KEY}&with_genres=10752`,
}

export default requests;

