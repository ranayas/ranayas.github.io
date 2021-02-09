const GITHUB_API = 'https://api.github.com/users/ranayas';

async function init() {
  const avatar = await fetch(GITHUB_API)
    .then((response) => response.json())
    .then((data) => data.avatar_url);

  const $avatar = document.querySelector('#avatar');
  $avatar.setAttribute('src', avatar);

  document.addEventListener('scroll', function () {
    $header = document.getElementById('header');
    if (document.documentElement.scrollTop !== 0) {
      $header.classList.add('header--border');
    } else {
      $header.classList.remove('header--border');
    }
  });
}

init();
