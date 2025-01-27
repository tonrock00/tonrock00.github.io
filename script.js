const passwordInput = document.getElementById('passwordInput');
const encodeButton = document.getElementById('encodeButton');
const encodedPassword = document.getElementById('encodedPassword');
const copyButton = document.getElementById('copyButton');
const copyMessage = document.getElementById('copyMessage');
const togglePassword = document.getElementById('togglePassword');

const secretKey = "SecretToSecret2025";

encodeButton.addEventListener('click', () => {
    const password = passwordInput.value;
    if (password) {
        const combined = encodePasswordWithSecret(password, secretKey);
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

togglePassword.addEventListener('click', () => {
    const type = passwordInput.type === 'password' ? 'text' : 'password';
    passwordInput.type = type;

    togglePassword.textContent = type === 'password' ? '👁️' : '🙈';
});

function encodePasswordWithSecret(password, secret) {
    let encoded = '';
    for (let i = 0; i < password.length; i++) {
        encoded += password[i] + secret[i % secret.length];
    }
    return encoded;
}

// function toBase64Unicode(str) {
//     return btoa(new TextEncoder().encode(str).reduce((data, byte) => data + String.fromCharCode(byte), ''));
// }

// function fromBase64Unicode(base64) {
//     return new TextDecoder().decode(Uint8Array.from(atob(base64), c => c.charCodeAt(0)));
// }
