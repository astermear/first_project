

let personalMovieDB = {
    count : 0,
    movies : {},
    actors : {},
    genres : [],
    privat : false,
    start: function () {
    do 
    {
        return +prompt("Сколько фильмов вы посмотрели?", "");
    } 
    while(!numberOfFilms || isNaN(numberOfFilms) || numberOfFilms < 0);
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
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
    },
    showMyDB: function() {
        if(!personalMovieDB.privat) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        let answerUser;
        for (let i = 1; i <= 3; i++) {
            answerUser = prompt(`Ваш любимый жанр под номером ${i}?`, "");
            while(!answerUser)
            {
                answerUser = prompt(`Ваш любимый жанр под номером ${i}?`, "");
            }
            personalMovieDB.genres[i - 1] = answerUser;
            answerUser = "";
        }
        this.genres.forEach((item, i) => console.log(`Любимый жанр ${i + 1} - ${item}`));
    },
    toggleVisibleDB: function() {
        this.privat = !privat
    }
    
};

personalMovieDB.count = personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB();


