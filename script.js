let numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");
let personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

let lastFilm = prompt("Один из последних посмотренных фильмо?", '');
let rateLastFilm = +prompt("Как вы его оцените(от 1 до 10)?", "");
personalMovieDB.movies[lastFilm] = rateLastFilm;

