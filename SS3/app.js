// // Spread Syntax: Array, Object
// // let obj1 = {
// //   name: "john",
// //   age: 24,
// //   job: "Dev",
// //   certi: "1st"
// // }

// // let obj2 = {
// //   name: "Jame",
// //   age: 25,
// //   job: "Dev"
// // }

// // let obj3 = Object.assign(obj1, obj2); // ?
// // console.log("obj3: ", obj3);

// //// Ôn tập map, Filter => Array
// /*
//   map: Giúp thực hiện yêu cầu người dùng đối với mảng và 
//   trả về kết quả là 1 mảng mới đã thực hiện yêu cầu đó

//   filter: Giúp kiểm tra yêu cầu người dùng đối với mảng và
//   trả về kết quả là 1 mảng mới thỏa mãn yêu cầu người dùng.

// */
// let arr = [1, 2, 3, 4, 5];
// ///////// Tăng gấp đôi giá trị phần tử mảng arr và in ra nó.
// let arrGapDoi = arr.map(item => item * 2); ////
// console.log("arrGapDoi: ", arrGapDoi);

// ////////// Yêu cầu đề bài
// /*
// 1. In ra tên các bạn học sinh có độ tuổi >=17
// 2. In ra tên các bạn học sinh có cùng sở thích là: "đọc truyện"
// 3. In ra tên các bạn học sinh có cùng sở thích là: "bóng đá"
// 4. In ra tên các bạn học sinh có sở thích là: "bóng rổ"
// */

// //// Hàm in ra tên
// const printName = (students) => {
//   let getName = [];
//   for (let key of students) {
//     getName.push(key.name); /// Mỗi lần lặp sẽ đẩy tên 1 đối tượng vào mảng getName;
//   }

//   return getName.join(", "); /// Chuyển đổi mảng => chuỗi ta sử dụng hàm join();
// }

// let students = [
//   {
//     name: "Quang Anh",
//     age: 17,
//     hobbies: ["cầu lông", 'đọc truyện']
//   },
//   {
//     name: "Phan Anh",
//     age: 17,
//     hobbies: ["bóng đá", 'đọc truyện']
//   },
//   {
//     name: "Lê Anh",
//     age: 16,
//     hobbies: ["bóng đá", 'bóng rổ']
//   },
// ]


// let age17Filter = students.filter(item => item.age >= 17);
// console.log(printName(age17Filter)); //// ?


// ///// Yêu cầu 2
// let studentSameHobbies = students.filter(item => item.hobbies.includes("đọc truyện"));
// console.log(printName(studentSameHobbies));//// ?

