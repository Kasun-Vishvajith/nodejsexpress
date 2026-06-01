const config = require('./config');
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

const index = require('./routes/index');
const who = require('./routes/who');
const contact = require('./routes/contact');
const about = require('./routes/about');

const app = express();

app.set('views', path.join(__dirname, 'views'));
const hbsEngine = (typeof exphbs === 'function')
  ? exphbs({ defaultLayout: 'main' })
  : (exphbs && exphbs.engine)
    ? exphbs.engine({ defaultLayout: 'main' })
    : (exphbs && exphbs.create)
      ? exphbs.create({ defaultLayout: 'main' }).engine
      : null;
if (!hbsEngine) {
  throw new Error('Unsupported express-handlebars version');
}
app.engine('handlebars', hbsEngine);
app.set('view engine', 'handlebars');
app.set('port', config.port);

app.use('/', express.static('public'))
app.use('/', index);
app.use('/who', who);
app.use('/contact', contact);
app.use('/about', about);

app.listen(config.port, () => {
  console.log(`Demo app is running on ${config.port}!`);
});
