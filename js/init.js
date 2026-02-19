// Arrow Function that is immediately invoked
(() => {
  // Theme init
  const savedTheme = localStorage.getItem("preferredTheme");
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme || (systemDark ? 'dark' : 'light');
  document.documentElement.setAttribute("data-bs-theme", initialTheme);
  
  // Language init
  const savedLang = localStorage.getItem("preferredLanguage");
  const isEnglishPage = window.location.pathname.includes('index.html') || window.location.pathname.endsWith('/');
  
  if (savedLang) {
    // preference is French but on English page, redirect
    if (savedLang === 'fr' && isEnglishPage) {
      window.location.replace('index.fr.html');
    } 
    // preference is English but on French page, redirect
    else if (savedLang === 'en' && !isEnglishPage) {
      window.location.replace('index.html');
    }
  }

  // This event listener performs a fade-out whenever the page loads
  window.addEventListener('load', () => {
    const loader = document.getElementById('page-loader');
    if (loader) {
      loader.classList.add('fade-out');
      setTimeout(() => {
        loader.remove();
      }, 800); 
    }
  });

})();