const express = require('express');
const fs = require('fs');
const router = express.Router();

// Login Endpoint
router.post('/login', (req, res) => {
    const { username, password } = req.body;

    // อ่านไฟล์ JSON ที่เก็บข้อมูลผู้ใช้
    let data = fs.readFileSync('./data/dummy-user-data.json', 'utf-8');  

    // แปลงข้อมูล JSON เป็น object
    data = JSON.parse(data);
    // เข้าถึงข้อมูล array ของผู้ใช้ที่อยู่ในคีย์ 'user'
    const users = data.user;  // users จะเป็น array ที่มีข้อมูลผู้ใช้งาน

    // ตรวจสอบว่าข้อมูลเป็น array หรือไม่
    if (!Array.isArray(users)) {
        console.error('Data is not an array!');
        return;
    }
    // ค้นหาผู้ใช้ตาม username และ password
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
    // ถ้าพบผู้ใช้
    console.log('Status: success');  // log status ก่อนตอบกลับ
    res.json({ status: 'success', message: 'Login successful'});
    } else {
    // ถ้าไม่พบผู้ใช้
    console.log('Status: error');  // log status ก่อนตอบกลับ
    res.status(401).json({ status: 'error', message: 'Invalid username or password' });
    }
});

module.exports = router;
