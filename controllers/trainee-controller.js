const TraineesModel = require('../models/trainees-model');

// Read all Trainees
function readAllTrainees(req, res) {
    try {
        TraineesModel.find({})
            .then(trainees => {
                res.json(trainees);
            })
    } catch (err) {
        res.json(err.message);
    }
}


// Read specific Trainee by Name/Email
function readTrainee(req, res) {
    try {
        let {name, email} = req.body;

        TraineesModel.find({"name": name, "email": email})
            .then(trainees => {
                (trainees.length > 0) 
                    ? 
                    res.json(trainees)
                    :
                    res.json("No Trainees found!!!");
            })
    } catch (err) {
        res.json(err.message);
    }
}


// Add a new Trainee
async function addTrainee(req, res) {

    const Trainee = new TraineesModel(req.body);

    try {
        let traineeExists = await TraineesModel.find({"email": req.body.email});

        (traineeExists.length > 0)
            ?
            res.json("Trainee Already Exists!")
            :
            (await Trainee.save(), res.json("Trainee Added Successfully!"));
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
function updateTrainee(req, res) {
    try {
        TraineesModel.updateOne({"email": req.body.email}, {$set: req.body})
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
function deleteTrainee(req, res) {
    try {
        TraineesModel.deleteOne({"email": req.body.email})
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
    readAllTrainees,
    readTrainee,
    addTrainee,
    updateTrainee,
    deleteTrainee
}