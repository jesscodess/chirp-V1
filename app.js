const birdForm = document.getElementById("bird-form");
const birdInput = document.getElementById("bird");
const resultList = document.getElementById("birds");

let apiRequest = new XMLHttpRequest();

birdForm.addEventListener("submit", ($event) => {
    $event.preventDefault();
    const searchedBird = birdInput.value;
    apiRequest.open('GET', 'https://xeno-canto.org/api/3/recordings?query=en:' + searchedBird + '&per_page=50&page=1&key=10086c11aefae3c85c6673f71fd634f143b0468d');
    apiRequest.send();
});


apiRequest.onreadystatechange = () => {
    if (apiRequest.readyState === 4) {
      const response = JSON.parse(apiRequest.response);
      resultList.innerHTML =
      `
      <div class="card">
      <iframe src='https:${response.recordings[0].url}/embed?simple=1' scrolling='no' frameborder='0' width='500' height='200'></iframe>
      </div>
      `
    } else {
      resultList.innerHTML =
      `
      <p>Loading...</p>
      `
}};
