let amount = prompt('Enter the value of purchase:');
  if (amount >=200 && amount < 300){
    alert(amount*0.97 + '$ with 3% discount');
  } else if (amount >=300 && amount <= 500) {
    alert(amount*0.95 + '$ with 5% discount');
  } else if (amount > 500) {
    alert(amount*0.93 + '$ with 7% discount');
  } else {
    alert ('Wrong value')
  }
