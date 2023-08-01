import "./scss/main.scss";
import { setHeaderHeightCss, mobileMenu } from "./ts/header";
import { setupCut } from "./ts/thecut";

window.onload = () => {
  setHeaderHeightCss();
  mobileMenu();
  setupCut();
};
