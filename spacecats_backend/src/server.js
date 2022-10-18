const express = require('express');
const app = express();
const db = require('./models');
const initRoutes = require('./routers/files.routes');


global.__basedir = __dirname + '/..';

app.use(express.urlencoded({ extended: true }));

db.sequelize.sync();

initRoutes(app);

let port = 4001;
app.listen(port, () => {
	console.log(`Running at localhost:${port}`);
});