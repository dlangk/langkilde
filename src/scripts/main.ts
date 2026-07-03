import { initTheme } from "./theme";
import { initLightbox } from "./lightbox";
import { initTableOfContents } from "./toc";
import { initExternalLinks } from "./links";

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initLightbox();
  initExternalLinks();
  initTableOfContents();
});
