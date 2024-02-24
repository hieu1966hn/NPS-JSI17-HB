import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signOut,
  updateProfile,
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

import { auth } from "./firebase.js";

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

  let dataClean = controller.register(data); // Data sạch đã được trả về

  ///// Xử lý với firebase để tiến hành xác thực người dùng
  createUserWithEmailAndPassword(data.email, data.password)
  .then(async (userCredential) =>{
    const user = userCredential.user;
    console.log(user);
    // Xem user đã có hay chưa
    
    await sendEmailVerification(user);
    // Hàm gửi email xác thực người dùng tới email cá nhân được đăng ký tài khoản
    
    // đăng xuất người dùng luôn
    await signOut(auth);
    
    alert("Please verify your email");

    location.href = "../login.html"
  })
  .catch((error) => {
    console.log(error);
    // Hiển thị xem trong error in ra gì?
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);

    alert(errorCode)
  })
});
