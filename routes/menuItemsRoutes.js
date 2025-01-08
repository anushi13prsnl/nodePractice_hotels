const express = require("express");
const router = express.Router();
const MenuItem = require("./../models/MenuItem");


router.post("/", async(req,res) =>{
    try{
        const data = req.body;
        const newMenuItem = new MenuItem(data);              
        const response = await newMenuItem.save();
        console.log("Data Saved....\n", response);
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({"message" : "Internal Server Error... \n"},{"error": err},);
    }
})

router.get("/", async(req,res)=>{
    try{
        const response = await MenuItem.find();
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({"message" : "Internal Server Error... \n"},{"error": err},);
    }
})

router.get("/:taste", async(req, res) => {
    try{
        const taste = req.params.taste;
        if(taste == "sweet" || taste == "sour" || taste == "spicy"){
            const response = await MenuItem.find({ taste: taste });
            res.status(200).json(response);
        }
    }catch(err){
        console.log(err);
        res.status(500).json({"message" : "Internal Server Error... \n"},{"error": err},);
    }
})

module.exports = router;