// theme.js — Theme toggle logic
(function() {
  function getTheme() {
    return localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);

    const icon = document.getElementById("theme-icon");
    if (icon) {
      icon.className = theme === "dark" ? "fas fa-moon" : "fa-regular fa-sun";
    }
  }

  function setupTheme() {
    applyTheme(getTheme());

    const btn = document.getElementById("theme-toggle");
    btn?.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      applyTheme(current === "dark" ? "light" : "dark");
    });
  }

  document.addEventListener("astro:page-load", setupTheme);
  document.addEventListener("astro:after-swap", () => applyTheme(getTheme()));
})();
