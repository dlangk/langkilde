export function initLightbox() {
  document.querySelectorAll(".post-content img").forEach((img) => {
    img.addEventListener("click", () => {
      const overlay = document.createElement("div");
      overlay.className = "lightbox-overlay";
      const clone = img.cloneNode() as HTMLImageElement;
      overlay.appendChild(clone);
      document.body.appendChild(overlay);

      const close = () => overlay.remove();
      overlay.addEventListener("click", close);
      document.addEventListener("keydown", function handler(e) {
        if (e.key === "Escape") {
          close();
          document.removeEventListener("keydown", handler);
        }
      });
    });
  });
}
