
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
require("dotenv").config();
const { PORT } = process.env;

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3002, () => {
    console.log(`Server is listening on port: ${PORT}`); // eslint-disable-line no-console
  });
});
