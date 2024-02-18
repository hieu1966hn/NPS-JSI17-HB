/// Bắt sự kiện submit của form như sau:
const registerForm = document.getElementById("register-form");

// Lắng nghe sự kiện submit của form như sau
registerForm.addEventListener("submit", (event) => {
  // Ngăn sự kiện reload mặc định của trình duyệt
  event.preventDefault();

  // Lưu trữ thông tin người dùng nhập vào
  const data = {
    // Cách lấy dữ liệu người dùng nhập vào thử thẻ intput có name tương ứng như sau:
    email: registerForm.email.value.trim(),
    password: registerForm.password.value,
  };

  console.log(data);

});
