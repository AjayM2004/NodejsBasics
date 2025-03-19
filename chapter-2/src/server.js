import express from "express";
const app = express();
const PORT = process.env.PORT ||7118;
app.listen(PORT, () => console.log(`Server is running on the port = ${PORT}`));
