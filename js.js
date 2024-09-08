function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteChar() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function append(value) {
    document.getElementById('display').value += value;
}

function calculate() {
    try {
        let result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
