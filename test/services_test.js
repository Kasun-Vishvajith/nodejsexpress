'use strict';
const config = require('../config');
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const server = require('../app');

chai.use(chaiHttp);

describe('/GET services', () => {
    it('returns the services page', (done) => {
        chai.request(`http://localhost:${config.port}`)
            .get('/services')
            .end((err, res) => {
                res.should.have.status(200);
                res.text.should.contain('Our Services');
                res.text.should.contain('Virtual mock architectures');
                done();
            });
    });
});
