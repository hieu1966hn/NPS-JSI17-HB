/// OOP là gì? Vai trò của OOP trong lập trình?
/**
OOP là gì: Lập trình hướng đối tượng.  

 *  */

///// Khai báo kiểu dữ liệu (class)
// class Person {
//   //// Hàm khởi tạo: Khai báo thuộc tính của class đó
//   constructor(_name, _age, _address, _cccd) {
//     /// Gán giá trị trong hàm khởi tạo
//     this.name = _name;
//     this.age = _age;
//     this.address = _address;
//     this.cccd = _cccd;
//   }

//   say() {
//     alert("Hello How are you!!");
//   }
// }

// let LeAnh = new Person('Lê Anh', 16, "Cầu Giấy - Hà Nội", "012345678");
// console.log(LeAnh.name);
// console.log(LeAnh.age); //?
// console.log(LeAnh.address); //?
// console.log(LeAnh.cccd); //?

/*
Bài 1: Khởi tạo kiểu dữ liệu hình tròn. Biết rằng hình tròn có thuộc tính:  bán kính hình tròn
Xây dựng phương thức trong KDL (class) hình tròn như sau:
1. Diện tích hình tròn
2. Chu hình tròn

*/
const PI = 3.14;
class HinhTron {
  constructor(_bankinh) {
    this.banKinh = _bankinh;
  }

  dtht() {
    return PI * this.banKinh * this.banKinh;
  }

  cvht() {
    return PI * this.banKinh * 2;
  }
}

// let HinhTron1 = new HinhTron(2);
// console.log(
//   "Diện tích hình tròn:", HinhTron1.dtht()
// );
// console.log(
//   "Chu vi hình tròn:", HinhTron1.cvht()
// );

/*
Bài 2: Khởi tạo KDL hình chữ nhật
Biết rằng hình CN có thuộc tính truyền vào là: chiều dài, chiều rộng
Xây dưng phương thức trong KDL HCN như sau:
1. Chu vi hình chữ nhật
2. Diện tích hình chữ nhật
*/

class HinhChuNhat {
  constructor(_chieuDai, _chieuRong) {
    this.chieuDai = _chieuDai;
    this.chieuRong = _chieuRong;
  }

  cvhcn() {
    return (this.chieuDai + this.chieuRong) * 2;
  }

  dthcn() {
    return this.chieuDai * this.chieuDai;
  }
}
