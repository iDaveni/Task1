import "./style.scss";

document.addEventListener("DOMContentLoaded", function () {
  const url = "https://todo-fe57.herokuapp.com/todo";
  const input = document.getElementById("input");
  const btn = document.getElementById("btn");

  btn.addEventListener("click", function (event) {
    event.preventDefault();
    let data = new FormData();
    data.append("title", input.value);
    fetch(url, {
      method: "POST",
      body: data,
    })
      .then((response) => response.json())
      .then(function (response) {
        console.info("Ответ", response);
        return response;
      })
      .catch((response) =>
        response.json(console.log("Поле не может быть пустым!"))
      );
  });
});
