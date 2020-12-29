import './App.css';
import Row from './Components/Row';
import requests from './request';

function App() {
  return (
    <div className="App">
      <h1>Movie DB</h1>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Tranding Now" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
