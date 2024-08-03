document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // ป้องกันการส่งฟอร์มตามปกติ

    // ตรวจสอบข้อมูลการล็อกอิน (ตัวอย่าง username และ password ที่ถูกต้อง)
    var validUsername = 'jxstin';
    var validPassword = '56';

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('errorMessage');

    if (username === validUsername && password === validPassword) {
        
        // เปลี่ยนหน้าไปยังหน้า Home
        window.location.href = 'Home.html';
    } 
    
    else {
      Swal.fire({
        icon: "error",
        title: "Try again ",
        text: "Username หรือ Password ไม่ถูกต้อง",
      });
        // แสดงข้อความแจ้งเตือน
        errorMessage.textContent = 'Username หรือ Password ไม่ถูกต้อง';
    }
});
