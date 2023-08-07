function pausePlayVideo() {
  const videoContainer = document.querySelector(".video");
  if (!videoContainer) return;
  const video = videoContainer.querySelector("video");
  if (!video) return;
  videoContainer.addEventListener("click", () => {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });
}

function overlayEffect() {
  const overlay = document.querySelector(".overlay") as HTMLElement;
  if (!overlay) return;
  const videoContainer = document.querySelector(".video") as HTMLElement;
  if (!videoContainer) return;

  if (window.innerWidth < 768) {
    overlay.style.height = "100%";
    return;
  }

  window.addEventListener("mousemove", (e) => {
    const y = mapRange(e.clientY, 0, window.innerHeight / 2, 0, 100);
    overlay.style.height = `${y}%`;
  });

  // if mobile device
}

function mapRange(
  value: number,
  low1: number,
  high1: number,
  low2: number,
  high2: number
) {
  return low2 + ((high2 - low2) * (value - low1)) / (high1 - low1);
}

function setupHome() {
  pausePlayVideo();
  overlayEffect();
}

export { setupHome };
