import './index.css';

let data = [];

const user = window.document.getElementById('name-input');
const score = window.document.getElementById('score-input');
const scoresList = window.document.querySelector('.score-list');

const getScore = async () => {
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Pj6OOuAoNFLnlMr5reNl/scores')
    .then((response) => response.json())
    .then((json) => {
      data = json.result;
      scoresList.innerHTML = '';
      data.forEach((dat, index) => {
        scoresList.innerHTML += `<li class="li-${index % 2}"><p><b>${dat.user}</b> : ${dat.score}</p></li>`;
      });
    });
};

const addScore = async (userAdd, scoreAdd) => {
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Pj6OOuAoNFLnlMr5reNl/scores', {
    method: 'POST',
    body: JSON.stringify({
      user: userAdd,
      score: Number(scoreAdd),
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((json) => {
      if (json.response === 'Leaderboard score created correctly.') {
        getScore();
      }
      user.value = '';
      score.value = '';
    });
};
window.document.getElementById('refresh').addEventListener('click', () => {
  getScore();
});

window.document.getElementById('button-form').addEventListener('click', () => {
  addScore(user.value, score.value);
});
getScore();