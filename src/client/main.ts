import "./scss/main.scss";
import { setHeaderHeightCss, mobileMenu } from "./ts/header";
import { setupHome } from "./ts/home";
import { sliderSetup } from "./ts/slider";
import { setupMap } from "./ts/map";

window.onload = () => {
  setHeaderHeightCss();
  mobileMenu();
  setupHome();
  sliderSetup();
  setupMap();
};
