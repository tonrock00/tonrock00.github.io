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
