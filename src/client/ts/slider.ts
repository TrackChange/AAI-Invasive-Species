function slider(element: HTMLDivElement) {
  const leftBtn = element.querySelector(".slide-left") as HTMLDivElement;
  const rightBtn = element.querySelector(".slide-right") as HTMLDivElement;
  let canClick = true;
  if (!leftBtn || !rightBtn) return;
  const slides = element.querySelectorAll(
    ".slide"
  ) as NodeListOf<HTMLDivElement>;
  const slideContainer = element.querySelector(
    ".images-wrapper"
  ) as HTMLDivElement;

  let currentSlide = 0;

  const slideWidth = slideWidths(slides);

  const bindMouseEvent = (event: MouseEvent) => {
    handleMouseHoverEvent(event, leftBtn, rightBtn, slideContainer);
  };

  leftBtn.addEventListener("mouseover", bindMouseEvent);
  leftBtn.addEventListener("mouseout", bindMouseEvent);
  rightBtn.addEventListener("mouseover", bindMouseEvent);
  rightBtn.addEventListener("mouseout", bindMouseEvent);

  leftBtn.addEventListener("click", () => {
    if (!canClick) return;
    console.log(currentSlide, slideWidth[currentSlide - 1], "left");
    if (slideContainer.scrollLeft <= 0) {
      currentSlide = 0;
      return;
    }
    slideContainer.scrollLeft -= slideWidth[currentSlide - 1];
    currentSlide--;
    canClick = false;
    setTimeout(() => {
      canClick = true;
    }, 500);
  });

  rightBtn.addEventListener("click", () => {
    if (!canClick) return;
    console.log(currentSlide, slideWidth[currentSlide], "right");
    if (slideContainer.scrollLeft >= slideContainer.scrollWidth) {
      currentSlide = slides.length - 1;
      return;
    }
    slideContainer.scrollLeft += slideWidth[currentSlide];
    currentSlide++;
    canClick = false;
    setTimeout(() => {
      canClick = true;
    }, 500);
  });

  //   slideContainer.addEventListener("scroll", () => {
  //     const scrollLeft = slideContainer.scrollLeft;
  //     const slideWidth = slideWidths(slides);

  //     let slideIndex = 0;
  //     let sum = 0;

  //     for (let i = 0; i < slideWidth.length; i++) {
  //       sum += slideWidth[i];
  //       if (sum > scrollLeft) {
  //         slideIndex = i;
  //         break;
  //       }
  //     }

  //     console.log(slideIndex, slideContainer.scrollLeft);
  //     currentSlide = slideIndex;
  //   });
}

function handleMouseHoverEvent(
  event: MouseEvent,
  leftBtn: HTMLDivElement,
  rightBtn: HTMLDivElement,
  container: HTMLDivElement
) {
  const slideContainer = container;
  const hoverOffset = 100;
  const scrollSnapType = "x mandatory";

  const isLeftButton = event.currentTarget === leftBtn;
  const isRightButton = event.currentTarget === rightBtn;
  const isMouseOver = event.type === "mouseover";
  const isMouseOut = event.type === "mouseout";

  if (isLeftButton && isMouseOver && slideContainer.scrollLeft > 0) {
    slideContainer.style.scrollSnapType = "none";
    slideContainer.scrollLeft -= hoverOffset;
  }

  if (isLeftButton && isMouseOut && slideContainer.scrollLeft > 0) {
    slideContainer.scrollLeft += hoverOffset;
    setTimeout(() => {
      slideContainer.style.scrollSnapType = scrollSnapType;
    }, 300);
  }

  if (
    isRightButton &&
    isMouseOver &&
    slideContainer.scrollLeft < slideContainer.scrollWidth
  ) {
    slideContainer.style.scrollSnapType = "none";
    slideContainer.scrollLeft += hoverOffset;
  }

  if (
    isRightButton &&
    isMouseOut &&
    !(
      slideContainer.scrollLeft + slideContainer.offsetWidth >=
      slideContainer.scrollWidth
    )
  ) {
    console.log(
      slideContainer.scrollLeft + slideContainer.offsetWidth,
      slideContainer.scrollWidth
    );
    slideContainer.scrollLeft -= hoverOffset;
    setTimeout(() => {
      slideContainer.style.scrollSnapType = scrollSnapType;
    }, 300);
  }
}

function slideWidths(slides: NodeListOf<HTMLDivElement>): number[] {
  const widths: number[] = [];
  slides.forEach((slide) => {
    const slideStyle = window.getComputedStyle(slide);
    widths.push(slide.offsetWidth + parseInt(slideStyle.marginLeft) * 2);
  });
  return widths;
}

function sliderSetup() {
  const images = document.querySelectorAll(
    ".images"
  ) as NodeListOf<HTMLDivElement>;

  images.forEach(slider);
}
export { sliderSetup };
