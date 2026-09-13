document.getElementById('passwordLength').addEventListener('input', function() {
    document.getElementById('disRange').innerText = 'Password Length: ' + this.value;
});

function fnGenPasW() {
    const length = document.getElementById('passwordLength').value;
    const includeLower = document.getElementById('lw').checked;
    const includeUpper = document.getElementById('up').checked;
    const includeNumbers = document.getElementById('num').checked;
    const includeSymbols = document.getElementById('sym').checked;

    const password = generatePassword(length, includeLower, includeUpper, includeNumbers, includeSymbols);
    document.getElementById('disPasw').innerText = 'Generated Password: ' + password;
}

function generatePassword(length, includeLower, includeUpper, includeNumbers, includeSymbols) {
    const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
    const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';
    
    let charPool = '';
    if (includeLower) charPool += lowerChars;
    if (includeUpper) charPool += upperChars;
    if (includeNumbers) charPool += numberChars;
    if (includeSymbols) charPool += symbolChars;

    if (charPool.length === 0) return '';

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charPool.length);
        password += charPool[randomIndex];
    }

    return password;
}