const express = require('express');
const app = express();
const db = require('./models');
const initRoutes = require('./routers/files.routes');
const cors = require('cors');

global.__basedir = __dirname + '/..';

app.use(cors());
app.use(express.urlencoded({ extended: true }));

db.sequelize.sync();

initRoutes(app);

let port = 4000;
app.listen(port, () => {
	console.log(`Running at localhost:${port}`);
});