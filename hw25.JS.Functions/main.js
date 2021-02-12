// 1. Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.
function func(a = 0, b = 0) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
  return 0;
}
console.log(func(3, 4)); // -1
console.log(func(8, 2)); // 1

// 2. Написать функцию, которая вычисляет факториал переданного ей числа.
function factorial(n) {
  let num = 1,
    i = 1;
  if (n > 0 && !isNaN(n)) {
    while (i <= n) {
      num *= i;
      i++;
    }
  } else if (n < 0) {
    return "Error. n < 0";
  }
  return num;
}
console.log(factorial(3)); // 6
console.log(factorial(5)); // 120
console.log(factorial(0)); // 1
console.log(factorial(-5)); // Error

// 3. Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.
function concat(a, b, c) {
  if (a >= 0 && b >= 0 && c >= 0) {
    return Number(`${a}${b}${c}`);
  }
  return "Error. Enter positive numbers";
}
console.log(concat(1, 2, 3)); // 123
console.log(concat(7, -1, 5)); // Error. Enter positive numbers
console.log(concat(7, 1, 5)); // 715

// 4. Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.
function square(a, b = a) {
  if (a >= 0 && b >= 0) {
    return a * b;
  }
  return "Error. Enter positive numbers";
}
console.log(square(7, 8)); // 56
console.log(square(6)); // 36
console.log(square(5, 5)); // 25
console.log(square(7, 0)); // 0
console.log(square(-7, 4)); // Error. Enter positive numbers
console.log(square("a", 2)); // Error. Enter positive numbers

// 5. Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это число, равное сумме всех своих собственных делителей.
function isPerfectNumber(num) {
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }
  if (sum === num) {
    return true;
  }
  return false;
}
console.log(isPerfectNumber(120)); // false
console.log(isPerfectNumber(496)); // true
console.log(isPerfectNumber(8128)); // true

// 6. Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и выводит только те числа из диапазона, которые являются совершенными. Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет.
function isPerfectNumberInRange(min, max) {
  let perfectNumbers = "";
  for (min; min <= max; min++) {
    if (isPerfectNumber(min)) {
      perfectNumbers = perfectNumbers + min.toString() + ",";
    }
  }
  if (perfectNumbers !== "") {
    return perfectNumbers;
  }
  return false;
}
console.log(isPerfectNumberInRange(3, 15000)); // 6, 28, 496, 8128

//7.Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.
// a)
function showTime(h, m = 0, s = 0) {
  if (h[0] !== 0 && h < 10) {
    h = `0${h}`;
  } else if (h == "") {
    h = "00";
  }
  if (m[0] != 0 && m < 10) {
    m = `0${m}`;
  } else if (m == "") {
    m = "00";
  }
  if (s[0] != 0 && s < 10) {
    s = `0${s}`;
  } else if (s == "") {
    s = "00";
  }
  return `${h}:${m}:${s}`;
}
console.log(showTime(23, 5, 45)); // 23:05:45
console.log(showTime(8)); // 08:00:00
console.log(showTime(2)); // 02:00:00

// 8. Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.
function showTimeInSeconds(h, m = 0, s = 0) {
  h *= 3600;
  m *= 60;
  let result = h + m + s;
  return result;
}
console.log(showTimeInSeconds(2)); // 7200
console.log(showTimeInSeconds(1, 52, 12)); // 6732
console.log(showTimeInSeconds(3, 10, 35)); // 11435

// 9. Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».
let time = (n) => {
  let hoursFloat = n / 3600;
  let hours = Math.floor(hoursFloat);
  let minutes = Math.floor((hoursFloat - hours) * 60);
  let seconds = n - (minutes * 60 + hours * 3600);
  function addZero(num) {
    return num > 9 ? num : `0${num}`;
  }
  return `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}`;
};
console.log(time(851)); // 00:14:11
console.log(time(7549)); // 02:05:49

// 10. Написать функцию, которая считает разницу между датами. Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс». При выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс»
let dateDifference = (h, m = 0, s = 0, h1, m1 = 0, s1 = 0) => {
  if (h == 0) {
    h = 24;
  }
  let seconds = h * 3600 + m * 60 + s;
  let seconds1 = h1 * 3600 + m1 * 60 + s1;
  let secDifference = Math.abs(seconds1 - seconds);
  function Time(n) {
    let hoursFloat = n / 3600;
    let hours = Math.floor(hoursFloat);
    let minutes = Math.floor((hoursFloat - hours) * 60);
    let seconds = n - (minutes * 60 + hours * 3600);
    function addZero(num) {
      return num > 9 ? num : `0${num}`;
    }
    return `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}`;
  }
  return Time(secDifference);
};
console.log(dateDifference(0, 10, 0, 10, 9, 0)); // 14:01:00
console.log(dateDifference(2, 6, 0, 5, 4, 10)); // 02:58:10
