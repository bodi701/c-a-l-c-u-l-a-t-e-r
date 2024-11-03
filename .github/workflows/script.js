// Append a character to the display screen
function append(value) {
    document.getElementById("result").value += value;
}

// Clear the display screen
function clearScreen() {
    document.getElementById("result").value = "";
}

// Delete the last character from the display screen
function deleteLast() {
    const current = document.getElementById("result").value;
    document.getElementById("result").value = current.slice(0, -1);
}

// Calculate and display the result
function calculate() {
    try {
        const result = eval(document.getElementById("result").value);
        document.getElementById("result").value = result;
    } catch (error) {
        document.getElementById("result").value = "Error";
    }
}
