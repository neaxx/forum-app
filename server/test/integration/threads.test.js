const chai = require('chai');

const request = require('supertest');


const app = require('../../src/app');

const fixtures = require('./fixtures');

const mongoosehelper = require('./mongoosehelper');


const expect = chai.expect;



describe('Threads endpoint', () => {

	describe('when callng GET /threads', () => {


		describe('when the database has threads', () => {

			before(async () => await fixtures.seedThreads());

			after(async () => await mongoosehelper.dropDatabase());

			it('return a list of threads', () => {


				return request(app).get('/threads')


					.expect('Content-type', /json/)

					.expect(200)

					.then(response => {

						const {
							body
						} = response;


						expect(body.data).to.have.length(2);

						expect(body.data[0].title).to.equal('El sistema de matricula esta dañado');

						expect(body.data[0].slug).to.equal('el-sistema-de-matricula-esta-danado');

						expect(body.data[1].title).to.equal('El problema de transporte en Panama');

						expect(body.data[1].slug).to.equal('el-problema-de-transporte-en-panama');


					});


			});

		});

		describe('when there is no data', () => {


			it('returns an empty arrays if there are no threads', () => {


				return request(app).get('/threads')


					.expect('Content-type', /json/)

					.expect(200)

					.then(response => {

						const {
							body
						} = response;


						expect(body.data).to.have.length(0);



					});


			});

		});


	});


	describe('when calling POST /', () => {


	})



})