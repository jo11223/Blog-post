const connectDB = require('./src/config/db');
const config = require('./src/config');
const createApp = require('./src/app');
const app = createApp();


const start = async () => {
  await connectDB();
  const port = config.port;
  app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port} (env: ${config.nodeEnv})`);
  });
};

start();
