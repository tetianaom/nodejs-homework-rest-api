const app = require("./app");
// const dbConnect = require("./db/connection");
const mongoose = require("mongoose");

const { DB_HOST } = process.env;

const { PORT } = process.env;

// const dbConnect = async () => {
//   await mongoose.connect(DB_HOST);
// };

const startServer = async () => {
  try {
    await mongoose.connect(DB_HOST);

    app.listen(PORT, () => {
      console.log(`Database connection successful`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

startServer();
