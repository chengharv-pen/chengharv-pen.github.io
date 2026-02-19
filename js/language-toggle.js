function switchLanguage() {
    const content = document.getElementById('settingsContent');
    const spinner = document.getElementById('loadingSpinner');
    
    content.classList.add('d-none');
    spinner.classList.remove('d-none');

    const isEnglish = window.location.pathname.includes('index.html') || window.location.pathname.endsWith('/');
    const target = isEnglish ? 'index.fr.html#settings' : 'index.html#settings';

    localStorage.setItem('preferredLanguage', isEnglish ? 'fr' : 'en');

    // Fade out the body before leaving
    document.body.style.transition = "opacity 0.4s ease";
    document.body.style.opacity = "0";
    setTimeout(() => {
        window.location.href = target;
    }, 400);
}

document.addEventListener('DOMContentLoaded', () => {
    if (window.location.hash === '#settings') {
        const modalElement = document.getElementById('settingsModal');
        const settingsModal = new bootstrap.Modal(modalElement);
        settingsModal.show();
        
        // Sync the toggle switch state with the page
        const toggle = document.getElementById('languageToggle');
        const isEnglishPage = window.location.pathname.includes('index.html') || window.location.pathname.endsWith('/');
        if (toggle) toggle.checked = isEnglishPage;
        
        // Clean URL to prevent re-opening on manual refresh
        history.replaceState("", document.title, window.location.pathname);
    }
});