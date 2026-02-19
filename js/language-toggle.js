// This function is called whenever the language switch is toggled
function switchLanguage() {
    // Replace settings modal content with loading spinner
    const content = document.getElementById('settingsContent');
    const spinner = document.getElementById('loadingSpinner');
    content.classList.add('d-none');
    spinner.classList.remove('d-none');

    // Get the current language to find opposite language, and save in LocalStorage
    const isEnglish = window.location.pathname.includes('index.html') || window.location.pathname.endsWith('/');
    localStorage.setItem('preferredLanguage', isEnglish ? 'fr' : 'en');

    // Fade out the body before leaving
    document.body.style.transition = "opacity 0.4s ease";
    document.body.style.opacity = "0";

    // Leave to the right page
    const target = isEnglish ? 'index.fr.html#settings' : 'index.html#settings';
    setTimeout(() => {
        window.location.href = target;
    }, 400);
}

document.addEventListener('DOMContentLoaded', () => {
    const languageToggle = document.getElementById('languageToggle');

    // This event listener allows keyboard accessibility on language switch
    languageToggle.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            e.target.click();
        }
    });
    
    // If the settings modal is open...
    if (window.location.hash === '#settings') {
        const modalElement = document.getElementById('settingsModal');
        const settingsModal = new bootstrap.Modal(modalElement);
        settingsModal.show();
        
        // Make the checkbox match the current HTML's language
        const isEnglish = window.location.pathname.includes('index.html') || window.location.pathname.endsWith('/');
        if (languageToggle) {
            languageToggle.checked = isEnglish;
        }
        
        // Clean URL to prevent re-opening on manual refresh
        history.replaceState("", document.title, window.location.pathname);
    }
});