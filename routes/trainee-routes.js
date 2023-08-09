const router = require('express').Router();
const TraineeController = require('../controllers/trainee-controller');

// http://localhost:5000/v1/api/trainees/readAllTrainees
router.get("/readAllTrainees", TraineeController.readAllTrainees);

// http://localhost:5000/v1/api/trainees/readTrainee
router.get("/readTrainee", TraineeController.readTrainee);

// http://localhost:5000/v1/api/trainees/addTrainee
router.post("/addTrainee", TraineeController.addTrainee);

// http://localhost:5000/v1/api/trainees/updateTrainee
router.put("/updateTrainee", TraineeController.updateTrainee);

// http://localhost:5000/v1/api/trainees/deleteTrainee
router.delete("/deleteTrainee", TraineeController.deleteTrainee);

module.exports = router;