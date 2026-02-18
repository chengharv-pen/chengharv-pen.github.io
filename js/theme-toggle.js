const THEME_KEY = "preferredTheme";

document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("themeToggle");
    
    // SYNC: Make the checkbox match the current theme attribute
    const currentAppliedTheme = document.documentElement.getAttribute("data-bs-theme");
    themeToggle.checked = (currentAppliedTheme === "dark");

    // LISTEN: Use 'change' instead of 'click' for checkboxes
    themeToggle.addEventListener("change", function () {
        const newTheme = this.checked ? "dark" : "light";
        
        document.documentElement.setAttribute("data-bs-theme", newTheme);
        localStorage.setItem(THEME_KEY, newTheme);
    });

    // Keyboard accessibility for light/dark switch
    themeToggle.addEventListener("keydown", function(e) {
        if (e.key === "Enter") {
            e.preventDefault();
            this.click();
        }
    });
});