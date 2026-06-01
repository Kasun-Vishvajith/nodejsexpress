'use strict';
const config = require('../config');
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const server = require('../app');

chai.use(chaiHttp);

describe('/GET', () => {
    it('returns the health status', (done) => {
        chai.request(`http://localhost:${config.port}`)
            .get('/health')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.deep.equal({ status: 'Pipeline is operational' });
                done();
            });
    });
});