import { WobblyEyes } from "./index.js";

const container = document.querySelector("#wobblyEyes");

new WobblyEyes(container, {
  eyeColor: "white",
  pupilColor: "black",
  eyelidColor: "#ffccaa",
  lashColor: "black",
  width: 100,
  height: 200,
});
