import { useState } from 'react';
import data from './MovieData.json';

const mds = data.MovieData;

function MovieList123() {
  const [ListOMovies, setListOMovies] = useState(mds);

  return (
    <>
      <div>
        <h3>Joel hiltons movie collectionnnn!!!!</h3>
      </div>

      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Edited</th>
            </tr>
          </thead>
          <tbody>
            {mds.map((m) => (
              <tr>
                <td>{m.Title}</td>
                <td>{m.Year}</td>
                <td>{m.Director}</td>
                <td>{m.Rating}</td>
                <td>{m.Edited}</td>
              </tr>
            ))}
            <tr></tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MovieList123;
