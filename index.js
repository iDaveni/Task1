import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";
import "./style.scss";

document.addEventListener("DOMContentLoaded", () => {
  const url = "https://todo-fe57.herokuapp.com/todo";
  const input = document.getElementById("input");
  const btn = document.getElementById("btn");

  btn.addEventListener("click", (event) => {
    event.preventDefault();
    let data = new FormData();
    data.append("title", input.value);
    if (input.value === "") {
      alert("Поле не может быть пустым!");
      return;
    }
    fetch(url, {
      method: "POST",
      body: data,
    })
      .then((response) => response.json())
      .then((response) => {
        alert("Запрос выполнен успешно!");
        console.log("result", response);
      });
  });
});
