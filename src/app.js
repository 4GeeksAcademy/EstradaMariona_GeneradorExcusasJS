/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["El perro", "Mi madre", "Mi abuela", "Mi gato"];
  let action = ["se comió", "rompió", "meó", "aplastó"];
  let what = ["mis deberes", "mi coche", "mi telefono"];
  let when = [
    "antes de la clase",
    "cuando dormia",
    "cuando jugaba a futbol",
    "cuando cenaba"
  ];

  function generarexcusas() {
    let whoRandom = Math.floor(Math.random() * who.length);
    let actionRandom = Math.floor(Math.random() * action.length);
    let whatRandom = Math.floor(Math.random() * what.length);
    let whenRandom = Math.floor(Math.random() * when.length);
    let excusas =
      who[whoRandom] +
      " " +
      action[actionRandom] +
      " " +
      what[whatRandom] +
      " " +
      when[whenRandom];
    return excusas;
  }
  let excusasElement = document.getElementById("excuse");
  excusasElement.innerHTML = generarexcusas();
};
