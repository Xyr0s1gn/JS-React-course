document.addEventListener('DOMContentLoaded', () => {
  const movieDB = {
    movies: [
      'Логан',
      'Лига справедливости',
      'Ла-ла лэнд',
      'Одержимость',
      'Скотт Пилигрим против...',
    ],
  };

  const promoAds = document.querySelectorAll('.promo__adv img');
  const promoBg = document.querySelector('.promo__bg');
  const promoGenre = promoBg.querySelector('.promo__genre');
  const movieList = document.querySelector('.promo__interactive-list');
  const addForm = document.querySelector('form.add');
  const addInput = addForm.querySelector('.adding__input');
  const checkbox = addForm.querySelector('[type="checkbox"]');

  const sortArr = arr => {
    arr.sort();
  };

  const deleteAdv = arr => {
    arr.forEach(item => {
      item.remove();
    });
  };

  const makeChanges = () => {
    promoBg.style.backgroundImage = 'url(img/bg.jpg)';
    promoGenre.innerText = 'ДРАМА';
  };

  function createMovieList(films, parent) {
    parent.innerHTML = '';
    sortArr(films);

    films.forEach((film, i) => {
      parent.innerHTML += `
      <li class="promo__interactive-item">${i + 1} ${film}
      <div class="delete"></div>
      </li>
      `;
    });

    document.querySelectorAll('.delete').forEach((btn, i) => {
      btn.addEventListener('click', () => {
        btn.parentElement.remove();
        films.splice(i, 1);
        createMovieList(films, parent);
      });
    });
  }

  addForm.addEventListener('submit', event => {
    event.preventDefault();

    let newFilm = addInput.value;
    const favorite = checkbox.checked;

    if (newFilm) {
      if (newFilm.length > 21) {
        newFilm = `${newFilm.substring(0, 22)}...`;
      }

      if (favorite) {
        console.log('Добавляем новый фильм');
      }

      movieDB.movies.push(newFilm);
      sortArr(movieDB.movies);
      createMovieList(movieDB.movies, movieList);
    }
    event.target.reset();
  });

  deleteAdv(promoAds);
  makeChanges();
  createMovieList(movieDB.movies, movieList);
});
