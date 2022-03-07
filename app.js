const express = require('express');

const app = express();
app.use(express.static('public'));

const router = require("./routers/router.js");
app.use(router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Server started on port:', PORT);
    console.log('Start Time:', Date());
});