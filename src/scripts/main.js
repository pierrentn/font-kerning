import "../styles/style.css";

// import ParaModel from "./classes/ParaModel";
import Debug from "./classes/Debug";
import DummyText from "./classes/DummyText";

// const paras = document.querySelectorAll("p");
const title = document.querySelector("h1");
// const titleSplit = title.innerHTML.split("");
// let newTitleSplit = "";
const styleStorage = {};

const dummyText = new DummyText(title, styleStorage);
const debugUi = new Debug(
  title.innerText.toLowerCase(),
  styleStorage,
  dummyText
);

document.querySelector("body");
addEventListener("click", () => console.log(styleStorage));

// titleSplit.forEach((letter, index) => {
//   const pairs = titleSplit[index + 1]
//     ? titleSplit[index] + titleSplit[index + 1]
//     : titleSplit[index];
//   console.log(pairs);
// });

/**
 * Functions :
 * - Split text
 * - create pairs
 * - for each pair check, if it exists in the styleStorage
 * - transform pairs to html span with dedicated style
 * - update style
 */

/**
 * Class INIT DEBUG
 * Récupérer les mots que l'on souhaite analyser
 * constituer chaque pair
 * assigner à chaque pair un debug et tout mettre dans un dossier
 */

//  paras.forEach((paraEl) => {
//   const para = new ParaModel(paraEl, styleStorage);
//   gui
//     .add(para, "letterSpacing", -10, 10, 0.5)
//     .name(para.htmlEl.innerText)
//     .onChange(() => {
//       para.setStyle();
//       dummyText.checkStyle();
//     });
// });

/**
 SHOWCASE
{
    "sh": -8,
    "ho": -9.200000000000001,
    "ow": -11,
    "wc": -11,
    "ca": 3.8000000000000003,
    "as": 4.2,
    "se": -8
}

CLIENT
{
    "cl": -11.8,
    "li": -5.800000000000001,
    "ie": -16.2,
    "en": -12.200000000000001,
    "nt": -5
}

TALENTS
{
    "ta": -20,
    "al": 2,
    "le": -5.800000000000001,
    "en": -11.8,
    "nt": -4,
    "ts": 2.4000000000000004
}

CONTACT
{
    "on": -10,
    "nt": -4.800000000000001,
    "ta": -19,
    "ac": -10,
    "t": 1,
    "ct": -1.6
}
 */
