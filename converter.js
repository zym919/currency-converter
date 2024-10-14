// My Currency Converter is using static prices
var prices = {
    "BTC": 63005, 
    "ETH": 3982, 
    "SOL": 175,
    "LINK": 28.31
};

// Conversion
function convertCurrency() {
    var fromCurrency = document.getElementById("from-currency").value;
    var toCurrency = document.getElementById("to-currency").value;
    var amount = document.getElementById("amount").value;

    // To check if amount is an actual number
    if (isNaN(amount) || amount === "") {
        alert("Please enter a valid amount.");
        return;
    }

    var amountInUSD = amount * prices[fromCurrency];

    var result;

    // Conversion
    if (toCurrency === "USD") {
        result = amountInUSD;
    } else if (toCurrency === "EUR") {
        result = amountInUSD * 0.85;
    } else if (toCurrency === "GBP") {
        result = amountInUSD * 0.75;
    } else if (toCurrency === "NGN") {
        result = amountInUSD * 1781;
    } else {
        result = "Conversion rate not available.";
    }

    // Result Part
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = amount + " " + fromCurrency + " = " + result.toFixed(2) + " " + toCurrency;
}

// Event Listener to execute 'Convert' command
var convertButton = document.getElementById("convert-button");
convertButton.addEventListener("click", convertCurrency);