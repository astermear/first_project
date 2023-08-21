let numberOfFilms;


function start() {
    do
    {
    numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");
    }
    while(!numberOfFilms || isNaN(numberOfFilms) || numberOfFilms < 0);
}

start();

let personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};




function rememberMyFilms() {
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
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB <= 10)
        {
            alert("Просмотрено довольно мало фильмов!");
        }
    else if(personalMovieDB <= 30)
        {
            alert("Вы классический зритель!");
        }
    else
        {
            alert("Вы киноман!");
        }

}






