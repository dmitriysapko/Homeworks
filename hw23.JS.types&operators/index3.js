let number = prompt('Enter the number from 100 to 999');
    number = `${number}`;
    if (number[0] == number[1] || number[0] == number[2] || number[1] == number[2]) {
        alert('TRUE');
    }else {
      alert('FALSE');
    }
