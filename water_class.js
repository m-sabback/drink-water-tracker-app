export class WaterReminder {
  constructor() {
    this.typeOfGlass = new Map();
  }
  createGlass(name = "water", size = 330, imgUrl) {
    imgUrl === undefined
      ? (imgUrl =
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.KlUYaiLCz3UfUz8vwHi1ewHaJf%3Fpid%3DApi&f=1&ipt=5af4e2e44c016d3f8a8fa8bd01a39b980c028a56fc24c04edd76bf2bed4fa132&ipo=images")
      : imgUrl;
    let key = crypto.randomUUID();
    this.typeOfGlass.set(key, {
      key: key,
      glassName: name,
      size: size,
      imgUrl: imgUrl,
    });
    return this.typeOfGlass;
  }

  // add what type of glass that you drink
  addGlass(key) {
    return this.typeOfGlass.get(key);
  }
  getGlassByKey(key) {
    return this.typeOfGlass.get(key);
  }
  deleteGlass(key) {
    this.typeOfGlass.delete(key);
  }
}

// const glass = new WaterReminder();
// glass.createGlass("first glass", 500, "https://google.com");
// glass.createGlass();
// glass.createGlass("just a glass", 1000, "not found");
//glass.deleteGlass(getKeyByValue("water"));

export function getKeyByValue(searchValue) {
  for (let [[key], value] of glass.typeOfGlass.entries()) {
    if (value.glassName === searchValue) return value.key;
  }
}

//console.log(glass.typeOfGlass);
//console.log(getKeyByValue(glass.typeOfGlass, " "));
//console.log(getKeyByValue("just a glass"));
//getKeyByValue(glass.typeOfGlass, " ");
//getKeyByValue(glass.typeOfGlass, "just a glass");
//glass.deleteGlass(getKeyByValue("water"));
//console.log(glass.typeOfGlass);
