// this file contains script used in header of the app

const sun = document.getElementsByClassName('fa-sun')[0];
const moon = document.getElementsByClassName('fa-moon')[0];

// function to set theme settings

const setTheme = (themeName) => {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;

    if (themeName === 'light-theme') {
        sun.style.display = 'none';
        moon.style.display = 'inline-block';
    } else {
        sun.style.display = 'inline-block';
        moon.style.display = 'none';
    }
}

// function to toggle between light & dark themes

const toggleTheme = () => {
    if (localStorage.getItem('theme') === 'dark-theme') {
        setTheme('light-theme');
    }
    else setTheme('dark-theme');
}

(() => {
    if (localStorage.getItem('theme') === 'dark-theme') {
        setTheme('dark-theme');
    } else {
        setTheme('light-theme');
    }
})();

sun.onclick = toggleTheme;
moon.onclick = toggleTheme;