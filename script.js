let savings = 0.00;
let referralLink = '';

function authenticateAndDeposit() {
    let amount = parseFloat(document.getElementById('amount').value);
    let paymentMethod = document.getElementById('paymentMethod').value;
    
    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount to deposit.');
        return;
    }

    // Simulate authentication with M-PESA number
    if (paymentMethod === 'mpesa') {
        let mpesaNumber = '0798714754';
        let confirmed = confirm(`Confirm deposit of $${amount.toFixed(2)} via M-PESA to ${mpesaNumber}?`);
        if (confirmed) {
            deposit(amount);
        } else {
            alert('Deposit cancelled.');
        }
    } else {
        // Handle other payment methods or implement specific logic
        alert('Payment method not implemented.');
    }
}

function deposit(amount) {
    savings += amount;
    updateBalance();
}

function withdraw() {
    let amount = parseFloat(document.getElementById('amount').value);
    if (isNaN(amount) || amount <= 0 || amount > savings) {
        alert('Please enter a valid amount to withdraw.');
        return;
    }
    savings -= amount;
    updateBalance();
}

function generateReferralLink() {
    // Generate a unique referral link (you can use a more sophisticated method in a real application)
    referralLink = 'https://kenpay.com/register?ref=12345'; // Example referral link
    document.getElementById('referralLink').value = referralLink;
}

function updateBalance() {
    document.getElementById('balance').textContent = '$' + savings.toFixed(2);
}

function showLoginForm() {
    document.getElementById('loginForm').style.display = 'block';
}

function closeLoginForm() {
    document.getElementById('loginForm').style.display = 'none';
}

function showSignupForm() {
    document.getElementById('signupForm').style.display = 'block';
}

function closeSignupForm() {
    document.getElementById('signupForm').style.display = 'none';
}

function logout() {
    // Perform logout actions (e.g., clear session, redirect to login page)
    alert('Logged out successfully.');
}

function increaseSavingsDaily() {
    savings *= 1.05; // Increase by 5%
    updateBalance();
}

// Automatically increase savings every day (for demo purposes)
setInterval(increaseSavingsDaily, 24 * 60 * 60 * 1000); // Every 24 hours
