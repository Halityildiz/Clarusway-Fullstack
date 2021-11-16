const _name = document.getElementById("name");
const _path = document.getElementById("path");
const _url = document.querySelector("#url");
const addButton = document.getElementById("registration-form").lastElementChild;

const clearStudentsBtn = document.querySelector("#clear-students");
const tbody = document.querySelector("#Students");
const loading = document.querySelector("#loading");
const table = document.querySelector(".table");

const showLoading = () =>{
    loading.style.display = "block";
}

const removeLoading = () =>{
    setTimeout(()=>{
        loading.style.display = "none";
    }, 1000);
}

window.addEventListener("DOMContentLoaded", () => {
    addButton.addEventListener("click", addNewStudent);
    clearStudentsBtn.addEventListener("");
});