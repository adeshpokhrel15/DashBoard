const express = require ('express');
const app = express();

app.get("/",(req,res) => {
    res.send("App is  yyy working");
});
app.listen(1000);