import "./App.css";
import "../src/Styles/Home.css";
import "../src/Styles/Series.css";
import "../src/Styles/Trending.css";
import "../src/Styles/SingleMovie.css";
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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<TvSeries />} />
        <Route exact path="/trending_movie/:id" element={<TrendingMovie />} />
        <Route exact path="/popular_series/:id" element={<PopularSerie />} />
        <Route exact path="/upcoming_movie/:id" element={<UpcomingMovie />} />
        <Route exact path="/now_playing/:id" element={<NowPlayingMovie />} />
        <Route exact path="/airing_today/:id" element={<AiringToday />} />
      </Routes>
    </Router>
  );
}

export default App;
