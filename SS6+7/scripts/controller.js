const lowerCaseLetter = /[a-z]/g;
const upperCaseLetter = /[A-Z]/g;
const numbers = /[0-9]/g


// Dùng để soát lỗi người dùng nhập vào từ thẻ input
const controller = {};

controller.register = (data) => {
  // Code kiểm tra input đã có dữ liệu hay chưa
  if (data.email == "") {
    document.getElementById("email-error").innerHTML =
      "*Please input your email";
  } else {
    document.getElementById("email-error").innerHTML = "";
  }

  if (data.password == "") {
    document.getElementById("password-error").innerHTML =
      "*Please input your password";
  } else {
    document.getElementById("password-error").innerHTML = "";
  }

  // Xử lý password tại đây
  if(data.password.length < 6){
    document.getElementById("password-error").innerHTML =
      "*Your password must be at least 6 characters";
  }
  else if(!data.password.match(lowerCaseLetter)){
    document.getElementById("password-error").innerHTML =
      "*Your password must contain a lowerCaseLetter";
  }
  else if(!data.password.match(upperCaseLetter)){
    document.getElementById("password-error").innerHTML =
    "*Your password must contain a upperCaseLetter";
  }
  else if(!data.password.match(numbers)){
    document.getElementById("password-error").innerHTML =
    "*Your password must contain a number or special character";
  }
  else{
    // Thỏa mãn hết mọi điều kiện bên trên 
    // => Cho phép dữ liệu người dùng nhập là hợp lệ
    if(data.email !== "" && data.password !== ""){
        return data;
    }
  }
  
};

controller.login = () => {};
