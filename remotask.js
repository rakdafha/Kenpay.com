document.getElementById('generateBtn').addEventListener('click', function() {
    const referralCode = generateReferralCode();
    document.getElementById('referralCode').value = referralCode;
    document.getElementById('referralLink').value = `${window.location.origin}?ref=${referralCode}`;
});

function generateReferralCode() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let referralCode = '';
    for (let i = 0; i < 8; i++) {
        referralCode += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return referralCode;
}
