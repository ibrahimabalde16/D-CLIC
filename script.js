const lengthEl = document.getElementById('length');
const lowercaseEl = document.getElementById('lowercase');
const uppercaseEl = document.getElementById('uppercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateBtn = document.getElementById('generate');
const passwordEl = document.getElementById('password');
const copyBtn = document.getElementById('copy');

const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+-=[]{};:,.<>/?';

generateBtn.addEventListener('click', generatePassword);
copyBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(passwordEl.value);
  alert('Mot de passe copié !');
});

function generatePassword() {
  let characters = '';
  if (lowercaseEl.checked) characters += lowercase;
  if (uppercaseEl.checked) characters += uppercase;
  if (numbersEl.checked) characters += numbers;
  if (symbolsEl.checked) characters += symbols;

  const length = parseInt(lengthEl.value);
  if (!characters) {
    passwordEl.value = "Sélection vide!";
    return;
  }

  let password = '';
  for (let i = 0; i < length; i++) {
    password += characters[Math.floor(Math.random() * characters.length)];
  }

  passwordEl.value = password;
}
