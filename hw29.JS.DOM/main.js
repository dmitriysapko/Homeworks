//1. Создать страницу, которая выводит нумерованный список песен:
const playList = [
  {
    author: "LED ZEPPELIN",
    song: "STAIRWAY TO HEAVEN",
  },
  {
    author: "QUEEN",
    song: "BOHEMIAN RHAPSODY",
  },
  {
    author: "LYNYRD SKYNYRD",
    song: "FREE BIRD",
  },
  {
    author: "DEEP PURPLE",
    song: "SMOKE ON THE WATER",
  },
  {
    author: "JIMI HENDRIX",
    song: "ALL ALONG THE WATCHTOWER",
  },
  {
    author: "AC/DC",
    song: "BACK IN BLACK",
  },
  {
    author: "QUEEN",
    song: "WE WILL ROCK YOU",
  },
  {
    author: "METALLICA",
    song: "ENTER SANDMAN",
  },
];
const ul = document.createElement("ul");
const mainDiv = document.getElementById("content");
mainDiv.append(ul);
for (let i in playList) {
  const li = document.createElement("li");
  const playButton = document.createElement("p");
  playButton.append(playList[i].author);
  playButton.append(" : ");
  playButton.append(playList[i].song);
  li.append(playButton);
  ul.append(li);
}

//2. Создать HTML-страницу с кнопкой "Открыть" и модальным окном. На модальном окне должен быть текст и кнопка "Закрыть". Изначально модальное окно не отображается. При клике на кнопку "Открыть" появляется модальное окно, на кнопку "Закрыть" – исчезает.

const btn = document.createElement("button");
const text = document.createElement("p");
text.textContent = "C'mon Press It";
btn.append(text);
mainDiv.append(btn);
btn.addEventListener("click", () => {
  const div = document.createElement("div");
  div.setAttribute("id", "modal__window");
  const text = document.createElement("p");
  text.textContent = "Nothing here, Bye :)";
  div.append(text);
  const innerButton = document.createElement("button");
  const innerButtonText = document.createElement("p");
  innerButtonText.textContent = "Click It and relax";
  innerButton.append(innerButtonText);
  div.append(innerButton);
  mainDiv.append(div);
  btn.disabled = true;
  innerButton.addEventListener("click", () => {
    div.remove();
    btn.disabled = false;
  });
});

//3. Создать HTML-страницу со светофором и кнопкой, которая переключает светофор на следующий цвет.
const trafficLights = document.querySelector("div.traffic__light");
const redLight = document.getElementById("red");
const yellowLight = document.getElementById("yellow");
const greenLight = document.getElementById("green");
const button = document.getElementById("btn");
button.addEventListener("click", () => {
  if (redLight.classList.contains("traffic__red")) {
    redLight.classList.remove("traffic__red");
    yellowLight.classList.add("traffic__yellow");
  } else if (yellowLight.classList.contains("traffic__yellow")) {
    yellowLight.classList.remove("traffic__yellow");
    greenLight.classList.add("traffic__green");
  } else if (greenLight.classList.contains("traffic__green")) {
    greenLight.classList.remove("traffic__green");
    redLight.classList.add("traffic__red");
  }
});
