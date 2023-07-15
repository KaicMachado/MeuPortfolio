import outsideClick from "./click-outside.js";

export default function initMenuMobile() {
 const btnMobile = document.querySelector(".btn-mobile");

 function toggleMenu() {
  const navList = document.getElementById("list");
  const hamburguer = document.querySelector("#hamburguer");

  navList.classList.add("active");
  hamburguer.classList.add("active");

  outsideClick(navList, ["click", "touchstart"], () => {
   navList.classList.remove("active");
   hamburguer.classList.remove("active");
  });
 }

 btnMobile.addEventListener("click", toggleMenu);
}
