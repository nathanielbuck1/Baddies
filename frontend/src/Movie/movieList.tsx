import { useEffect, useState } from 'react';
import { Movie } from '../types/movie';

function MovieList() {
  const [MovieData, setMovieData] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const rsp = await fetch('https://localhost:4000/Movie');
      const temp = await rsp.json();
      setMovieData(temp);
    };

    fetchMovies();
  }, []);

  return (
    <>
      <div className="row">
        <h4>The best movies eveahhh</h4>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Movie Title</th>
            <th>Year</th>
            <th>Director</th>
            <th>Rating</th>
            <th>Edited</th>
          </tr>
        </thead>
        <tbody>
          {MovieData.map((m) => (
            <tr key={m.movieId}>
              <td>{m.title}</td>
              <td>{m.year}</td>
              <td>{m.director}</td>
              <td>{m.rating}</td>
              <td>{m.edited}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default MovieList;
