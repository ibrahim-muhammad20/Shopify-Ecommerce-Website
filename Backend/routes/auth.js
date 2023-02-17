const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString(),
  });

  try {
    const savedUser = await newUser.save(); //commit
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    !user && res.status(400).json("wrong username");
    const hashedpassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    );
    const Orignalpassword = hashedpassword.toString(CryptoJS.enc.Utf8);
    const Inputpassword = req.body.password;
    Orignalpassword !== Inputpassword &&
      res.status(401).json("password did'nt match");

    const Accesstoken = jwt.sign(
      {
        id: user.id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
      { expiresIn: "3d" }
    );

    //  const validates = await bcrypt.compare(req.body.password , user.password);
    //  !validates && res.status(400).json("password did'nt match");
    const { password, ...others } = user._doc;

    res.status(200).json({ ...others, Accesstoken });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
