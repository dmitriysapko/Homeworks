/*1. Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:

  поле, хранящее радиус окружности;
  get-свойство, возвращающее радиус окружности;
  set-свойство, устанавливающее радиус окружности;
  get-свойство, возвращающее диаметр окружности;
  метод, вычисляющий площадь окружности;
  метод, вычисляющий длину окружности.

Продемонстрировать работу свойств и методов. */
class Circle {
  constructor(a) {
    if (a <= 0) {
      console.log("Please set radius > 0");
      return;
    }
    this.a = a;
  }
  get radius() {
    return this.a;
  }
  set radius(a) {
    this.a = a;
  }
  get diameter() {
    return this.a * 2;
  }
  area() {
    return (Math.PI * this.a ** 2).toFixed(1);
  }
  circumference() {
    return (2 * Math.PI * this.a).toFixed(1);
  }
}
const b = new Circle(10);
console.log(b); //Circle {a: 10}
console.log(b.diameter); //20
console.log(b.area()); //314.2
console.log(b.circumference()); //62.8

/*2. Реализовать класс, описывающий простой маркер. В классе должны быть следующие компоненты:

  поле, которое хранит цвет маркера;
  поле, которое хранит количество чернил в маркере (в процентах);
  метод для печати (метод принимает строку и выводит текст соответствующим цветом; текст выводится до тех пор, пока в маркере есть чернила; один не пробельный символ – это 0,5% чернил в маркере).

Реализовать класс, описывающий заправляющийся маркер, унаследовав его от простого маркера и добавив метод для заправки маркера.
Продемонстрировать работу написанных методов. */
class Marker {
  constructor(color, inkLevel) {
    this.color = color;
    this.inkLevel = inkLevel;
  }
  get markerSettings() {
    return [this.color, this.inkLevel];
  }
  set markerSettings(newSettings) {
    [this.color, this.inkLevel] = [...newSettings];
  }
  print(line) {
    let content = document.getElementById("content");
    for (let i = 0; i < line.length; i++) {
      if (this.inkLevel != 0) {
        if (line[i] == " ") {
          this.inkLevel += 0.5;
        }
        content.innerHTML += line[i];
        content.style.color = this.color;
        this.inkLevel -= 0.5;
      } else {
        document.write("Marker is over");
        break;
      }
    }
  }
}
class ReloadMarker extends Marker {
  fill(inkLevel) {
    if (inkLevel > 100) {
      inkLevel = 100;
    } else {
      this.inkLevel += inkLevel;
    }
  }
}
let marker = new ReloadMarker("#555", 2);
marker.fill(45);
const p = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel tortor vel lacus dictum efficitur. Sed in ipsum quam. Sed a nisi in justo varius laoreet.`;
marker.print(p);
document.body.setAttribute("font-size: 16px; text-align: center;");

//https://stackoverflow.com/questions/9003270/uncaught-typeerror-cannot-read-property-innerhtml-of-null

/*3. Реализовать класс Employee, описывающий работника, и создать массив работников банка.

Реализовать класс EmpTable для генерации HTML-кода таблицы со списком работников банка. Массив работников необходимо передавать через конструктор, а получать HTML-код с помощью метода gСоздать объект класса EmpTable и вывести на экран результат работы метода getHtml().*/
class Employee {
  constructor(name, surname, role) {
    this.name = name;
    this.surname = surname;
    this.role = role;
  }
}

const arrEmps = [
  new Employee("Harry", "Potter", "President"),
  new Employee("Ron", "Weasley", "Vice President"),
  new Employee("Hermione", "Granger", "Manager"),
  new Employee("Lord", "Voldemort", "Security"),
];
class EmpTable {
  constructor(arr) {
    this.arr = arrEmps;
  }
  getHtml(arr) {
    document.write(
      `<table id="table" border = "1" style="text-align: center; padding: 5px"> <tr><td> First Name </td><td> Second Name </td><td> Role</table>`
    );
    const table = document.getElementById("table");
    for (let i = 0; i < arrEmps.length; i++) {
      const row = document.createElement("TR");
      table.appendChild(row);
      const firstCell = document.createElement("TD");
      const secondCell = document.createElement("TD");
      const thirdCell = document.createElement("TD");
      row.appendChild(firstCell);
      row.appendChild(secondCell);
      row.appendChild(thirdCell);
      firstCell.innerHTML = arrEmps[i].name;
      secondCell.innerHTML = arrEmps[i].surname;
      thirdCell.innerHTML = arrEmps[i].role;
    }
  }
}
const newEmpTable = new EmpTable(arrEmps);
newEmpTable.getHtml();
