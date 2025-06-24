const initApp = () => {
    const hamburgerBtn = document.getElementById("humburger-button");
    const mobileMenu = document.getElementById("mobile-menu");

    const toggleMenu = () => {
        mobileMenu.classList.toggle("hidden");
        mobileMenu.classList.toggle("flex");
        hamburgerBtn.classList.toggle("toggle-btn");
    };

    hamburgerBtn.addEventListener("click", toggleMenu);
    mobileMenu.addEventListener("click", toggleMenu);
};

// Theme toggle functionality
const setupThemeToggle = () => {
    const themeToggle = document.getElementById("theme-toggle");
    const themeToggleMobile = document.getElementById("theme-toggle-mobile");
    const htmlElement = document.documentElement;

    const updateThemeIcons = (isDark) => {
        const icon = isDark ? "☀️" : "🌙";
        if (themeToggle) themeToggle.textContent = icon;
        if (themeToggleMobile) themeToggleMobile.textContent = icon;
    };

    const toggleTheme = () => {
        const isDark = htmlElement.classList.toggle("dark");
        localStorage.setItem("theme", isDark ? "dark" : "light");
        updateThemeIcons(isDark);
    };

    // Initialize theme from localStorage or system preference
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
        htmlElement.classList.add("dark");
        updateThemeIcons(true);
    } else {
        htmlElement.classList.remove("dark");
        updateThemeIcons(false);
    }

    // Add event listeners to both buttons
    if (themeToggle) themeToggle.addEventListener("click", toggleTheme);
    if (themeToggleMobile)
        themeToggleMobile.addEventListener("click", toggleTheme);
};

document.addEventListener("DOMContentLoaded", () => {
    initApp();
    setupThemeToggle();

    // Set current year in footer
    document.getElementById("year").textContent = new Date().getFullYear();
});