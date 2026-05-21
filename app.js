const express = require("express");
const multer = require("multer");
const path = require("path");
const { generateReport } = require("./controllers/generateReportController");



const app = express();
const upload = multer({
  dest: "uploads/"
});

app.use(express.static("public"));

app.post("/upload", upload.single("logfile"), generateReport);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});