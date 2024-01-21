// Khởi tạo class người
class Nguoi {
  // Hàm khởi tạo giá trị.
  constructor(_name, _age, _job, _id, _hobbies, _hometown) {
    this.name = _name;
    this.age = _age;
    this.job = _job;
    this.id = _id;
    this.hobbies = _hobbies;
    this.hometown = _hometown;
  }

  gioiThieu() {
    return `Xin chào, tôi là ${this.name} và tôi ${this.age} tuổi. Tôi đang làm nghề ${this.job}. Rất vui được làm quen với các bạn`;
  }

  sinhNhat() {
    return `Chúc mừng sinh nhật!. Bạn đã ${this.age} tuổi`;
  }
}

// let Hieu = new Nguoi("Hiếu", 26, "Developer", "00123456789", ["Lập trình","Đọc sánh", "Xem phim"],  "Hà Nội");
// console.log(Hieu.gioiThieu());
// console.log(Hieu.sinhNhat());

/////// Kế thừa
class GiaoVien extends Nguoi {
  constructor(_name, _age, _job, _id, _hobbies, _hometown, _monhoc, _capbac) {
    // Hàm super sử dụng để kế thừa các thuộc tính của class cha sang class con.
    super(_name, _age, _job, _id, _hobbies, _hometown);
    this.monhoc = _monhoc;
    this.capbac = _capbac;
  }

  //   Kế thừa phương thức giới thiệu và cải tiến thêm với super()
  gioiThieu() {
    return (
      super.gioiThieu() +`. Nhưng những năm gần đây tôi đã chuyển sang bộ phận giảng dạy tại trường học với cấp bậc ${this.capbac}`
    );
  }

//   Kế thừa phương thức sinh nhật nhưng ghi đè lại toàn bộ nội dung
    sinhNhat(){
        return `Sinh nhật giáo viên ${this.name} đang giảng dạy tại bộ môn ${this.monhoc} 
        tuổi thứ ${this.age}!!!!`
    }
}

let Hieu = new GiaoVien(
  "Hiếu",
  26,
  "Developer",
  "00123456789",
  ["Lập trình", "Đọc sánh", "Xem phim"],
  "Hà Nội",
  "Tin học",
  5
);

console.log(Hieu.name);
console.log(Hieu.monhoc);
console.log(Hieu.capbac);

console.log(Hieu.gioiThieu());
