import './index.css';

let data = [];

window.document.getElementById("refresh").addEventListener('click', () => {
  getScore();
});

window.document.getElementById('button-form').addEventListener('click', () => {
  const user = window.document.getElementById('name-input').value;
  const score = window.document.getElementById('score-input').value;
  addScore(user, score);
});

const getScore = async () => {
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Pj6OOuAoNFLnlMr5reNl/scores')
    .then((response) => response.json())
    .then((json) => {
      data = json.result;
      console.log(data)
    });
}

const addScore = async (user, score) => {
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Pj6OOuAoNFLnlMr5reNl/scores', {
    method: 'POST',
    body: JSON.stringify({
      "user": user,
      "score": Number(score),
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((json) => {
      if(json.response === 'Leaderboard score created correctly.') getScore()
    });
};

getScore();