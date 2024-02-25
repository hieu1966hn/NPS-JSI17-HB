Buổi 8: 
- Giới thiệu về Dabase realtime: SQL/NoSQL.

let users = [
    {
        name: "Hiếu",
        age: 27,
        hobbies: []
    }
]


SQL (Structured Query Language): Hệ quản trị cơ sở dữ liệu. Là một ngôn ngữ truy vấn dữ liệu từ các cơ sở dữ liệu (database) có quan hệ, dựa trên mô hình bảng và quan hệ giữa các bảng.

NoSQL (Non SQL/ Not Only SQL): Là một loại cơ sở dữ liệu không sử dụng ngôn ngữ truy vấn dữ liệu CÓ CẤU TRÚC như SQL mà nó sử dụng mô hình dữ liệu: Cột, tài liệu, đồ thị hoặc KHÓA - GIÁ TRỊ.


Firebase Database: NoSQL
- Firestore DB(**): là phiên bản mới hơn và cải tiến hơn từ Realtime DB với mô hình mới và trực quan hơn. Lưu dữ liệu trong các tài liệu chứa các trường được ánh xạ vào các giá trị. Các tài liệu được lưu trữ trong các tập hợp, có thể sử dụng để tổ chức dữ liệu và truy vấn dữ liệu.

- Realtime Database: Lưu dữ liệu dưới dạng JSON, và truy vấn dữ liệu bằng cách sử dụng các tham chiếu đến các nút trong cây dữ liệu.

JSON (Javascript Object Notation): Là một kiểu định dạng dữ liệu dựa trên văn bản và có cú pháp tương tự như các Object trong JS.

Công dụng của JSON: Thường được sử dụng để truyền dữ liệu trong các ứng dụng WEB. Ví dụ gửi dữ liệu từ SERVER đến CLIENT để nó có thể được hiển thị trên một trang web hoặc ngược lại. JSON có các loại giá trị sau: chuỗi, số, đối tượng, boolean, null. JSON có các ưu điểm: định dạng đơn giản, hỗ trợ nhiều ngôn ngữ lập trình và kích thước NHỎ.

VD minh họa về JSON:
{
    name: "Hiếu",
    age: 27,
    address: {
        city: "Hà Nội",
        district: "Tây Hồ",
    },
    married: false,
    children: null,
}
