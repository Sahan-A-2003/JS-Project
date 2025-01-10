const input = document.getElementById("input");

function reversString (string) {
  return string.split("").revers().join("");
}


function check () {
  const value = input.value;
  const stringrevers = reversString(value);

  if(value === stringrevers) {
    alert('This is palindrome worde');
  } else{
    alert("this in not an palindrome word");
  }

  input.value = '';
}