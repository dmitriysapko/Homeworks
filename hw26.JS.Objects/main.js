//1. Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), и следующие функции для работы с этим объектом: Функция для вывода на экран информации об автомобиле; Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.
const car = {
  manufacturer: "Toyota",
  model: "Camry",
  year: 2015,
  averageSpeed: 80,
  showInfo() {
    console.log(
      `Производитель: ${this.manufacturer},\n модель: ${this.model},\n Cредняя скорость: ${this.averageSpeed} `
    );
  },
  getTravelTime(s = 0, restTime = 1) {
    if (isNaN(s) || isNaN(restTime)) {
      return "Error";
    }
    let travelTime = s / this.averageSpeed;
    let numberOfStops = Math.floor(travelTime / 4);
    travelTime += numberOfStops * restTime;
    return travelTime;
  },
};
car.showInfo();
console.log(car.getTravelTime(300)); // 3.75
console.log(car.getTravelTime(500)); // 7.25

//2. Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом: Функция вывода времени на экран; Функция изменения времени на переданное количество секунд; Функция изменения времени на переданное количество минут; Функция изменения времени на переданное количество часов. Учтите, что в последних 3-х функциях, при изменении одной части времени, может измениться и другая. Например, если ко времени «20:30:45» добавить 30 секунд, то должно получиться «20:31:15», а не «20:30:75».

Не знаю как решить эту задачу

//3. Создать объект user  со свойствами name, age, role. Создать второй объект admin и унаследовать все свойства объекта user , кроме значения свойства role. Также в объектах должны быть два метода, первый метод length() выводит в консоль количество ключей в объекте, при вызове метода  user.length()  должно отобразиться количество ключей; второй метод checkPermission()  показывает alert с текстом "Access granted"  если role === 'admin', и "Access denied" если role === 'user'.
class User {
  constructor(name, age) {
    this.name = "Nick";
    this.age = 28;
    this.role = "USER";
  }
  length() {
    console.log(Object.keys(this).length);
  }
  checkPermission() {
    if (this.role === "ADMIN") {
      alert(
        `Hello ${this.name}. Your age is ${this.age}. Your role: ${this.role}. Access granted`
      );
    } else {
      alert(
        `Hello ${this.name}. Your age is ${this.age} Your role: ${this.role}. Access denied`
      );
    }
  }
}
class Admin extends User {
  constructor(role) {
    super(role);
    this.role = "ADMIN";
  }
}
const user = new User();
const admin = new Admin();
user.length();
user.checkPermission();
admin.checkPermission();

//4. Создать функцию createUser() которая создает объект со значениями name, age, height, weight. Для свойств age, height, weight должен быть тип number, иначе вывести alert, что неверный тип и объект не должен создаться. Если в функцию не переданы аргументы, вывести аргументы по умолчанию. Функция должна вызываться так createUser('John', 39, 178, 67)
function createUser(name = "John", age = 39, height = 178, weight = 67) {
  if (typeof name !== "string") {
    alert("name should be string");
    return;
  }
  if (typeof age !== "number") {
    alert("age should be number");
    return;
  }
  if (typeof height !== "number") {
    alert("height should be number");
    return;
  }
  if (typeof weight !== "number") {
    alert("weight should be number");
    return;
  }
  return {
    name,
    age,
    height,
    weight,
  };
}
console.log(createUser());
