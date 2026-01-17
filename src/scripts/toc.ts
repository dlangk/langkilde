export function initTableOfContents() {
  // Dynamically populate ToC if empty
  const toc = document.getElementById("toc");
  if (toc && toc.children.length === 0) {
    document.querySelectorAll("main h2[id]").forEach((heading) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = `#${heading.id}`;
      a.textContent = heading.textContent;
      li.appendChild(a);
      toc.appendChild(li);
    });
  }

  // Grab in-page sidebar links, bail if none
  const sidebarLinks = document.querySelectorAll("#toc a[href^='#']");
  if (sidebarLinks.length === 0) return;

  let isClickScrolling = false;

  function setActive(id: string) {
    sidebarLinks.forEach((l) => {
      l.classList.toggle("active", l.getAttribute("href") === `#${id}`);
    });
  }

  // Initial hash highlight
  if (location.hash) setActive(location.hash.slice(1));
  window.addEventListener("hashchange", () => {
    setActive(location.hash.slice(1));
  });

  // Smooth scroll + immediate highlight
  sidebarLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const id = link.getAttribute("href")?.slice(1);
      if (!id) return;
      const target = document.getElementById(id);
      if (!target) return;

      isClickScrolling = true;
      setActive(id);

      const offset = 15;
      const top = target.getBoundingClientRect().top + pageYOffset - offset;
      window.scrollTo({ top, behavior: "smooth" });
      history.pushState(null, "", `#${id}`);

      setTimeout(() => {
        isClickScrolling = false;
      }, 600);
    });
  });

  // Scroll-spy with IntersectionObserver
  const headings = Array.from(sidebarLinks)
    .map((l) => {
      const el = document.getElementById(l.getAttribute("href")?.slice(1) || "");
      return el ? { id: el.id, element: el } : null;
    })
    .filter(Boolean) as { id: string; element: Element }[];

  const obs = new IntersectionObserver(
    (entries) => {
      if (isClickScrolling) return;
      entries.forEach((e) => {
        if (e.isIntersecting) setActive(e.target.id);
      });
    },
    { root: null, rootMargin: "0px 0px -50% 0px", threshold: 0 }
  );
  headings.forEach((h) => obs.observe(h.element));

  // Highlight last section when scrolled to bottom
  window.addEventListener("scroll", () => {
    const atBottom =
      window.innerHeight + pageYOffset >=
      document.documentElement.scrollHeight - 2;
    if (atBottom && !isClickScrolling) {
      const last = sidebarLinks[sidebarLinks.length - 1];
      const href = last.getAttribute("href");
      if (href) setActive(href.slice(1));
    }
  });

  // Auto-close mobile sidebar
  const sidebar = document.getElementById("sidebar");
  if (sidebar && innerWidth < 800) {
    sidebarLinks.forEach((l) => {
      l.addEventListener("click", () => sidebar.classList.remove("open"));
    });
  }
}
