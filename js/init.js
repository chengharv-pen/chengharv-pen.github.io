// Arrow Function that is immediately invoked
(() => {
  // Theme init
  let savedTheme = localStorage.getItem("preferredTheme");
  if (!savedTheme) {
    savedTheme = "dark";
    localStorage.setItem("preferredTheme", savedTheme);
  }
  document.documentElement.setAttribute("data-bs-theme", initialTheme);
  
  // Language init
  let savedLang = localStorage.getItem("preferredLanguage");
  if (!savedLang) {
    savedLang = "en";
    localStorage.setItem("preferredLanguage", savedLang);
  }

  const isEnglishPage = window.location.pathname.includes('index.html') || window.location.pathname.endsWith('/');
  
  if ((savedLang === 'fr' && isEnglishPage)) {         // preference is French but on English page, redirect
    window.location.replace('index.fr.html');          //
  } else if ((savedLang === 'en' && !isEnglishPage)) { // preference is English but on French page, redirect
    window.location.replace('index.html');
  }

  // This event listener performs a fade-out whenever the page loads
  window.addEventListener('load', () => {
    const loader = document.getElementById('page-loader');
    if (loader) {
      loader.classList.add('fade-out');
      setTimeout(() => loader.remove(), 800); 
    }
  });

})();