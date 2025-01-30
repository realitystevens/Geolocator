(function() {
    const body = document.querySelector('body');
    const result = document.getElementById('result');
    const resultWrapper = document.getElementById('result_wrapper');
    const darkthemeicon = document.querySelector('.dark-theme-icon');
    const lightthemeicon = document.querySelector('.light-theme-icon');
    const actionBtn = document.getElementById('action_btn')
    
    
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

    // Make toggleDarkMode() available in the global scope
    window.toggleDarkMode = toggleDarkMode;
})();
