class DummyText {
  constructor(el, storage) {
    this.htmlElement = el;
    this.styleStorage = storage;

    this.arrayLetter = el.innerHTML.split("");
    this.pairs = [];

    this.createPairs();
  }

  createPairs() {
    let newHtml = "";
    this.arrayLetter.forEach((letter, index) => {
      const pair = this.arrayLetter[index + 1]
        ? this.arrayLetter[index] + this.arrayLetter[index + 1]
        : this.arrayLetter[index];

      this.pairs.push(pair);

      const newSpan = `<span class="${pair}">${letter}</span>`;
      newHtml += newSpan;
    });

    this.htmlElement.innerHTML = newHtml;
  }
  // Regarde si il y a une modif, regarde si la combinaison existe dans le dummy
  checkStyle() {
    this.pairs.forEach((pair) => {
      if (this.styleStorage[pair]) {
        document
          .querySelector(`.${pair}`)
          .style.setProperty("letter-spacing", `${this.styleStorage[pair]}px`);
      }
    });
  }
}

export default DummyText;
