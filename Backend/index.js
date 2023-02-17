const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const productRoute = require("./routes/product");
const orderRoute = require("./routes/order");
const cartRoute = require("./routes/cart");
const stripeRoute = require("./routes/stripe");
const cors = require("cors");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection is Successful"))
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute); //http500/api/auth/register
app.use("/api/users", userRoute);
app.use("/api/product", productRoute);
app.use("/api/order", orderRoute);
app.use("/api/cart", cartRoute);
app.use("/api/checkout", stripeRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running");
});
