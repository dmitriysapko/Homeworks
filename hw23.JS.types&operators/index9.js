let capital = prompt('What is the capital of Great Britain? 1 - London | 2 - New York | 3 - Paris');
let currency = prompt('What is the currency of the Ukraine? 1 - USD | 2 - UAH | 3 - RUB');
let iron = prompt('Who is the Iron Man? 1 - Tony Stark | 2 - Steve Rogers | 3 - Alexei Panin');
let score = 0;
  if (capital == 1){
    score += 2;
  }
  if (currency == 2){
    score += 2;
  }
  if (iron == 1){
    score += 2;
  }
  alert('Your score is ' + score);
