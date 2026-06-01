'use strict';
const config = require('../config');
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const server = require('../app');

chai.use(chaiHttp);

describe('/GET api/info', () => {
    it('returns the application metadata', (done) => {
        chai.request(`http://localhost:${config.port}`)
            .get('/api/info')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.deep.equal({
                    name: 'node-express-azure',
                    version: '1.0.0',
                    description: 'Demo app for Azure Pipelines and CI/CD'
                });
                done();
            });
    });
});
