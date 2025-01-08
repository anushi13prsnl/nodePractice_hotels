const express = require("express");
const router = express.Router();
const Person = require("./../models/Person");

router.post("/", async (req, res) => {
    try{
        // const data = req.body;
        // const newPerson = new Person(data);

        const newPerson = new Person(req.body); // same as above
        const response = await newPerson.save();
        console.log("Data Saved....\n", response);
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({"error": err});
    }
    
})

router.get("/", async(req, res) => {
    try{
        const response = await Person.find();
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({"error": err});
    }
})

// Parameterized route
router.get("/:workType", async(req,res) => {
    try{
        const workType = req.params.workType;
        if(workType == "chef" || workType == "waiter" || workType == "manager"){
            const response = await Person.find({ work: workType });
            res.status(200).json(response);
        }
        else{
            res.status(404).json({error : "Invalid work type"});
        }
    }catch(err){
        console.log(err);
        res.status(500).json({message:"error occured....\n\n"},{"error": err});
    }
})


module.exports = router;