const config = require('./config');
const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');

const index = require('./routes/index');
const who = require('./routes/who');
const contact = require('./routes/contact');
const services = require('./routes/services');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.set('port', config.port);

app.use('/', express.static('public'));
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'Pipeline is operational' });
});
app.get('/api/info', (req, res) => {
  res.status(200).json({
    name: 'node-express-azure',
    version: '1.0.0',
    description: 'Demo app for Azure Pipelines and CI/CD'
  });
});
app.use('/', index);
app.use('/who', who);
app.use('/contact', contact);
app.use('/services', services);

app.listen(config.port, () => {
  console.log(`Demo app is running on ${config.port}!`);
});
