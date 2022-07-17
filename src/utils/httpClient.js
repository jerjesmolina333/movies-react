// const APIEXT = process.env.REACT_APP_API;
// const API_TOKEN=process.env.REACT_APP_API_TOKEN;
const APIEXT="https://api.themoviedb.org/3";
const API_TOKEN="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4N2U2NmQzMzZhOWE1ODYyYzkyODc3YzdlNDI1MGRhYSIsInN1YiI6IjYyYmY5MDIyYWY2ZTk0MDQ2YzcwODFhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-rMNhweMKfrJvaOsSQ8C48YCA7OwjychohwZ2ljJ_rk";






export function obtenPath(path) {
    return fetch(APIEXT + path, {
      headers: {
        Authorization:
        "Bearer " + API_TOKEN,
        "Content-Type": "application/json;charset=utf-8"
      },
    }).then((result) => result.json());
  };
