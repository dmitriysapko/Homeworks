let number = prompt('Enter the number from 10000 to 99999');
  number = `${number}`;
  if (number === number.split('').reverse().join('')) {
    alert('palindrome');
  }else {
    alert('NOT palindrome');
  }
