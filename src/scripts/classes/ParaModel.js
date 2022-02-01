class ParaModel {
  constructor(el, storage) {
    this.htmlEl = el;
    this.styleStorage = storage;

    this.letterSpacing = 0;
  }

  setStyle() {
    this.htmlEl.style.setProperty("letter-spacing", `${this.letterSpacing}px`);
    this.styleStorage[this.htmlEl.innerText] = this.letterSpacing;
  }
}

export default ParaModel;
