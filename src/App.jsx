//import { MoviesGrid } from "./components/MoviesGrid";
import styles from "./App.module.css";
import { LandingPage } from "./pages/LandingPage";

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails";

export function App() {
  return (
    <Router>
      <header>
        <Link to="/"><h1 className={styles.title}>Películas</h1></Link>
      </header>
      <main>
        <Routes>
          <Route exact path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/" element={<LandingPage />} /> 
        </Routes> 

      </main>
    </Router>
  );
}
