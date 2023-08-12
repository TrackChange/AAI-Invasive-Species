import "./scss/main.scss";
import { setHeaderHeightCss, mobileMenu } from "./ts/header";
import { setupHome } from "./ts/home";
import { sliderSetup } from "./ts/slider";

window.onload = () => {
  setHeaderHeightCss();
  mobileMenu();
  setupHome();
  sliderSetup();
};
