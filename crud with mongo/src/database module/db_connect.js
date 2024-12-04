const mongoose = require('mongoose');
const cluster = require('node:cluster');
const numCPUs = require('os').cpus().length;

module.exports = async (app) => {
  try {
    const connectionInstance = await mongoose.connect(
      `mongodb+srv://matzsolutions:2VVG2QxBAMub9Oaz@cluster0.gyal2.mongodb.net/tacos`
    );

    if (cluster.isMaster) {
      console.log(`Master process ${process.pid} is running`);

      for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
      }
      
      cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker process ${worker.process.pid} died. Restarting...`);
        cluster.fork();
      });
    } else {
      await app.listen(process.env.port, () => {
        console.log(
          `Mongo Db connected ${connectionInstance?.connection?.host}`
        );
      });
    }
  } catch (error) {
    console.log(`Failed to connect Database ${error}`);
    process.exit(1);
  }
};
