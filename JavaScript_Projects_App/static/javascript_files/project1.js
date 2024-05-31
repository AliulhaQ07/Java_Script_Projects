// const buttons = document.querySelectorAll('.btn');
// const body = document.querySelector('body');
//
// console.log(buttons);
// buttons.forEach(function (button) {
//
//     button.addEventListener('click', function (event) {
//         event.preventDefault();
//         // console.log(button);
//
//         if (event.target.id === 'red') {
//             body.style.backgroundColor = 'red';
//             body.style.color = 'white';
//         }
//         if (event.target.id === 'green') {
//             body.style.backgroundColor = 'green';
//             body.style.color = 'white';
//         }
//         if (event.target.id === 'blue') {
//             body.style.backgroundColor = 'blue';
//             body.style.color = 'red';
//         }
//
//     })
// })


// ------------------------------------------------

const colorsForm = document.querySelector('#colorsForm')
// FOR BOOTSTRAP STYLING.
const userSubmit = document.querySelector('#userSubmit')
userSubmit.classList.add('btn', 'btn-primary');
// FOR INPUT BG COLOR
const userInput = document.querySelector('#userBgInput')
userInput.classList.add('form-control', 'mt-3');

// FOR INPUT TEXT COLOR
const userTextInput = document.querySelector('#userTextInput')
userTextInput.classList.add('form-control');

const bg_Div = document.querySelector('#bg_Div')

colorsForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const userInput = document.querySelector('#userBgInput').value.trim();
    const userTextInput = document.querySelector('#userTextInput').value.trim();
    const headings = document.querySelectorAll('#headings')
    const forErrors = document.querySelector('#forErrors')


    if (userInput && userTextInput === '' || !isNaN(userInput)) {
        forErrors.innerHTML = 'Empty strings & numbers are not allowed';
    } else {
        forErrors.innerHTML = '';
        bg_Div.style.backgroundColor = userInput;
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





colorPicker.addEventListener('input', function (e) {
    color_Code.innerHTML = selectedColor.value;

})

color_Code.addEventListener('click', function (e) {

    const range = document.createRange();
    range.selectNode(this);

    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    document.execCommand('copy');

    window.getSelection().removeAllRanges();;

    notification.style.display = 'block';
    setTimeout(function() {
        notification.style.display = 'none';
    }, 1500);

})

