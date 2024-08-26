import { useEffect, useState } from "react";
import api from ".././services/api";
import { Link } from "react-router-dom";
import "./home.css";

// URL DA API: /movie/now_playing?api_key=28fc232cc001c31e8a031f419d0a14ca&language=pt-BR

function Home() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoanding] = useState(true);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "4a5bab94f975c44c82767b99c899fbf4",
          language: "pt-BR",
          page: 1,
        },
      });

      //console.log(response.data.results.slice(0, 10));
      setFilmes(response.data.results.slice(0, 10));
      setLoanding(false);
    }

    loadFilmes();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <h2>Carregando Filmes....</h2>
      </div>
    );
  }

  return (
    <div>
      <div className="container">
        <div className="lista-filmes">
          {filmes.map((filmes) => {
            return (
              <article key={filmes.id}>
                <strong>{filmes.title}</strong>
                <img
                  src={`https://image.tmdb.org/t/p/original/${filmes.poster_path}`}
                  alt={filmes.title}
                />
                <Link to={`/filme/${filmes.id}`}>Acessar</Link>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
