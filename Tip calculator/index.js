const billAmount = document.querySelector('.bill');
const tipPercentage = document.querySelector('.tip');
const totalBill = document.querySelector('.js-total'); 
const btn = document.querySelector('.js-calculater');

function calculateTotal () {
  let bill = parseFloat(billAmount.value)
  let presantage = parseFloat(tipPercentage.value);
  let total = bill + ((bill * presantage) /100);
  
  totalBill.innerHTML = `$${total.toFixed(2)}`;

  // billAmount.value = '';
  // tipPercentage.value = '';
}

btn.addEventListener('click', calculateTotal);
