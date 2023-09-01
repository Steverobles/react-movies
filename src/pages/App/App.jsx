import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css';
import MoviesListPage from '../MoviesListPage/MoviesListPage';
import AuthPage from '../AuthPage/AuthPage';
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage';
import ActorListPage from '../ActorListPage/ActorListPage'
import NavBar from '../../components/NavBar';
import { movies } from '../../data';

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      {user ? (
        <>
          <NavBar user={user} />
          <Routes>
            <Route path="/movies/list" element={<MoviesListPage movies={movies} />} />
            <Route path="/movies/:movieName" element={<MovieDetailPage movies={movies} />}
            />
            <Route path="/actors/list" element={<ActorListPage movies={movies} />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </div>
  );
}
