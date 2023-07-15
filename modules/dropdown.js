import outsideClick from "./click-outside.js";

export default function initDropdownMenu() {
 const dropdownMenus = document.querySelectorAll("[data-dropdown]");

 dropdownMenus.forEach((menu) => {
  ["touchstart", "click"].forEach((userEvent) => {
   menu.addEventListener(userEvent, handleClick);
  });
 });

 function handleClick(e) {
  this.classList.add("active");
  outsideClick(this, ["touchstart", "click"], () => {
   this.classList.remove("active");
  });
 }
}
