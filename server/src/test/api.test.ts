import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

const expect = chai.expect;

chai.use(chaiHttp);

describe('API Tests', () => {
  beforeEach(async () => {
    await chai.request(app).post('/items').send({ name: 'Test Item', quantity: 2 });
  });

  afterEach(async () => {
    await chai.request(app).delete('/items');
  });

  it('should get all items', async () => {
    const res = await chai.request(app).get('/items');
    expect(res).to.have.status(200);
    expect(res.body).to.be.an('array');
    expect(res.body.length).to.be.greaterThan(0);
  });

  it('should add a new item', async () => {
    const res = await chai.request(app).post('/items').send({ name: 'New Item', quantity: 6 });
    expect(res).to.have.status(201);
    expect(res.body).to.have.property('name', 'New Item');
    expect(res.body).to.have.property('quantity', 6);
  });
});