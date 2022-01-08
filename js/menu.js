const menu = () => {
  document.querySelector(".header__navbar").classList.toggle("active")
    ? document.querySelector(".header__navbar").style.display = "block"
    : document.querySelector(".header__navbar").style.display = "none";
};
