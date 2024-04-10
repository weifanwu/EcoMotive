var express = require("express");
var router = express.Router();
const Cars = require("../../models/carModelSchema.js");
const User = require("../../models/userSchema.js");

router.get("/getAllCarModels", async (req, res) => {
    try {
      const allCarModels = await Cars.find();
      res.status(200).json(allCarModels);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
    }
});

router.post("/addToCarCollection", async (req, res) => {
    try {
        const email = req.body.email;
        const carModel = req.body.carTitle.trim();
        const users = await User.find({"email": email});
        const user = users[0];
        if (!user.carCollections.includes(carModel)) {
            user.carCollections.push(carModel);
            await user.save();
        }
        res.status(200).json({"message": "succeed!"});
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
    }
});



router.post("/deleteCarCollection", async (req, res) => {
    try {
        const email = req.body.email;
        const carModel = req.body.carTitle.trim();
        const users = await User.find({"email": email});
        const user = users[0];
        const collections = user.carCollections;
        const indexToRemove = collections.findIndex(car => car === carModel);
        if (indexToRemove !== -1) {
            collections.splice(indexToRemove, 1);
        }
        await user.save();
        res.status(200).json({"message": "succeed!"});
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
    }
});

router.post("/allCarCollections", async (req, res) => {
    try {
        const titles = req.body.titles;
        const cars = await Cars.find({ title: { $in: titles } });
        res.status(200).json({"cars": cars});
    } catch(error) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });    
    }
});
  
module.exports = router;