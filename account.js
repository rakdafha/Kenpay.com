let balance = 1000;

document.getElementById('balance').textContent = balance;

function deposit() {
    let amount = prompt('Enter the amount to deposit:');
    if (amount) {
        amount = parseFloat(amount);
        if (!isNaN(amount) && amount > 0) {
            balance += amount;
            document.getElementById('balance').textContent = balance;
            alert(`Deposited $${amount}. New balance is $${balance}.`);
        } else {
            alert('Invalid amount.');
        }
    }
}

function withdraw() {
    let amount = prompt('Enter the amount to withdraw:');
    if (amount) {
        amount = parseFloat(amount);
        if (!isNaN(amount) && amount > 0 && amount <= balance) {
            balance -= amount;
            document.getElementById('balance').textContent = balance;
            alert(`Withdrew $${amount}. New balance is $${balance}.`);
        } else {
            alert('Invalid amount or insufficient funds.');
        }
    }
}
