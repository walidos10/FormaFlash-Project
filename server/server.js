const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const fileUpload = require("express-fileupload");
const path = require("path");
const util = require("util");

const server = express();
const connectDB = require("./config/ConnectDB");
const admin = require("./routes/Admin");
const user = require("./routes/User");

require("dotenv").config({ path: "./config/.env" });
const port = process.env.PORT;
server.use(express.json());

connectDB();
server.use(express.urlencoded({ extended: true }));
server.use(fileUpload());

//server.use(express.static(path.join(__dirname, "upload")));
//server.use(multer({ dest: "../public/upload/temp" }).single("file"));

server.post("/uploa", function (req, res) {
  //console.log(req.files.file); // the uploaded file object
});
server.post("/upload", (req, res) => {
  console.log(req.body);
  if (req.files === null) {
    return res.status(400).json({ msg: "No file uploaded" });
  }

  const file = req.files.file;

  file.mv(`${__dirname}/../client/public/upload/${file.name}`, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    res.json({ fileName: file.name, filePath: `/upload/${file.name}` });
  });
});

server.use(helmet());
server.use("/admin", admin);
server.use("/user", user);
server.listen(port, (err) => {
  err
    ? console.log(err)
    : console.log(`server connect on http://localhost:${port}`);
});
