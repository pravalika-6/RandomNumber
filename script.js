function generateRandomNumber() {
    let minValue = document.querySelector("#minValue").value;
    let maxValue = document.querySelector("#maxValue").value;
    let text = document.querySelector("#result");
    minValue = +minValue;
    maxValue = +maxValue;
    if (!isNaN(minValue) && !isNaN(maxValue) && minValue <= maxValue) {
        let random = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
        text.innerHTML = `Your random number is: ${random}`;
    } else {
        text.innerHTML = "Please enter valid minimum and maximum values.";
    }
}
