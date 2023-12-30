const body = document.querySelector('body');
const result = document.getElementById('result');
const resultWrapper = document.getElementById('result_wrapper');
const darkthemeicon = document.querySelector('.dark-theme-icon');
const lightthemeicon = document.querySelector('.light-theme-icon');

// actionBtn already declared in form.js



const toggleDarkMode = () => {

    body.classList.toggle('dark_mode');
    actionBtn.classList.toggle('darkbtn');
    result.classList.toggle('darkresult');
    resultWrapper.classList.toggle('dark_result_wrapper');

    if (body.classList.contains('dark_mode')) {
        darkthemeicon.style.display = 'none';
        lightthemeicon.style.display = 'block';
    } else {
        lightthemeicon.style.display = 'none';
        darkthemeicon.style.display = 'block';
    }

};

  