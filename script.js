// Є текстове поле на сторінці. Під час фокусування на цьому полі збоку з'являється <div>. При пропажі фокусу - <div> так само пропадає

let inputText = document.getElementById("inputText");
let show = document.getElementById("display");

inputText.addEventListener("focus", function (displayDiv) {
  show.style.display = "block";
  console.log("Блок видно!");
});

inputText.addEventListener("blur", function (displayDiv) {
  show.style.display = "none";
  console.log("Блок не видно!");
});
