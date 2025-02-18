const menu = document.querySelector(".menu");
const navigation = document.querySelector(".navigation");

menu.addEventListener("click", () => {
  if (menu.src.endsWith("images/icon-hamburger.svg")) {
    menu.src = "images/icon-close.svg";
    navigation.style.display = "block";
  } else {
    menu.src = "images/icon-hamburger.svg";
    navigation.style.display = "none";
  }
});
