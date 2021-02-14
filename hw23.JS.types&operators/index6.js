let amount = +prompt('Enter the amount of USD:');
let currency = prompt('EUR = 1, UAH = 2, AZN = 3');
  switch(currency) {
    case '1':
      alert(amount*0.82 + 'EUR');
      break;
    case '2':
      alert(amount*28.09 + 'UAH');
      break;
    case '3':
      alert(amount*1.7 + 'AZN');
      break;
    }
