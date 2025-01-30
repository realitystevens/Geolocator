(function() {
    const inputText = document.getElementById('input_text');
    const actionBtn = document.getElementById('action_btn');

    inputText.addEventListener("input", function() {
        actionBtn.disabled = false; 

        if (inputText.value === '') {
            actionBtn.disabled = true; 
        }
    });
})();
