const chai = require('chai');
const chaiHttp = require('chai-http');
const config = require('../config');
const server = require('../app');

chai.use(chaiHttp);

describe('Health Check', () => {
  it('returns a 200 status code with health information', (done) => {
    chai.request(`http://localhost:${config.port}`)
      .get('/api/health')
      .end((err, res) => {
        chai.expect(res).to.have.status(200);
        chai.expect(res.body).to.have.property('status');
        chai.expect(res.body.status).to.equal('healthy');
        chai.expect(res.body).to.have.property('timestamp');
        chai.expect(res.body).to.have.property('uptime');
        done();
      });
  });
});
