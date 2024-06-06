document.addEventListener("DOMContentLoaded", () => {
    // INPUT FEILDS IN FORM...
    const titleInput = document.querySelector('#titleInput');
    const dateInput = document.querySelector('#dateInput');
    const descriptionInput = document.querySelector('#descriptionInput');

    const addNotebtn = document.querySelector('#addNotebtn');
    const form = document.querySelector('#form');
    const validationMessage = document.querySelector('#validationMessage');


    const outputTask = document.querySelector('#outputTask');

    document.addEventListener('submit', function (event) {
        event.preventDefault();
        formValidation();

    })


    function formValidation() {
        if (titleInput.value === '') {
            validationMessage.innerHTML = 'Please enter a title';
        } else if (dateInput.value === '') {
            validationMessage.innerHTML = 'Please enter a date';
        } else if (descriptionInput.value === '') {
            validationMessage.innerHTML = 'Please enter a description';
        } else {
            console.log('note added')
            noteAdded();
            acceptingData();

            addNotebtn.click();
            (() => {
                addNotebtn.setAttribute("data-bs-dismiss", "");
            })()

        }
    }

    // function to show that note is added and disappear after 1 second.
    function noteAdded() {
        setTimeout(function () {
            validationMessage.innerHTML = 'NOTE ADDED!';
            setTimeout(function () {
                validationMessage.innerHTML = '';
            }, 1000)
        }, 1)
    }
})

//object to store data----CONVERTING THIS OBJECT TO ARRAY FOR LOCAL STORAGE;
// let storeData = {};
let storeData = [];


// LOCAL STORAGE PART

//function to accept data and then store it in object
function acceptingData() {
    storeData.push({
            title: titleInput.value,
            date: dateInput.value,
            description: descriptionInput.value,
        }
    )
    localStorage.setItem('storeData', JSON.stringify(storeData));
    creatingTasks();
}

// IMEDIATE INVOKE FUNCTION...
(function () {
    storeData = JSON.parse(localStorage.getItem('storeData'));
    console.log(storeData)
    creatingTasks();
})()

function creatingTasks() {
    outputTask.innerHTML = '';
    storeData.map(function (x, y) {
        return outputTask.innerHTML += `<div class = "  card shadow-sm  " >
            <div class = "card-body"  id=${y} >
            
            <h5 class = "card-title" >${x.title}</h5 >
            <h6 class = "card-subtitle mb-2 text-body-secondary" >${x.date}</h6 >
            <p class = "card-text" >${x.description}</p >
            
            <div class = "text-end me-4" >
            <i onclick="updateTask(this)" data-bs-toggle = "modal" data-bs-target = "#form" class = "bi bi-pencil-square me-2" style = "cursor: pointer" ; ></i >
            <i onclick="deleteTask(this); " class = "bi bi-trash3" style = "cursor: pointer" ; ></i >
            </div >
            </div >
        </div >`;
    })


    resetForm();
}

// reseting the form so the feilds are blank...
function resetForm() {
    titleInput.value = '';
    dateInput.value = '';
    descriptionInput.value = '';
}

function deleteTask(e) {
    e.parentElement.parentElement.parentElement.remove();
    storeData.splice(e.parentElement.parentElement.parentElement, 1);
    localStorage.setItem('storeData', JSON.stringify(storeData));
}

// updating task, getting the value then showing in the form.once task is selected it is removed automatically...
function updateTask(e) {
    let selectedTask = e.parentElement.parentElement;
    titleInput.value = selectedTask.children[0].innerHTML;
    dateInput.value = selectedTask.children[1].innerHTML;
    descriptionInput.value = selectedTask.children[2].innerHTML;

    deleteTask(e);
}