const express = require("express");
const cors = require("cors");
const { connectDB } = require('./db');
const port = process.env.PORT || 3001;

const authRoutes = require('./routes/auth.routes');
const availableRoutes = require('./routes/available.routes');
const professionalRoutes = require('./routes/professional.routes');
const patientRoutes = require('./routes/patient.routes');

const app = express();
const bodyParser = require('body-parser');
connectDB();

app.use(cors({origin: "http://localhost"}));
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/patient', patientRoutes);
app.use('/', authRoutes);

app.use('/professional', professionalRoutes);
app.use('/available', availableRoutes);


app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});