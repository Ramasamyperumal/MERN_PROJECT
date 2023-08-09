const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json()); 

// Trainee Routes
    // http://localhost:5000/v1/api/trainees
const TraineeRoutes = require("./routes/trainee-routes");
app.use("/v1/api/trainees", TraineeRoutes);


// Trainers Routes
    // http://localhost:5000/v1/api/trainers
const TrainerRoutes = require("./routes/trainers-routes");
app.use("/v1/api/trainers", TrainerRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is listening on ${process.env.PORT}`);
});