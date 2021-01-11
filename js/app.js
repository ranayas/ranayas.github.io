const GITHUB_API = 'https://api.github.com/users/ranayas';

async function init() {
  const avatar = await fetch(GITHUB_API)
    .then((response) => response.json())
    .then((data) => data.avatar_url);
  console.log(avatar);

  const $avatar = document.querySelector('#avatar');
  $avatar.setAttribute('src', avatar);
}

init();
