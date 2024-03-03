let menu = false;
function dropdown() {
  if (menu) {
    document.getElementById("nav-vertical").style.display = "none";
    menu = false;
  } else {
    document.getElementById("nav-vertical").style.display = "block";
    menu = true;
  }
}
