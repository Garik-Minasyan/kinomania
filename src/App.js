import React, { useState, useEffect } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import About from "./components/About";
import Search from "./components/Search";
import OneFilm from "./components/OneFilm";
import "./App.css";
import axios from "axios";

const Api_Key = "da28ea80576fc0af9b22a9958109445b";

const getUrl = (type) =>
  `https://api.themoviedb.org/3${type}?api_key=${Api_Key}&language=en-US&page=1`;

const T_1 = "/trending/movie/week";

const App = () => {
  const [films, setFilms] = useState([]);
  const [selectedType, setSelectedType] = useState(T_1);

  useEffect(() => {
    const fechFilms = async () => {
      const res = await axios.get(getUrl(selectedType));
      setFilms(res.data.results);
    };

    fechFilms();
  }, [selectedType]);

  return (
    <Router>
      <div className="App">
        <div>
          <Header />
        </div>
        <Switch>
          <Route path="/" exact>
            <Home setFilmType={setSelectedType} films={films} />
          </Route>
        </Switch>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
        <Switch>
          <Route path="/search">
            <Search />
          </Route>
        </Switch>
        <Switch>
          <Route path="/movie/:id">
            <OneFilm films={films} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
