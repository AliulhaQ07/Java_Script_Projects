document.addEventListener("DOMContentLoaded", function () {

    const item = document.querySelector('#item');
    const price = document.querySelector('#price')

    const addExpencebtn = document.querySelector('#addexpence');


    addExpencebtn.addEventListener('click', function () {
        const itemValue = item.value;
        const priceValue = price.value;

        localStorage.setItem('item', itemValue);
        localStorage.setItem('price', priceValue);

        location.reload()
    })

    console.log('nyc theme')


})

