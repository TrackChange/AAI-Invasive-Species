function setHeaderHeightCss() {
  const header = document.querySelector("header") as HTMLElement;
  const headerHeight = header.offsetHeight;
  const main = document.querySelector("main") as HTMLElement;
  main.style.paddingBlockStart = headerHeight + 50 + "px";

  if (window.innerWidth <= 768) {
    main.style.paddingBlockStart = headerHeight + 5 + "px";
  }

  const title = document.querySelector(".title") as HTMLElement;
  document.body.style.setProperty("--title-height", title.offsetHeight + "px");
}

function mobileMenu() {
  const mobileNavButton = document.getElementById("mobile-nav") as HTMLElement;
  const mobileNav = document.getElementById("mobile-nav-list") as HTMLElement;

  mobileNavButton.addEventListener("click", (e) => {
    e.preventDefault();
    mobileNav.toggleAttribute("data-active");
    if (mobileNav.hasAttribute("data-active")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });
}

export { setHeaderHeightCss, mobileMenu };
