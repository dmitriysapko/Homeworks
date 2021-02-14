let age = prompt('How old are you?');
  if (age >= 0 && age <= 2){
    alert('Личинка');
  }else if (age >= 12 && age < 18){
    alert('Оболтус');
  }else if (age >= 18 && age < 60){
    alert('Раб своей работы');
  }else if (age >= 60){
    alert('Одной ногой в гробу');
  }else {
    alert('Wrong number')
  }
