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
  
    loginButton.addEventListener('click', function () {
      // Thực hiện xác thực hoặc xử lý đăng nhập ở đây
      const username = document.querySelector('.sign-in-container input[type="text"]').value;
      const password = document.querySelector('.sign-in-container input[type="password"]').value;
  
      // Thực hiện xác thực hoặc xử lý đăng nhập ở đây
      console.log(`Username: ${username}, Password: ${password}`);
    });
  });
  