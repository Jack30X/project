const numberOfFilms = prompt('скільки філмів ви вже подивились?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один із останніх переглянутих фільмів?', ''),
    b = prompt('Наскілки оціните його?', ''),
    c = prompt('Один із останніх переглянутих фільмів?', ''),
    d = prompt('Наскілки оціните його?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);