
const express = require("express");
const req = require("express/lib/request");
const app = express()

const PORT = process.env.PORT || 3001;

// Route
app.get("/api", (req, res) => {
    res.json({message: "Hello!"});
});

// Listen
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});