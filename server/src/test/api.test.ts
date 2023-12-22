import chai from "chai";
import chaiHttp from "chai-http";
import app from "../app";
import Item from "../models/Item";
import mongoose from "mongoose";
import { afterEach } from "node:test";

const expect = chai.expect;

chai.use(chaiHttp);

describe("API Tests", () => {
  beforeEach(async () => {
    mongoose.connection.collections.items.drop();

    await chai
      .request(app)
      .post("/items")
      .send({ name: "Test Item", quantity: 2 });
  });

  afterEach(async () => {
    await chai.request(app).delete("/items");
  });

  it("should add a new item", async () => {
    const res = await chai
      .request(app)
      .post("/items")
      .send({ name: "New Item", quantity: 6 });
    expect(res).to.have.status(201);
    expect(res.body).to.have.property("name", "New Item");
    expect(res.body).to.have.property("quantity", 6);

    await chai.request(app).delete(`/items/${res.body._id}`);
  });

  it("should get all items", async () => {
    const res = await chai.request(app).get("/items");
    expect(res).to.have.status(200);
    expect(res.body).to.be.an("array");
    expect(res.body.length).to.be.greaterThan(0);
  });

  it("should delete an item", async () => {
    const res = await chai
      .request(app)
      .post("/items")
      .send({ name: "New Item for deletion", quantity: 2 });

    const response = await chai.request(app).delete(`/items/${res.body._id}`);
    expect(response).to.have.status(200);
    expect(response.body).to.have.property(
      "message",
      "Item deleted successfully."
    );
  });

  it("should return a 404 status if item is not found", async () => {
    // Assume you have a non-existing item ID
    const nonExistingItemId = "60f76a5bbf45554c84106586";

    const response = await chai
      .request(app)
      .delete(`/items/${nonExistingItemId}`);

    expect(response).to.have.status(404);
    expect(response.body).to.have.property("error", "Item not found.");
  });

  it("should handle internal server error", async () => {
    // Assume an invalid item ID to trigger an internal server error
    const invalidItemId = "invalid-item-id";

    const response = await chai.request(app).delete(`/items/${invalidItemId}`);
    expect(response).to.have.status(500);
    expect(response.body).to.have.property("error", "Internal server error.");
  });
});
