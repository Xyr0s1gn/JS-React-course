'use strict';

let numberOfFilms;

function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', 0);
  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', 0);
  }
}

start();

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    let lastViewed = prompt('Один из последних просмотренных фильмов?', '');
    let lastViewedRating = +prompt('На сколько оцените его?', 0);

    if (
      lastViewed != null &&
      lastViewedRating != null &&
      lastViewed != '' &&
      lastViewedRating != '' &&
      lastViewed != null &&
      lastViewedRating != null &&
      lastViewed.length < 50
    ) {
      personalMovieDB.movies[lastViewed] = lastViewedRating;
      console.log('Done');
    } else {
      console.log('Error!');
      i--;
    }
  }
}
// rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
  } else if (personalMovieDB.count >= 10) {
    console.log('Вы киноман');
  } else {
    console.log('Произошла ошибка');
  }
}
// detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  for (let i = 0; i < 3; i++) {
    personalMovieDB.genres.push(
      prompt(`Ваш любимый жанр под номером ${i + 1}`)
    );
  }
}
// writeYourGenres();

function learnJS(lang, callback) {
  console.log(`I am learning ${lang}`);
  callback();
}

learnJS('JavaScript', function () {
  console.log('This lesson is finished');
  console.log(' Yep.');
});
