const showButton = document.getElementById('show-button');
const closeButton = document.getElementById("close-button");
const sideBar = document.querySelector('.js-side-bar');
const navbar = document.getElementById("wood maker");

const opernSidbar = () => {
  sideBar.style.display = 'block';
  if(sideBar==='block'){
    navbar.style.display = 'none';
  }
}

showButton.addEventListener("click", () => {
  opernSidbar ();
});

closeButton.addEventListener ('click', () => {
  sideBar.style.display = 'none';

});