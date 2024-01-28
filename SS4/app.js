// Khởi tạo class người
// class Nguoi {
//   // Hàm khởi tạo giá trị.
//   constructor(_name, _age, _job, _id, _hobbies, _hometown) {
//     this.name = _name;
//     this.age = _age;
//     this.job = _job;
//     this.id = _id;
//     this.hobbies = _hobbies;
//     this.hometown = _hometown;
//   }

//   gioiThieu() {
//     return `Xin chào, tôi là ${this.name} và tôi ${this.age} tuổi. Tôi đang làm nghề ${this.job}. Rất vui được làm quen với các bạn`;
//   }

//   sinhNhat() {
//     return `Chúc mừng sinh nhật!. Bạn đã ${this.age} tuổi`;
//   }
// }

// let Hieu = new Nguoi("Hiếu", 26, "Developer", "00123456789", ["Lập trình","Đọc sánh", "Xem phim"],  "Hà Nội");
// console.log(Hieu.gioiThieu());
// console.log(Hieu.sinhNhat());

/////// Kế thừa
// class GiaoVien extends Nguoi {
//   constructor(_name, _age, _job, _id, _hobbies, _hometown, _monhoc, _capbac) {
//     // Hàm super sử dụng để kế thừa các thuộc tính của class cha sang class con.
//     super(_name, _age, _job, _id, _hobbies, _hometown);
//     this.monhoc = _monhoc;
//     this.capbac = _capbac;
//   }

//   //   Kế thừa phương thức giới thiệu và cải tiến thêm với super()
//   gioiThieu() {
//     return (
//       super.gioiThieu() +`. Nhưng những năm gần đây tôi đã chuyển sang bộ phận giảng dạy tại trường học với cấp bậc ${this.capbac}`
//     );
//   }

// //   Kế thừa phương thức sinh nhật nhưng ghi đè lại toàn bộ nội dung
//     sinhNhat(){
//         return `Sinh nhật giáo viên ${this.name} đang giảng dạy tại bộ môn ${this.monhoc}
//         tuổi thứ ${this.age}!!!!`
//     }
// }

// let Hieu = new GiaoVien(
//   "Hiếu",
//   26,
//   "Developer",
//   "00123456789",
//   ["Lập trình", "Đọc sánh", "Xem phim"],
//   "Hà Nội",
//   "Tin học",
//   5
// );

// console.log(Hieu.name);
// console.log(Hieu.monhoc);
// console.log(Hieu.capbac);
// console.log(Hieu.sinhNhat());

// console.log(Hieu.gioiThieu());

///////////// Phương thức set(), get(): Để định nghĩa getter & setter cho thuộc tính của 1 đối tượng.
class Nguoi {
  constructor(ten, tuoi) {
    this._ten = ten; /// private thuộc tính của class Người.
    this._tuoi = tuoi;
  }

  // Getter cho thuộc tính "ten": Trả về giá trị thuộc tính của class đó => Dùng để lấy ra thuộc tính
  get ten() {
    return this._ten;
  }

  // Setter cho thuộc tính "ten": => Dùng để đặt lại giá trị thuộc tính trong class
  set ten(tenMoi) {
    this._ten = tenMoi;
  }

  // Getter cho thuộc tính "tuoi"
  get tuoi() {
    return this._tuoi;
  }

  // Setter cho thuộc tính "tuoi"
  set tuoi(tuoiMoi) {
    if (tuoiMoi == parseInt(tuoiMoi)) {
      if (tuoiMoi > 0) {
        this._tuoi = tuoiMoi;
      } else {
        console.log("Tuổi mới phải là một số nguyên dương");
      }
    } else {
      console.log("Tuổi mới phải là một số nguyên");
    }
  }
}

//   // Sử dụng class Nguoi vừa khai báo
let Hieu = new Nguoi("Hieu", 30);

// // Chạy hàm set tên để đặt lại giá trị tên
Hieu._ten = "Trung Hiếu";
console.log(Hieu._ten);
