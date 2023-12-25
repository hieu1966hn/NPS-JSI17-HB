//////// Khai báo biến
/// khai báo biến hằng số
const PI = 3.14;


////// khai báo biến
// {
//   {
//     let a = 1;
//     {
//       let b = 2;
//       var c = 3;
//       console.log(b);/// 2
//       console.log(c);/// 3
//     }
//   }
//   console.log(c);/// 3
// }



////// Sao chép 1 mảng
// let arr = [1, 2, 3];
// // let arr1 = arr; /// Cú pháp sai, không sử dụng

// /// CÚ pháp đúng
// arr1 = [...arr];/// 1,2,3
// arr[0] = 'Vị trí số 0';
// console.log(arr1[0]); /// 1

/// Gộp mảng
// let a = [1, 2, 3];
// let b = [4, 5, 6];

// let c = [...a, ...b];
// console.log("c: ", c);



//// Sao chép đối tượng:
// let obj = {
//   name: "Husky",
//   age: 10,
// }

// let obj2 = { ...obj };
// console.log("obj2: ", obj2);


// let obj3 = {
//   name: "chihuahua",
//   age: 2
// }


// let objGop = { obj, obj3 }; ///
// console.log("objGop: ", objGop);



/////// Array Function
// let arr = [1, 2, 3, 4, 5, 6];
//// YC: In ra toàn bộ phần tử mảng với từng giá trị trong mảng được bình phương
// let arrBinhPhuong = []
// for (let i = 0; i < arr.length; i++) {
//   arrBinhPhuong[i] = arr[i] * arr[i];
// }

// console.log(arrBinhPhuong);/// ?

// //// Ứng dụng với hàm map
// let arrMapBinhPhuong = arr.map(item => item * item);
// console.log("arrMapBinhPhuong: ", arrMapBinhPhuong);


//// Yêu cầu: in ra mảng mới với các phần tử mảng arr tăng lên 5 đơn vị
// let tang5Donvi = arr.map(item => item + 5);
// console.log("tang5Donvi: ", tang5Donvi);




/////// Ví dụ với Filter
// Yêu cầu: Lọc ra các số chẵn trong mảng arr và lưu trữ vào mảng mới
// let filterSoChan = arr.filter(item => item % 2 == 0);
// console.log("filterSoChan: ", filterSoChan);///




//// Bài tập tổng hợp
let users = [
  {
    name: "Phan Anh",
    age: 17,
    school: "MindX",
  },
  {
    name: "Quang Anh",
    age: 17,
    school: "MindX",
  },
  {
    name: "Lê Anh",
    age: 16,
    school: "MindX",
  },
  {
    name: "Minh Triết",
    age: 16,
    school: "MindX",
  },
]

/*
Lọc ra tên bạn nào có độ tuổi là 16;
*/

let filterAge16 = users.filter(item => item.age == 16)
console.log("filterAge16: ", filterAge16);