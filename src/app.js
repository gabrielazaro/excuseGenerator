/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#The-excuse").innerHTML = generateExcuse();
  });
  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let pronoun = ["Mi", "Un", "El"];
  let subject = [" vecino", " rata", " perro", " chofer", " comediante"];
  let action = [
    " agarró mi",
    " me lanzó",
    " me grito",
    " robó mi",
    " mordió",
    " se llevó"
  ];
  let possetion = [" tarea", " coche", " zapato", " cartera"];
  let where = [
    " del baño",
    " en la oficina",
    " de la casa",
    " de la sala",
    " en la avenida",
    " a mitad de la calle"
  ];
  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let subjectIndex = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let possetionIndex = Math.floor(Math.random() * possetion.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  return (
    pronoun[pronounIndex] +
    "" +
    subject[subjectIndex] +
    "" +
    action[actionIndex] +
    "" +
    possetion[possetionIndex] +
    "" +
    where[whereIndex] +
    ""
  );
};
