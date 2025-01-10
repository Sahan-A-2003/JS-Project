const red = document.getElementById('js-red');
const green = document.getElementById('js-green');
const blue = document.getElementById('js-blue');

const body = document.getElementsByTagName("body")[0];

function reeanRed() {
  body.style.backgroundColor = "red";
}

function reeanGreen() {
  body.style.backgroundColor = "green";
}

function reeanBlue() {
  body.style.backgroundColor = "blue";
}

function randomColor () {
  const reds = Math.round(Math.random() * 255);
  const greens = Math.round(Math.random() * 255);
  const blues = Math.round(Math.random() * 255);

  const color = `rgb(${reds}, ${greens}, ${blues})`;
  body.style.backgroundColor = color;

}
