const parallax1 = document.getElementById("mountain");
const parallax2 = document.getElementById("ny");
const parallax3 = document.getElementById("desk");
const parallax4 = document.getElementById("last");

window.addEventListener("scroll", function() {
  if (window.innerWidth > 500) {
    let offset = window.pageYOffset;
    parallax1.style.backgroundPositionY = offset * 0.6 + "px";
    parallax2.style.backgroundPositionY = offset * 0.6 + "px";
    parallax3.style.backgroundPositionY = offset * 0.5 + "px";
    parallax4.style.backgroundPositionY = offset * 0.4 + "px";
  }
});
