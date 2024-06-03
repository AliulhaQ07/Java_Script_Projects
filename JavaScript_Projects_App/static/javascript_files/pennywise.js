// targeting the input feilds...
const item = document.querySelector('#item');
const price = document.querySelector('#price');
// targeting the output div to show records...
const dataRecords = document.querySelector('#dataRecords');
const addExpensebtn = document.querySelector('#addexpense');
const messageFailure = document.querySelector('#messageFailure');
const messageSuccess = document.querySelector('#messageSuccess');

addExpensebtn.addEventListener('click', function () {
    validationFields();
})

function validationFields() {

    if (item.value === '') {
        messageFailure.innerHTML = 'Item Cannot Be Empty';
        console.log('Item Cannot Be Empty')
    } else if (price.value === '') {
        messageFailure.innerHTML = 'Please Enter Price';
        console.log("Please Enter Price ")
    } else if (price.value <= 0) {
        messageFailure.innerHTML = 'Please Enter Valid Price';
        console.log('Please Enter Valid Price')
    } else {
        // messageSuccess.innerHTML = 'DATA POSTED';
        successMessage();
        messageFailure.innerHTML = '';
        console.log('Success');
        acceptingData();
    }

}

// function to show success message and then hide after 2 seconds...
function successMessage() {
    setTimeout(function () {
        messageSuccess.innerHTML = 'DATA POSTED SUCCESSFULLY';
        setTimeout(function () {
            messageSuccess.innerHTML = '';
        }, 1000)
    }, 1)
}

// creating this empty object to collect data from the user input...
let storingData = {};

// This function will accept data from the form/page...
function acceptingData() {
    // Pushing the data into my storingData object...
    // storingData['values'] = `ITEM: ${item.value}   PRICE: ${price.value}`;
    storingData['values'] = item.value + " <br> " + price.value;
    console.log(storingData);
    creatingRecords();
}

function creatingRecords() {
    // USING TEMPLATE LITERALS TO SHOW DATA IN DATARECORDS DIV..
    dataRecords.innerHTML += `
        <div id="dataRecords" class=" mb-3 d-flex align-items-center justify-content-between border rounded ">
            <!-- so this onclick="deleteRecord(this)" basically tarpet the p tag which hold 
             the current record, if we target the datarecords div it will delete all the records;-->
            <p class="lead mt-3 ms-5">${storingData.values}</p>
            <div class="me-5">
                <!--  adding onclick function on the edit icon...  -->
                <span class="btn btn-primary me-1 " onclick="updateRecord(this)" >Edit</span>
                <!--  adding onclick function on the delete icon...  -->
                <!--  this function is in global scope out of DOM...  -->
                <span class="btn btn-danger" onclick="deleteRecord(this)">Delete</span>
            </div>
        </div> 
        `;
    // RESETING THE FORM SO THE INPUT FEILDS WILL BE BLANK...
    item.value = ('');
    price.value = ('');
}

// due to this problem i have put all my code outside DOM
// this function is out of DOM becaues i have to access it globally.
function deleteRecord(e) {
    // after setting this btn to delete icon, i am removing the parent of that element...
    // in our case first it will remove al
    e.parentElement.parentElement.remove();
    console.log('deleted ');
}

function updateRecord(e) {
    item.value = e.parentElement.previousElementSibling.innerHTML;
    price.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
}


