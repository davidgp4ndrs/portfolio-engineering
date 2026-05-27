// lang.js — Language toggle logic
(function() {
  function setupLang() {
    const btn = document.getElementById("lang-toggle");
    if (!btn) return;

    const path = window.location.pathname;
    const isEn = path.startsWith("/en");
    const currentLang = isEn ? "en" : "es";

    // Update button label — show the OTHER language
    btn.textContent = currentLang === "en" ? "ES" : "EN";

    btn.addEventListener("click", () => {
      const withoutLang = path.replace(/^\/(es|en)/, "") || "/";
      const target = currentLang === "en" ? `/es${withoutLang}` : `/en${withoutLang}`;
      window.location.href = target;
    });
  }

  document.addEventListener("astro:page-load", setupLang);
})();
