const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/auth/register', (req, res, next) => {
    console.log(req.body);
    return res.status(200).json({ token: 'aaaa' });
});

app.post('/auth/login', (req, res, next) => {
    console.log(req.body);
    return res.status(200).json({ token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwicm9sZSI6IkFkbWluIiwiaWF0IjoxNTE2MjM5MDIyfQ.QZn5ms8ELOfykiX_ytaghzGZSV-vzaNVMEc7UD0N84M' });
});

const PORT = process.env.PORT || 7000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));