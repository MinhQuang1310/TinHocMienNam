// controllers/helloController.js

// Hàm xử lý yêu cầu GET để trả về giá trị "hello"
const getHello = (req, res) => {
    res.send('hello');
  };
  
  // Xuất hàm để sử dụng ở nơi khác
  module.exports = {
    getHello,
  };
  