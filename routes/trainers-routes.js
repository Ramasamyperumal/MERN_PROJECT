const router = require('express').Router();
const TrainerController = require('../controllers/trainer-controller');

// http://localhost:5000/v1/api/trainers/readAllTrainers
router.get("/readAllTrainers", TrainerController.readAllTrainers);

// http://localhost:5000/v1/api/trainees/readTrainee
router.get("/readTrainer", TrainerController.readTrainer);

// http://localhost:5000/v1/api/trainees/addTrainee
router.post("/addTrainer", TrainerController.addTrainer);

// http://localhost:5000/v1/api/trainees/updateTrainee
router.put("/updateTrainer", TrainerController.updateTrainer);

// http://localhost:5000/v1/api/trainees/deleteTrainee
router.delete("/deleteTrainer", TrainerController.deleteTrainer);

module.exports = router;