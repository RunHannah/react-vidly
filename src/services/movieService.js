import http from './httpService';

const apiEndpoint = '/movies';

function movieUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getMovies() {
  return http.get(apiEndpoint);
}

export function getMovie(movieId) {
  return http.get(movieUrl(movieId));
}

export function saveMovie(movie) {
  if (movie._id) {
    // remove id from movie object so there is only one id (from url) sent back to api
    // make a copy of movie and send as body

    const body = { ...movie };
    delete body._id;
    return http.put(movieUrl(movie), body);
  }
  return http.post(apiEndpoint, movie);
}

export function deleteMovie(movieId) {
  return http.delete(movieUrl(movieId));
}
