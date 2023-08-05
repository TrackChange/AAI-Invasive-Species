import "./scss/main.scss";
import { setHeaderHeightCss, mobileMenu } from "./ts/header";
import { setupHome } from "./ts/home";

window.onload = () => {
  setHeaderHeightCss();
  mobileMenu();
  setupHome();
};
