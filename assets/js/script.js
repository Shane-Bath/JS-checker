const API_KEY = "GDwDYLKO5khD2_snWr7L8lXwhUM";
const API_URL = "https://ci-jshint.herokuapp.com/api";
const resultsModal = new bootstrap.Modal(document.getElementById("resultsModal"));

document.getElementById("status").addEventListener("click", e => getStatus(e));
// Make a GET request to the Api URL with the API key
//Pass the data to a display function

async function getStatus(e) {
    const queryString = `${API_URL}?api_key=${API_KEY}`;

    const response = await fetch(queryString); // await the response

    const data = await response.json(); // convert to json

    if (response.ok) {
        displayStatus(data);
        // console.log(data.expiry);
    } else {
        throw new Error(data.error);
    }
}

function displayStatus(data) {
    let heading = "API Key Status"
    let results = `<div>Your Key is Valid until</div>`;
    results += `<div class="key-status">${data.expiry}</div>`;
    document.getElementById("resultsModalTitle").innerText = heading;
    document.getElementById("results-content").innerHTML = results;



    resultsModal.show();
}

