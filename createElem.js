import { getKeyByValue, WaterReminder } from "./water_class.js";
import { saveToLocalStorage, getFromLocalStorage } from "./save_local.js";

const glassClass = new WaterReminder();
const waterGlasses = document.querySelector(".water-glasses");
const showWaterGlass = document.querySelector(".show-water-glass");

function createElem(name, size) {
  const totalDiv = document.querySelector(".total");
  const totalElem = document.createElement("h2");
  const glass = document.createElement("div");

  let resultOf = "";
  saveToLocalStorage(name, size, size);
  resultOf = getFromLocalStorage();
  totalDiv.innerHTML = "";
  totalElem.innerHTML = resultOf.total;
  glass.innerHTML = ` ${name}:${size}`;

  showWaterGlass.append(glass);
  totalDiv.append(totalElem);
}

function createGlasses(name, size, imgUrl) {
  glassClass.createGlass(name, size, imgUrl);
  const div = document.createElement("div");
  const h3 = document.createElement("h3");
  const img = (document.createElement("img").style.width = 100 + "px");
  const p = document.createElement("p");

  let key;
  div.className = "divElem";
  div.style = "background-color:blue";
  div.addEventListener("click", (e) => {
    if (e.target === e.currentTarget) {
      key = e.target.dataset.key;
      console.log(key);

      createElem(
        glassClass.getGlassByKey(key).glassName,
        glassClass.getGlassByKey(key).size,
      );
    }
  });

  for (const [[key], value] of glassClass.typeOfGlass) {
    div.dataset.key = value.key;
    h3.innerHTML = value.glassName;
    p.innerHTML = value.size;

    div.append(h3);
    div.append(p);
  }
  waterGlasses.appendChild(div);
}

createGlasses();
createGlasses("second glass", 400, "nothing");
createGlasses("hot water", 100, "not found");
createGlasses("cold water", 500);
