export function initCanvas() {
  const canvas = document.getElementById(
    "canvas-background"
  ) as HTMLCanvasElement;
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawBackground();
  }

  function drawBackground() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const isDark = document.documentElement.classList.contains("dark");
    ctx.fillStyle = isDark ? "#121212" : "#F6F5EF";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === "class") {
        drawBackground();
      }
    });
  });
  observer.observe(document.documentElement, { attributes: true });
}
