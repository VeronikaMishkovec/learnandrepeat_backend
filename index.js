require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const setsRouter = require("./routes/SetsRouter");
const AuthRouter = require("./routes/AuthRouter");
const WordRouter = require("./routes/WordRouter");
const UserRouter = require("./routes/UserRouter")

const ErrorMiddleware = require("./middlewares/auth")

const app = express();

const PORT = process.env.PORT || 5001;

app.use(express.json());

app.use("/sets", setsRouter);
app.use("/auth", AuthRouter);
app.use("/word", WordRouter);
app.use("/user", UserRouter);



app.use(ErrorMiddleware);

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.listen(PORT, () => console.log(`Server starts on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
