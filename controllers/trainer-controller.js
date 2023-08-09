const TrainersModel = require('../models/trainers-model');

// Read all Trainees
function readAllTrainers(req, res) {
    try {
        TrainersModel.find({})
            .then(trainers => {
                res.json(trainers);
            })
    } catch (err) {
        res.json(err.message);
    }
}


// Read specific Trainee by Name/Email
function readTrainer(req, res) {
    try {
        let {name, email} = req.body;

        TrainersModel.find({"name": name, "email": email})
            .then(trainers => {
                (trainers.length > 0) 
                    ? 
                    res.json(trainers)
                    :
                    res.json("No Trainees found!!!");
            })
    } catch (err) {
        res.json(err.message);
    }
}


// Add a new Trainee
async function addTrainer(req, res) {

    const Trainer = new TrainersModel(req.body);

    try {
        let trainerExists = await TrainersModel.find({"email": req.body.email});

        (trainerExists.length > 0)
            ?
            res.json("Trainee Already Exists!")
            :
            (await Trainer.save(), res.json("Trainee Added Successfully!"));
    } catch(err) {
        let errorList = [];
        if(err.errors) {
            for(let temp in err.errors) {
                errorList.push(err.errors[temp].message)
            }
        }
        res.json(errorList);
    }
}


// Update a specific Trainee
function updateTrainer(req, res) {
    try {
        TrainersModel.updateOne({"email": req.body.email}, {$set: req.body})
            .then(results => {
                (results.modifiedCount > 0)
                    ?
                    res.json("Trainee Updated Successfully!")
                    :
                    res.json("Unable to update the Trainee!");
            })
    } catch (err) {
        res.json(err.message);
    }
}


// Delete a specific Trainee
function deleteTrainer(req, res) {
    try {
        TrainersModel.deleteOne({"email": req.body.email})
            .then(results => {
                (results.deletedCount > 0)
                    ?
                    res.json("Trainee Deleted Successfully!")
                    :
                    res.json("Unable to delete the Trainee!");
            })
    } catch (err) {
        res.json(err.message);
    }
}


module.exports = {
    readAllTrainers,
    readTrainer,
    addTrainer,
    updateTrainer,
    deleteTrainer
}