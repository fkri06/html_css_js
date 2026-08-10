const unitValue = document.getElementById("unitValue");
const unitFrom = document.getElementById("unitFrom");
const unitTo = document.getElementById("unitTo");
const convertButton = document.getElementById("button");
const resetButton = document.getElementById("resetButton");
const msg = document.getElementById("msg");

const unitFactors = {
    "mg": 0.001,
    "g": 1,
    "kg": 1000,
    "oz": 28.3495,
    "lbs": 453,
}

convertButton.addEventListener("click", () => {
    if (unitValue.value === "") {
        msg.textContent = `Error: field empty`;
        return;
    } else {
        msg.textContent = ``;
    }

    const unitFromFactor = unitFactors[unitFrom.value];
    const unitToFactor = unitFactors[unitTo.value];
    const value = Number(unitValue.value);

    const result = ((value * unitFromFactor) / unitToFactor).toFixed(4);

    document.getElementById("conversionResult").textContent = `${value}${unitFrom.value} = ${result}${unitTo.value}`;
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
