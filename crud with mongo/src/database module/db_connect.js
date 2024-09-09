const mongoose = require('mongoose');

module.exports = async (app) => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.db_url}/${process.env.db_name}`
    );

    await app.listen(process.env.port, () => {
      console.log(`Mongo Db connected ${connectionInstance?.connection?.host}`);
    });
  } catch (error) {
    console.log(`Failed to connect Database ${error}`);
    process.exit(1);
  }
};
