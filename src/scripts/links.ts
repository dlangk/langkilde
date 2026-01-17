export function initExternalLinks() {
  document.querySelectorAll(".post-content a").forEach((link) => {
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
  });
}
