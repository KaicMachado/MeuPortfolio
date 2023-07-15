export default function initAnimaDigito() {}

function animaDigito(e) {
 if (e) {
  const txtArray = e.innerHTML.split("");
  e.innerHTML = "";
  txtArray.forEach((letra, i) => {
   setTimeout(() => (e.innerHTML += letra), 70 * i);
  });
 }
}

const titulo = document.querySelector(".titulo");
animaDigito(titulo);
