const passwordInput = document.getElementById('passwordInput');
const encodeButton = document.getElementById('encodeButton');
const encodedPassword = document.getElementById('encodedPassword');
const copyButton = document.getElementById('copyButton');
const copyMessage = document.getElementById('copyMessage');

const secretKey = "MySupraTopSecretKey2025";

encodeButton.addEventListener('click', () => {
    const password = passwordInput.value;
    if (password) {
        const combined = password + secretKey;
        encodedPassword.value = btoa(combined);
    } else {
        alert('Please enter a secret');
    }
});

copyButton.addEventListener('click', () => {
    if (encodedPassword.value) {
        navigator.clipboard.writeText(encodedPassword.value)
            .then(() => {
                copyMessage.classList.remove('hidden');

                setTimeout(() => {
                    copyMessage.classList.add('hidden');
                }, 2000);
            })
            .catch(err => alert('Failed to copy: ', err));
    } else {
        alert('No encoded secret to copy');
    }
});

passwordInput.addEventListener('copy', (e) => {
    e.preventDefault();
    alert('Copy is not allowed');
});

passwordInput.addEventListener('paste', (e) => {
    e.preventDefault();
    alert('Paste is not allowed');
});

passwordInput.addEventListener('cut', (e) => {
    e.preventDefault();
    alert('Cut is not allowed');
});

passwordInput.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});
