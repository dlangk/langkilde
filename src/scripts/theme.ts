export function initTheme() {
  const htmlEl = document.documentElement;
  const toggle = document.getElementById("darkModeToggle") as HTMLInputElement;
  if (!toggle) return;

  const stored = localStorage.getItem("theme") || "light";
  if (stored === "dark") {
    htmlEl.classList.add("dark");
    toggle.checked = true;
  }

  toggle.addEventListener("change", () => {
    const isDark = htmlEl.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
}
