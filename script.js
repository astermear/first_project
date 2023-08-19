let numberOfFilms = "";
do
{
    numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");
}
while(!numberOfFilms);

let personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

for (let i = 0; i < 2; i++)
{
    let lastFilm, rateLastFilm;

    lastFilm = prompt("Один из последних посмотренных фильмов?", "");
    while(!lastFilm || lastFilm > 50)
    {
        alert("Ошибка!");
        lastFilm = prompt("Один из последних посмотренных фильмов?", "");
    }

    rateLastFilm = +prompt("Как вы его оцените(от 1 до 10)?", "");
    while(!rateLastFilm || rateLastFilm > 10 || rateLastFilm < 0)
    {
        alert("Ошибка!");
        rateLastFilm = +prompt("Как вы его оцените(от 1 до 10)?", "");
    }
    
    personalMovieDB.movies[lastFilm] = rateLastFilm;
}
console.log(personalMovieDB);



