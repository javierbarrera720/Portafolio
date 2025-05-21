const THEME_KEY = "theme";

function applyTheme(theme) {
  const html = document.documentElement;
  html.classList.remove("light", "dark");
  html.classList.add(theme);
}

function getSavedTheme() {
  return localStorage.getItem(THEME_KEY);
}

function saveTheme(theme) {
  localStorage.setItem(THEME_KEY, theme);
}

function toggleTheme() {
  const current = getSavedTheme() || "light";
  const newTheme = current === "light" ? "dark" : "light";
  applyTheme(newTheme);
  saveTheme(newTheme);
}

function initTheme() {
  const saved = getSavedTheme();
  if (saved) {
    applyTheme(saved);
  } else {
    // Detectar automáticamente el tema del sistema
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const defaultTheme = prefersDark ? "dark" : "light";
    applyTheme(defaultTheme);
    saveTheme(defaultTheme);
  }
}

// Ejecutar automáticamente al cargar
initTheme();

export { toggleTheme, initTheme };