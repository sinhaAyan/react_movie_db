import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MovieDetails from './Pages/MovieDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/movie/:id" component={MovieDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
