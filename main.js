const togglePassword = document.querySelector('#togglePassword');
const toggleConfirmPassword = document.querySelector('#toggleConfirmPassword');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmarsenha');

togglePassword.addEventListener('click', function () {
  togglePasswordVisibility(password);
});

toggleConfirmPassword.addEventListener('click', function () {
  togglePasswordVisibility(confirmPassword);
});

function togglePasswordVisibility(input) {
  const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
  input.setAttribute('type', type);
  togglePassword.classList.toggle('bi-eye');
}
