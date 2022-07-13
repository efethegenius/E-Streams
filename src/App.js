import "./App.css";
import "../src/Styles/Home.css";
import "../src/Styles/Series.css";
import "../src/Styles/Trending.css";
import "../src/Styles/SingleMovie.css";
import { AuthContext } from "./helpers/AuthContext";
import "../src/Styles/Input.css";
import { Home } from "./Pages/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";
import { Movies } from "./Pages/Movies";
import { TvSeries } from "./Pages/TvSeries";
import { TrendingMovie } from "./Pages/TrendingMovie";
import { PopularSerie } from "./Pages/PopularSerie";
import { UpcomingMovie } from "./Pages/UpcomingMovie";
import { NowPlayingMovie } from "./Pages/NowPlayingMovie";
import { AiringToday } from "./Pages/AiringToday";
import { useState } from "react";
import { Searches } from "./Pages/Searches";
import { Searched } from "./Pages/Searched";
import { SearchedSeries } from "./Pages/SearcheddSeries";

function App() {
  const [nowPlayingPage, setNowPlayingPage] = useState(1);
  const [airingPage, setAiringPage] = useState(1);
  const [popularPage, setPopularPage] = useState(1);
  const [upcomingPage, setUpcomingPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <AuthContext.Provider
      value={{
        nowPlayingPage,
        setNowPlayingPage,
        airingPage,
        setAiringPage,
        popularPage,
        setPopularPage,
        upcomingPage,
        setUpcomingPage,
        searchTerm,
        setSearchTerm,
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/result" element={<Searches />} />
          <Route path="/series" element={<TvSeries />} />
          <Route exact path="/trending_movie/:id" element={<TrendingMovie />} />
          <Route exact path="/popular_series/:id" element={<PopularSerie />} />
          <Route exact path="/upcoming_movie/:id" element={<UpcomingMovie />} />
          <Route exact path="/now_playing/:id" element={<NowPlayingMovie />} />
          <Route exact path="/airing_today/:id" element={<AiringToday />} />
          <Route exact path="/movie/:id" element={<Searched />} />
          <Route exact path="/tv-series/:id" element={<SearchedSeries />} />
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
