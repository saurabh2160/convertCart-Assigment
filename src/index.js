const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const searchRoute = require("./routes/routes");
const sequelize = require("./config/database");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use('/', searchRoute);

app.use((error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message || 'Something went wrong.';
  res.status(status).json({ message: message });
});

async function connectDB() {
  try {
    await sequelize.authenticate()
    console.log("MySQL Connected");
  }catch(err){
    console.error("DB Connection Error:", err);
  }
}
connectDB();

app.listen(process.env.PORT, async () =>{
  console.log(`Server running on port ${process.env.PORT}`)
}
);
