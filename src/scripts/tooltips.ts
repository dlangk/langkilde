let hideTimeout: ReturnType<typeof setTimeout> | null = null;

function createTooltip(target: HTMLElement, content: string, html = false) {
  // Capture position BEFORE removing tooltips, since target may live inside one
  const rect = target.getBoundingClientRect();
  const nested = target.closest(".annotation-tooltip") !== null;

  if (!nested) {
    removeTooltips();
  }
  if (hideTimeout) clearTimeout(hideTimeout);

  const tip = document.createElement("div");
  tip.className = "annotation-tooltip";
  if (html) {
    tip.innerHTML = content;
  } else {
    tip.textContent = content;
  }
  document.body.appendChild(tip);

  // Keep tooltip alive when hovering it
  tip.addEventListener("mouseenter", () => {
    if (hideTimeout) clearTimeout(hideTimeout);
  });
  tip.addEventListener("mouseleave", () => {
    scheduleHide();
  });

  // Bind nested ref-markers inside HTML tooltips
  if (html) {
    bindRefMarkers(tip);
  }

  const tipRect = tip.getBoundingClientRect();

  let left = rect.left + rect.width / 2 - tipRect.width / 2;
  let top = rect.top - tipRect.height - 6;

  // Keep within viewport
  if (left < 8) left = 8;
  if (left + tipRect.width > window.innerWidth - 8) left = window.innerWidth - tipRect.width - 8;
  if (top < 8) top = rect.bottom + 6;

  tip.style.left = `${left + window.scrollX}px`;
  tip.style.top = `${top + window.scrollY}px`;

  return tip;
}

function removeTooltips() {
  if (hideTimeout) clearTimeout(hideTimeout);
  document.querySelectorAll(".annotation-tooltip").forEach((el) => el.remove());
}

function scheduleHide() {
  if (hideTimeout) clearTimeout(hideTimeout);
  hideTimeout = setTimeout(removeTooltips, 150);
}

function bindRefMarkers(root: HTMLElement | Document) {
  root.querySelectorAll<HTMLAnchorElement>("a.ref-marker").forEach((el) => {
    const refNum = el.dataset.ref;
    if (!refNum) return;

    const refAnchor = document.getElementById(`ref-${refNum}`);
    if (!refAnchor) return;

    const li = refAnchor.closest("li");
    if (!li) return;

    const clone = li.cloneNode(true) as HTMLElement;
    const anchorEl = clone.querySelector(`a[id="ref-${refNum}"]`);
    if (anchorEl) {
      const parent = anchorEl.parentElement;
      if (parent && parent.tagName === "P" && parent.children.length === 1) {
        parent.remove();
      } else {
        anchorEl.remove();
      }
    }

    const html = clone.innerHTML.trim();
    if (!html) return;

    el.addEventListener("mouseenter", () => createTooltip(el, html, true));
    el.addEventListener("mouseleave", scheduleHide);
  });
}

function init() {
  // Concept tooltips
  document.querySelectorAll<HTMLElement>(".concept").forEach((el) => {
    const explanation = el.dataset.explanation;
    if (!explanation) return;

    el.addEventListener("mouseenter", () => createTooltip(el, explanation));
    el.addEventListener("mouseleave", scheduleHide);
    el.addEventListener("focus", () => createTooltip(el, explanation));
    el.addEventListener("blur", removeTooltips);

    // Mobile: tap to toggle
    el.addEventListener("click", (e) => {
      e.preventDefault();
      if (document.querySelector(".annotation-tooltip")) {
        removeTooltips();
      } else {
        createTooltip(el, explanation);
      }
    });
  });

  // Footnote reference tooltips
  document.querySelectorAll<HTMLAnchorElement>("a[data-footnote-ref]").forEach((el) => {
    const href = el.getAttribute("href");
    if (!href) return;

    const footnoteId = href.replace("#", "");
    const footnote = document.getElementById(footnoteId);
    if (!footnote) return;

    // Get HTML content, stripping the back-reference arrow
    const clone = footnote.cloneNode(true) as HTMLElement;
    clone.querySelectorAll("a[data-footnote-backref]").forEach((a) => a.remove());
    const html = clone.innerHTML?.trim() || "";

    el.addEventListener("mouseenter", () => createTooltip(el, html, true));
    el.addEventListener("mouseleave", scheduleHide);

    el.addEventListener("click", (e) => {
      e.preventDefault();
      if (document.querySelector(".annotation-tooltip")) {
        removeTooltips();
      } else {
        createTooltip(el, html, true);
      }
    });
  });

  // Reference marker tooltips (with clickable links)
  bindRefMarkers(document);

  // Dismiss tooltips when tapping elsewhere (mobile)
  document.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;
    if (
      !target.closest(".concept") &&
      !target.closest("a[data-footnote-ref]") &&
      !target.closest("a.ref-marker") &&
      !target.closest(".annotation-tooltip")
    ) {
      removeTooltips();
    }
  });
}

// Run on page load
init();
