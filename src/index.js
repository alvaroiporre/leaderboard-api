import './index.css';

let data = [];

window.document.getElementById("refresh").addEventListener('click', () => {
  getScore();
  console.log("click refresh");
});

const getScore = () => {

  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Pj6OOuAoNFLnlMr5reNl/scores')
    .then((response) => response.json())
    .then((json) => {
      data = json.result;
      console.log(data)
    });

}
