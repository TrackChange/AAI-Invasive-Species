import "./scss/main.scss";
import { setHeaderHeightCss, mobileMenu } from "./ts/header";

window.onload = () => {
  setHeaderHeightCss();
  mobileMenu();
};
