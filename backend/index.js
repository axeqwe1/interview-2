const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./router/auth'); // Import Router
const cors = require('cors');

const app = express();
const PORT = 5000;
app.use(cors());
// Middleware สำหรับอ่าน JSON
app.use(bodyParser.json());

// ใช้งาน Router
app.use('/api', authRoutes);

// เริ่มเซิร์ฟเวอร์
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
