import * as dat from "dat.gui";

const gui = new dat.GUI();

class Debug {
  constructor(text, storage, dummyText) {
    this.baseText = text;
    this.styleStorage = storage;
    this.dummy = dummyText;

    this.pairs = {};

    this.splitText();
    this.createDebugElements();
  }

  splitText() {
    const letterArray = this.baseText.split("");

    letterArray.forEach((letter, index) => {
      const pair = letterArray[index + 1]
        ? letterArray[index] + letterArray[index + 1]
        : letterArray[index];

      this.pairs[pair] = { letterSpacing: 0 };
    });
    // console.log(this.pairs);
  }

  createDebugElements() {
    for (const pair in this.pairs) {
      console.log(pair);
      gui
        .add(this.pairs[pair], "letterSpacing", -30, 30, 0.2)
        .name(pair)
        .onChange(() => {
          this.updateStyleStorage(this.updateStyleStorage(pair));
        });
    }
  }

  updateStyleStorage(pair) {
    if (this.pairs[pair]) {
      this.styleStorage[pair] = this.pairs[pair].letterSpacing;
      this.dummy.checkStyle();
    }
  }
}

export default Debug;
