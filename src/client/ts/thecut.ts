function initSwiper() {
  const imagesWrapper = document.querySelector(
    ".images-wrapper"
  ) as HTMLElement;

  if (!imagesWrapper) return;
  // capture vertical scroll and translate to horizontal scroll
  imagesWrapper.addEventListener("scroll", (e) => {
    const target = e.target as HTMLElement;
  });
}

function setupCut() {
  initSwiper();
}

export { setupCut };
