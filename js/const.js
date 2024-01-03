// const.js
document.addEventListener("DOMContentLoaded", function () {
  const signUpButton = document.getElementById('signUp');
  const signInButton = document.getElementById('signIn');
  const container = document.getElementById('container');
  const loginButton = document.getElementById('loginButton');

  signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
  });

  signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
  });

  loginButton.addEventListener('click', function (event) {
    event.preventDefault(); // Ngăn chặn form từ việc tự động gửi đi

    const signInForm = document.querySelector('.sign-in-container form');
    const emailInput = signInForm.querySelector('input[type="email"]');
    const passwordInput = signInForm.querySelector('input[type="password"]');

    // Kiểm tra và hiển thị lỗi nếu có
    if (!validateEmail(!emailInput.value)) {
      showError(emailInput, "Please enter a valid email");
      return;
    }

    if (!passwordInput.value) {
      showError(passwordInput, "Please enter a valid password");
      return;
    }

    // Nếu mọi thứ hợp lệ, bạn có thể tiếp tục với quá trình đăng nhập
    console.log("Login successful!");
  });

  // Hàm kiểm tra định dạng email
  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  // Hàm hiển thị thông báo lỗi
  function showError(input, errorMessage) {
    const attentionError = input.nextElementSibling;
    attentionError.querySelector('.error-text').textContent = errorMessage;
    attentionError.style.display = 'block';
  }
});
