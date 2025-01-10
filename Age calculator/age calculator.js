const birthday = document.getElementById("input");
const button = document.getElementById("dtn");
const result = document.getElementById("result");

function getAge(){
  const birthdayValue = birthday.value;

  if(birthdayValue === ""){
    alert("please select age you wont to calculate" );
  }else{
    const age =getAge(birthdayValue);
    result.innerText = `your age is ${age} ${age >1 ? 'year': 'years'}.`
  }
}

function getAge(birthdayValue){
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);

  let age = currentDate.getFullYear() - birthdayValue.getFullYear();
  let month = currentDate.getMonth() - birthdayValue.getMonth();

  if(month < 0 || month === 0 && currentDate.getDate() - birthdayValue.getDate()){
    age--;
  }else{
    return;
  }
}


button.addEventListener("click", getAge);