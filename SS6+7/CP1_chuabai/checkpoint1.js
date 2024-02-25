/*
Trắc nghiệm:

*/

// Chữa câu 9
// let m = [1, 2, 3, 4, 5, 6, "hh", "9", 80, 100];

// // Xóa phần tử không phải kiểu dữ liệu number
// let newM = m.filter(item => typeof(item) == "number");
// console.log("newM: ", newM); /// Mảng mới chỉ gồm kiểu dữ liệu number

// // Bình phương toàn bộ phần tử mảng m;
// let mSquared = newM.map(item => item * item);
// console.log("mSquared: ", mSquared);

//// Chữa bài 10
// let str = ' High knowledge, high return';

// // Sử dụng split để tách chuỗi thành từng phần tử mảng
// let arr = str.split(" ");
// console.log("arr: ", arr);
// let newArr = arr.filter(item => item != "");
// console.log("newArr: ", newArr);

///// Chữa Bài 11;
// class People {
//   // Hàm khởi tạo giá trị
//   constructor(name, age, address) {
//     this._name = name;
//     this._age = age;
//     this._address = address;
//   }
// }

// class Student extends People {
//   // Kế thừa các thuộc tính của People với hàm super()
//   constructor(name, age, address, id, math, chemistry, physical) {
//     super(name, age, address);
//     this._id = id;
//     this._math = math;
//     this._physical = physical;
//     this._chemistry = chemistry;
//   }

//   //   Hàm get
//   get math() {
//     return this._math;
//   }
//   get chemistry() {
//     return this._chemistry;
//   }
//   get physical() {
//     return this._physical;
//   }

//   //   Viết hàm set
//   set math(newMath) {
//     this._math = newMath;
//   }
//   set chemistry(newChemistry) {
//     this._chemistry = newChemistry;
//   }
//   set physical(newPhysical) {
//     this._physical = newPhysical;
//   }

//   /// Phương thức GPA
//   GPA() {
//     return (this._math + this._physical + this._chemistry) / 3;
//   }
// }

// let Hieu = new Student("Hiếu", 26, "Hà Nội", "0123456789", 9, 8, 7);
// // Gọi hàm set
// Hieu._math = 10;
// // Gọi hàm get
// console.log(Hieu._math); // 10
// // Gọi hàm GPA
// console.log(
//     Hieu.GPA()
// );

//// Chữa bài 12:
class Hinh {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }
}

// Lớp con hình tam giác
class TamGiac extends Hinh {
  constructor(width, height) {
    super(width, height);
  }

  area() {
    return (this._width * this._height) / 2;
  }
}

// Lớp con hình chữ nhật
class ChuNhat extends Hinh {
  constructor(width, height) {
    super(width, height);
  }
  area() {
    return this._width * this._height;
  }
}

// Khai báo hàm main
const main = ()=>{
    // Khai báo hình tam giác mới
    const triangle = new TamGiac(5, 8);

    // Khai báo hình chữ nhật mới
    const rectangle = new ChuNhat(4, 10)

    console.log(`Diện tích hình tam giác là ${triangle.area()}`);

    console.log(`Diện tích hình chữ nhật là ${rectangle.area()}`);
}

// Gọi hàm main
main();