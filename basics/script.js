/* eslint-disable no-plusplus */
/* eslint-disable no-restricted-globals */

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start() {
    personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', 0);
    while (
      personalMovieDB.count === '' ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', 0);
    }
  },
  rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
      const lastViewed = prompt('Один из последних просмотренных фильмов?', '');
      const lastViewedRating = +prompt('На сколько оцените его?', 0);

      if (
        lastViewed != null &&
        lastViewedRating != null &&
        lastViewed !== '' &&
        lastViewedRating !== '' &&
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
  },
  detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
      console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 10) {
      console.log('Вы киноман');
    } else {
      console.log('Произошла ошибка');
    }
  },
  showMyDB(hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB() {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
  writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
      const genre = prompt(`Ваш любимый жанр под номером ${i}`);
      if (genre === '' || genre == null) {
        console.log('Enter incorrect. Try again');
        i--;
      } else {
        personalMovieDB.genres.push(genre);
      }
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр #${i + 1} - это ${item}`);
    });
  },
};
