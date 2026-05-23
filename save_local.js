//const { LocalStorage } = require("node-localstorage");
//const localStorage = new LocalStorage("./scratch");
const arr = [];
let totalNum;
export function saveToLocalStorage(name, size, total) {
  arr.push([name, size]);
  totalNum += total;
  localStorage.setItem("waterGlasses", JSON.stringify(arr));
  localStorage.setItem("total", JSON.stringify(totalNum));
}

export function getFromLocalStorage() {
  return {
    size: JSON.parse(localStorage.getItem("waterGlasses")),
    total: JSON.parse(localStorage.getItem("total")),
  };
}

// saveToLocalStorage("my glass", 500, 1000);
// let i = getFromLocalStorage("my glass", "total");
//
// console.log(i);/water_class
