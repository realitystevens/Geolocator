import { actionBtn } from './form.js';

const body = document.querySelector('body');
const result = document.getElementById('result');
const resultWrapper = document.getElementById('result_wrapper');
const darkthemeicon = document.querySelector('.dark-theme-icon');
const lightthemeicon = document.querySelector('.light-theme-icon');


// Function to toggle dark mode 
const toggleDarkMode = () => {
    const isDarkMode = body.classList.toggle('dark_mode');

    actionBtn.classList.toggle('darkbtn');
    result.classList.toggle('darkresult');
    resultWrapper.classList.toggle('dark_result_wrapper');

    if (isDarkMode) {
        lightthemeicon.style.display = 'block';
        darkthemeicon.style.display = 'none';
        localStorage.setItem('darkMode', 'enabled');
    } else {
        lightthemeicon.style.display = 'none';
        darkthemeicon.style.display = 'block';
        localStorage.setItem('darkMode', 'disabled');
    }
};


// Check the saved preference and apply dark mode if previously enabled
const savedDarkMode = localStorage.getItem('darkMode');
if (savedDarkMode === 'enabled') {
    body.classList.add('dark_mode');
    actionBtn.classList.add('darkbtn');
    result.classList.add('darkresult');
    resultWrapper.classList.add('dark_result_wrapper');
    lightthemeicon.style.display = 'block';
    darkthemeicon.style.display = 'none';
} else {
    lightthemeicon.style.display = 'none';
    darkthemeicon.style.display = 'block';
}

// Make function globally accessible
window.toggleDarkMode = toggleDarkMode;
