const router = require("express").Router();
const stripe = require("stripe")(process.env.STR_KEY);

router.post("/payment", async (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenID, //to take the token
      amount: req.body.amount, //add the amount
      currency: "usd", //take the currency
    },
    (tokenErr, tokres) => {
      if (tokenErr) {
        res.status(500).json(tokenErr);
      } else {
        res.status(200).json(tokres);
      }
    }
  );
});

module.exports = router;
