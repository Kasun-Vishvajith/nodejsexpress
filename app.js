const config = require('./config');
const express = require('express');
const path = require('path');
<<<<<<< New base: fix: resolve TypeError for express-handlebars v6 API change
const { engine } = require('express-handlebars');
||||||| Common ancestor
const exphbs = require('express-handlebars');
=======
const { engine } = require('express-handlebars'); //Mod
>>>>>>> Current commit: fix: resolve TypeError for express-handlebars v6 API change

const index = require('./routes/index');
const who = require('./routes/who');
const contact = require('./routes/contact');

const app = express();

app.set('views', path.join(__dirname, 'views'));
<<<<<<< New base: fix: resolve TypeError for express-handlebars v6 API change
app.engine('handlebars', engine({ defaultLayout: 'main' }));
||||||| Common ancestor
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
=======
app.engine('handlebars', engine({ defaultLayout: 'main' })); //Mod
>>>>>>> Current commit: fix: resolve TypeError for express-handlebars v6 API change
app.set('view engine', 'handlebars');
app.set('port', config.port);

app.use('/', express.static('public'));
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'Pipeline is operational' });
});
app.use('/', index);
app.use('/who', who);
app.use('/contact', contact);

app.listen(config.port, () => {
  console.log(`Demo app is running on ${config.port}!`);
});
