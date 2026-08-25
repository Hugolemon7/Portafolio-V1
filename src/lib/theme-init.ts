// Se ejecuta inline en el <head>, antes de pintar, para que no haya
// parpadeo de tema. Guarda preferencia en localStorage; si no hay,
// respeta prefers-color-scheme del sistema.
export const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = stored || (prefersDark ? 'dark' : 'light');
    if (theme === 'dark') document.documentElement.classList.add('dark');
  } catch (e) {}
})();
`;
