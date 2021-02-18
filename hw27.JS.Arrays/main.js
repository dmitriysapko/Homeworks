//1. Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта, необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.
const shoppingList = [
  {
    name: "bread",
    count: 2,
    isBought: true,
  },
  {
    name: "water",
    count: 1,
    isBought: true,
  },
  {
    name: "milk",
    count: 3,
    isBought: false,
  },
  {
    name: "sugar",
    count: 6,
    isBought: true,
  },
];

//1.1 Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
// const sortedShoppingList = [...shoppingList];
shoppingList.sort((a, b) => {
  if (a.isBought === true && b.isBought === false) {
    return 1;
  }
  if (a.isBought === false && b.isBought === true) {
    return -1;
  }
  return 0;
});
console.log(shoppingList); //0: {name: "milk", count: 3, isBought: false}
//1: {name: "bread", count: 2, isBought: true}
//2: {name: "water", count: 1, isBought: true}
//3: {name: "sugar", count: 6, isBought: true}

//1.2 Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую.
let addPurchase = (name = "", count = "", arr = []) => {
  let result = [...arr];
  if (result.find((item) => item.name === name)) {
    for (let i = 0; i < result.length; i++)
      if (name === result[i].name) {
        result[i].count += count;
      }
  } else {
    result.push({
      name,
      count,
      isBought: false,
    });
  }
  return result;
};
// const newList = [...shoppingList];
console.log(addPurchase("meat", 2, shoppingList)); //0: {name: "bread", count: 2, isBought: true}
//1: {name: "water", count: 1, isBought: true}
//2: {name: "milk", count: 3, isBought: false}
//3: {name: "sugar", count: 6, isBought: true}
//4: {name: "meat", count: 2, isBought: false}

//1.3 Покупка продукта. Функция принимает название продукта и отмечает его как купленный.
const addBuyingProduct = (arr = [], name = "") => {
  let result = [...arr];
  for (let i = 0; i < result.length; i++) {
    if (name === result[i].name) {
      result[i].isBought = true;
    }
  }
  return result;
};
console.log(addBuyingProduct(shoppingList, "meat"));
//не понимаю почему не выводится новый продукт как купленный

//2. Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены за единицу товара. Написать следующие функции:
const shoppingCheck = [
  {
    name: "bread",
    count: 2,
    price: 4,
  },
  {
    name: "water",
    count: 1,
    price: 5,
  },
  {
    name: "milk",
    count: 3,
    price: 6,
  },
  {
    name: "sugar",
    count: 6,
    price: 7,
  },
];

//2.1 Распечатка чека на экран; Подсчет общей суммы покупки;
const showCheck = (arr = []) => {
  let result = [...arr];
  result.forEach((product) => {
    let sum = product.count * product.price;
    console.log(`Summary: ${product.name} - ${sum}`);
  });
  let total = result
    .map((product) => product.count * product.price)
    .reduce((sum, current) => sum + current, 0);
  console.log(`Total: ${total}`);
  return result;
};
showCheck(shoppingCheck); //Summary: bread - 8
//Summary: water - 5
//Summary: milk - 18
//Summary: sugar - 42
//Total: 73

//2.3 Получение самой дорогой покупки в чеке;
const mostExpensiveProduct = (arr = []) => {
  let result = [...arr];
  let maxCost = 0;
  for (const product of result) {
    let cost = product.price * product.count;
    if (cost > maxCost) {
      maxCost = cost;
    }
  }
  return maxCost;
};
console.log(mostExpensiveProduct(shoppingCheck)); //42

//2.4 Подсчет средней стоимости одного товара в чеке.
const averageCost = (arr = []) => {
  let result = [...arr];
  let sum = 0;
  for (const product of result) {
    sum += product.price * product.count;
  }
  return (sum / result.length).toFixed(2);
};
console.log(averageCost(shoppingCheck)); //18.25

//3. Создать массив CSS-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.). Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля. Написать функцию, которая принимает массив стилей и текст, и выводит этот текст с помощью document.write() в тегах <p></p>, добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.
const styles = [
  {
    name: "color",
    value: "red",
  },
  {
    name: "text-align",
    value: "center",
  },
  {
    name: "font-weight",
    value: "900",
  },
  {
    name: "text-decoration",
    value: "underline",
  },
];
const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu vestibulum risus, sed ullamcorper erat. Aenean vitae mi sagittis, semper elit non, vestibulum elit.`;
let styleText = (arr = [], text = "") => {
  document.write('<p style = "');
  for (let i of arr) {
    document.write(`${i.name}: ${i.value}; `);
  }
  document.write('">' + text + "</p>");
};
styleText(styles, text);

//4. Создать массив аудиторий академии. Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20) и названия факультета, для которого она предназначена. Написать несколько функций для работы с ним^
const classRoom = [
  {
    name: "23",
    places: "16",
    faculty: "Wordpress",
  },
  {
    name: "68",
    places: "12",
    faculty: "Front-End",
  },
  {
    name: "33",
    places: "20",
    faculty: "Back-End",
  },
  {
    name: "78",
    places: "14",
    faculty: "UI-UX",
  },
  {
    name: "102",
    places: "20",
    faculty: "Front-End",
  },
];

//4.1 Вывод на экран всех аудиторий;
const showClassRoom = (arr = []) => {
  let classRooms = [];
  for (let i of arr) {
    classRooms.push(i.name);
  }
  return `All rooms: ${classRooms.join("; ")}.`;
};
console.log(showClassRoom(classRoom)); //All rooms: 23; 68; 33; 78; 102.

//4.2 Вывод на экран аудиторий для указанного факультета;
const showFacultyRooms = (arr = [], faculty = "") => {
  let facultyRooms = [];
  for (const i of arr) {
    if (i.faculty.toLowerCase() === faculty.toLowerCase()) {
      facultyRooms.push(i.name);
    }
  }
  return `All rooms for "${faculty}" faculty: ${facultyRooms.join("; ")}.`;
};
console.log(showFacultyRooms(classRoom, "Front-End")); //All rooms for "Front-End" faculty: 68; 102.

//3.3 Вывод на экран только тех аудиторий, которые подходят для переданной группы. Объект-группа состоит из названия, количества студентов и названия факультета;
const group = {
  name: "Front-End 2020",
  count: "16",
  faculty: "Front-End",
};
const showGroupRooms = (arr = [], group = {}) => {
  let groupRooms = [];
  for (const i of arr) {
    if (i.places >= group.count) {
      groupRooms.push(i.name);
    }
  }
  return `All rooms for "${group.name}": ${groupRooms.join("; ")}`;
};

console.log(showGroupRooms(classRoom, group)); //All rooms for "Front-End 2020": 23; 33; 102

//3.4 Функция сортировки аудиторий по количеству мест;
const arrSpotSort = (arr = []) => {
  let spotSort = [...arr];
  spotSort.sort((a, b) => a.places - b.places);
  return spotSort;
};
console.log(arrSpotSort(classRoom)); //0: {name: "68", places: "12", faculty: "Front-End"}
//1: {name: "78", places: "14", faculty: "UI-UX"}
//2: {name: "23", places: "16", faculty: "Wordpress"}
//3: {name: "33", places: "20", faculty: "Back-End"}
//4: {name: "102", places: "20", faculty: "Front-End"}

// 3.5 Функция сортировки аудиторий по названию (по алфавиту).
const arrFacultySort = (arr = []) => {
  let facultySort = [...arr];
  facultySort.sort((a, b) => a.faculty - b.faculty);
  return facultySort;
};
console.log(arrFacultySort(classRoom));
