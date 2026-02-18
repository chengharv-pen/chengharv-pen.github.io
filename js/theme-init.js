(function() {
  const savedTheme = localStorage.getItem("preferredTheme");
  
  // 1. Check LocalStorage
  // 2. Fallback to System Preference (Dark Mode)
  // 3. Fallback to Light Mode
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme || (systemDark ? 'dark' : 'light');

  document.documentElement.setAttribute("data-bs-theme", initialTheme);
})();