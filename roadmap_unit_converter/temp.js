const unitValue = document.getElementById("unitValue");
const unitFrom = document.getElementById("unitFrom");
const unitTo = document.getElementById("unitTo");
const convertButton = document.getElementById("button");
const resetButton = document.getElementById("resetButton");
const msg = document.getElementById("msg");

function celciusToFahrenheit(value) {
    return (value * (9 / 5)) + 32;
}

function celciusToKelvin(value) {
    return value + 273.15;
}

function fahrenheitToCelcius(value) {
    return (value - 32) * (5 / 9);
}

function fahrenheitToKelvin(value) {
    return (value - 32) * (5 / 9) + 273.15;
}

function kelvinToFahrenheit(value) {
    return (value - 273.15) * (9 / 5) + 32;
}

function kelvinToCelcius(value) {
    return (value - 273.15);
}


convertButton.addEventListener("click", () => {
    if (unitValue.value === "") {
        msg.textContent = `Error: field empty`;
        return;
    } else {
        msg.textContent = ``;
    }

    const unitFromTemp = unitFrom.value;
    const unitToTemp = unitTo.value;
    const userInputValue = Number(unitValue.value);
    let value;

    if (unitFromTemp === "c" && unitToTemp === "f") {
        value = celciusToFahrenheit(userInputValue);
    } else if (unitFromTemp === "c" && unitToTemp === "k") {
        value = celciusToKelvin(userInputValue);
    } else if (unitFromTemp === "f" && unitToTemp === "c") {
        value = fahrenheitToCelcius(userInputValue);
    } else if (unitFromTemp === "f" && unitToTemp === "k") {
        value = fahrenheitToKelvin(userInputValue);
    } else if (unitFromTemp === "k" && unitToTemp === "c") {
        value = kelvinToCelcius(userInputValue);
    } else if (unitFromTemp === "k" && unitToTemp === "f") {
        value = kelvinToFahrenheit(userInputValue);
    } else {
        value = userInputValue;
    }

    const result = value.toFixed(4);

    document.getElementById("conversionResult").textContent = `${userInputValue}${unitFromTemp} = ${result}${unitToTemp}`;
    document.getElementById("result").style.display = "block";

    // Hide content and the convert button
    document.getElementsByClassName("converter-content")[0].style.display = "none";
    document.getElementById("convertButton").style.display = "none";

    // Display the reset button;
    document.getElementById("resetButtonDiv").style.display = "block";
})

resetButton.addEventListener("click", () => {
    document.getElementById("result").style.display = "none";
    document.getElementsByClassName("converter-content")[0].style.display = "block";
    document.getElementById("convertButton").style.display = "block";
    document.getElementById("resetButtonDiv").style.display = "none";
})
