const app = require("./app");
const mongoose = require("mongoose");

const { DB_HOST } = process.env;

const { PORT } = process.env;

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
