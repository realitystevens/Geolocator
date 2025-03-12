const inputText = document.getElementById('input_text');
const actionBtn = document.getElementById('action_btn');



// Function to enable the action button when the input field is not empty
inputText.addEventListener("input", function() {
    actionBtn.disabled = false; 

    if (inputText.value === '') {
        actionBtn.disabled = true; 
    }
});

export { actionBtn, inputText };
