const express = require("express");
const axios = require("axios");
const cors = require("cors");
const sentJokesSet = new Set();
const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

app.get("/citaty", async (req, res) => {
    try {
        const link = "https://tsytaty.com/"; // Ссылка на сервер с цитатами
        const response = await axios.get(link);
        const html = response.data;
        res.send(html);
    } catch (error) {
        console.error("Error fetching data:", error.message);
        res.status(500).send("Server Error");
    }
});

app.listen(port, () => {
    console.log(`Proxy server is running on port ${port}`);
});
