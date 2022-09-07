// get value from localstorage and put that into the counter
const value = document.getElementById('value');
const localStorageValue = localStorage.getItem('value');
value.innerText = localStorageValue;
localStorage.setItem('value', parseInt(value.innerText) === NaN ? 0 : parseInt(value.innerText));

// convert the value to a number
let valueNumber = parseInt(value.innerText);

const inc = () => {
    let increasedValue = ++valueNumber;
    value.innerText = increasedValue;
    localStorage.setItem('value', increasedValue);
}

const dec = () => {
    let decreasedValue = --valueNumber;
    value.innerText = decreasedValue;
    localStorage.setItem('value', decreasedValue);
}
