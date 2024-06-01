const colorsForm = document.querySelector('#colorsForm')
// FOR BOOTSTRAP STYLING.
const userSubmit = document.querySelector('#userSubmit')
userSubmit.classList.add('btn', 'btn-primary');
// FOR INPUT BG COLOR
const userInput = document.querySelector('#userBgInput')
userInput.classList.add('form-control');

// FOR INPUT TEXT COLOR
const userTextInput = document.querySelector('#userTextInput')
userTextInput.classList.add('form-control');
//new code;
const bg_Div = document.querySelectorAll('#bg_Div')

colorsForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const userInput = document.querySelector('#userBgInput').value.trim();
    const userTextInput = document.querySelector('#userTextInput').value.trim();
    const headings = document.querySelectorAll('#headings')
    const forErrors = document.querySelector('#forErrors')


    if (userInput && userTextInput === '' || !isNaN(userInput)) {
        forErrors.innerHTML = 'INVALID INPUT';
    } else {
        forErrors.innerHTML = '';
        // bg_Div.style.backgroundColor = userInput;

        // new code
        bg_Div.forEach(function (Background_Divs, index) {
            Background_Divs.style.backgroundColor = userInput;
        })


        headings.forEach(heading => {
            heading.style.color = userTextInput
        })
    }


})

// to get and copy the value of color using color palate;
const colorPicker = document.querySelector('#colorPicker');
const selectedColor = document.querySelector('#colorPicker');
const color_Code = document.querySelector('#color_Code');

const copiedMessage = document.querySelector('#notification');

const pasteButton1 = document.querySelector('#pasteButton1');
const pasteButton2 = document.querySelector('#pasteButton2');

// TO SIMPLY SHOW THE VALUE OF COLOR INTO A P TAG USNG innerHTML;
colorPicker.addEventListener('input', function (e) {
    color_Code.innerHTML = selectedColor.value;

})

// COPY FUNCTION
color_Code.addEventListener('click', function (e) {

    const range = document.createRange();
    range.selectNode(this);

    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    document.execCommand('copy');

    window.getSelection().removeAllRanges();

    notification.style.display = 'block';
    setTimeout(function() {
        notification.style.display = 'none';
    }, 1500);

})


// PASTE FUNCTION for bg color
pasteButton1.addEventListener('click', function (e) {
       navigator.clipboard.readText()
        .then((color) => {
            // Check if the clipboard content is a valid color
            if (/^#[0-9A-F]{6}$/i.test(color)) {
                // Paste the color value into the input field
                userInput.value = color;
            } else {
                // If the clipboard content is not a valid color, notify the user
                alert('Clipboard does not contain a valid color value.');
            }
        })
        .catch((error) => {
            // Handle errors
            console.error('Failed to read clipboard contents: ', error);
            alert('Failed to read clipboard contents.');
        });
})

// PASTE BUTTON FOR TEXT COLOR
pasteButton2.addEventListener('click', function (e) {
       navigator.clipboard.readText()
        .then((color) => {
            // Check if the clipboard content is a valid color
            if (/^#[0-9A-F]{6}$/i.test(color)) {
                // Paste the color value into the input field
                userTextInput.value = color;
            } else {
                // If the clipboard content is not a valid color, notify the user
                alert('Clipboard does not contain a valid color value.');
            }
        })
        .catch((error) => {
            // Handle errors
            console.error('Failed to read clipboard contents: ', error);
            alert('Failed to read clipboard contents.');
        });
})




