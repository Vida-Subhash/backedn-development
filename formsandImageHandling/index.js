const express = require("express");

const app = express();
//middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get("/myget", (req, res) => {
    console.log(req.body);

    res.send(req.body);
});

app.listen(4000, () => {
    console.log("Server running on port 4000");
});