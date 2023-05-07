const API_KEY = "GDwDYLKO5khD2_snWr7L8lXwhUM";
const API_URL = "https://ci-jshint.herokuapp.com/api";
const resultsModal = new bootstrap.modal(document.getElementById("resultsModal"))

document.getElementById("status").addEventListener("click", e => getStatus(e));