function setHeaderHeightCss() {
  const header = document.querySelector("header") as HTMLElement;
  const headerHeight = header.offsetHeight;
  const main = document.querySelector("main") as HTMLElement;
  main.style.paddingBlockStart = headerHeight + "px";
}

export { setHeaderHeightCss };
