let currentInput = '';

function appendValue(value) {
    currentInput += value;
    document.getElementById('display').value = currentInput;
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        document.getElementById('display').value = currentInput;
    } catch (e) {
        document.getElementById('display').value = 'Error';
    }
}

function clearDisplay() {
    currentInput = '';
    document.getElementById('display').value = '';
}
