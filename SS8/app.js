import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";

// Kết nối Firebase vào dự án web Todolist này
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAYUM28_hTy7eab8FdGSTsXdRvQDmnjGk",
  authDomain: "nps-jsi17-hb1.firebaseapp.com",
  projectId: "nps-jsi17-hb1",
  storageBucket: "nps-jsi17-hb1.appspot.com",
  messagingSenderId: "1070272741533",
  appId: "1:1070272741533:web:4a02bd362bb1350993d474",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); /// kết nối database với firebase app

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Function to render tasks
function renderTasks(tasks) {
  taskList.innerHTML = "";
  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.innerHTML = `
        <span>${task.description}</span>
        <button class="deleteBtn" data-id="${task.id}">Xóa</button>
        `;
    taskList.appendChild(li); /// Li vừa được tạo ra sẽ là con (nằm bên trong) thẻ ul.

    // thêm sự kiện lắng nghe nút button Delete được ấn
    const deleteBtn = li.querySelector(".deleteBtn");
    deleteBtn.addEventListener("click", ()=>{
        deleteTask(task.id); /// Gọi hàm xóa task (xóa thẻ li)
    })
  });
}

// Function cập nhật dữ liệu mới nhất từ DB về website
const getTasks = async () => {
  const querySnapshot = await getDocs(collection(db, "tasks"));
  console.log(querySnapshot);

  const tasks = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    description: doc.data().description,
  }));
  renderTasks(tasks); /// In ra các tasks mới nhất được cập nhật từ DB
};

// Function thêm mới task vào DB firestore
const addTask = async (description) => {
  await addDoc(collection(db, "tasks"), { description }); // Thêm xong task trong DB rồi nhé
  getTasks(); // Lấy dữ liệu mới nhất từ Database về website
  taskInput.value = "";
};

// Function xóa task trong DB khi bấm nút delete
const deleteTask = (id) => {
  const docRef = doc(db, "tasks", id);
  deleteDoc(docRef)
    .then(() => {
      console.log("Toàn bộ document đã bị xóa thành công");
      getDocs(); //// lấy dữ liệu mới nhất từ database về web
    })
    .catch((error) => {
      console.log(error);
    });
};

// Function lắng nghe thay đổi từ người dùng tại giao diện => Xử lý tương tự với DB
//  (click vào nút thêm task)
addTaskBtn.addEventListener("click", () => {
  const description = taskInput.value.trim();
  if (description !== "") {
    addTask(description);
  }
});

// Gọi hàm lấy dữ liệu mới nhất từ database
getTasks()
