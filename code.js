function ToggleMobileMenu() {
  var x = document.getElementById("menu_links");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function HideMobileMenu() {
  var x = document.getElementById("menu_links");
  x.style.display = "none";
}

function ToggleDark() {
  var x = document.getElementById("home");
  if (document.body.style.backgroundImage === 'url("light-prism.svg")') {
    document.body.style.backgroundImage = "url('dark-prism.svg')";
    x.style.color = "#ffffff";
    document.getElementById('youtube').src= "light-youtube.svg";
    document.getElementById('linkedin').src= "light-linkedin.svg";
    document.getElementById('github').src= "light-github.svg";
  } else {
    document.body.style.backgroundImage = "url('light-prism.svg')";
    x.style.color = "#2e2e2e"
    document.getElementById('youtube').src= "dark-youtube.svg";
    document.getElementById('linkedin').src= "dark-linkedin.svg";
    document.getElementById('github').src= "dark-github.svg";
  }
}