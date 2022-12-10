const Order = require("../models/Order");
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../index");
chai.should();
 
chai.use(chaiHttp);
 
describe("Orders", () => {
  beforeEach((done) => {
    Order.deleteMany({}, (err) => {
      done();
    });
  });
  describe("/GET Orders", () => {
    it("it should GET all orders", (done) => {
      chai
        .request(app)
        .get("/api/orders")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.data.should.be.a("array");
          res.body.data.length.should.be.eql(0);
          done();
        });
    });
  });
  describe("/POST order", () => {
    it("it should POST an order", (done) => {
      let order = {
        name: "meonly",
        email: "me@me.com",
        message: "This my bid to this car",
        bid:"$40000"
        //   "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      };
      chai
        .request(app)
        .post("/api/orders")
        .send(order)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.data.should.be.a("object");
          res.body.status.should.be.eql("success");
          done();
        });
    });
  });
  describe("/GET/:id order", () => {
    it("it should GET an order by the id", (done) => {
      let order = new Order({
        name: "meonly",
        email: "me@me.com",
        message: "This my bid to this car",
        bid:"$40000"
     
    });
      order.save((err, order) => {
        chai
          .request(app)
          .get("/api/orders/" + order.id)
          .send(order)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.data.should.be.a("object");
            res.body.status.should.be.eql("success");
            done();
          });
      });
    });
  });
  describe("/PUT/:id order", () => {
    it("it should UPDATE a order given the id", (done) => {
      let order = new Order({
        name: "meonly",
        email: "me@me.com",
        message: "This my bid to this car",
        bid:"$60000"
    
    });
      order.save((err, order) => {
        console.log(order.id);
        chai
          .request(app)
          .put("/api/orders/" + order.id)
          .send({
            name: "meonly",
            email: "me@me.com",
            message: "This my updated bid to this car",
            bid:"$140000"
           })
          .end((err, res) => {
            res.should.have.status(200);
            res.body.data.should.be.a("object");
            res.body.status.should.be.eql("success");
            done();
          });
      });
    });
  });
  describe("/DELETE/:id order", () => {
    it("it should DELETE a order given the id", (done) => {
      let order = new order({
        name: "meonly",
        email: "me@me.com",
        message: "This my bid to this car",
        bid:"$40000"
        });
      order.save((err, order) => {
        chai
          .request(app)
          .delete("/api/orders/" + order.id)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.data.should.be.a("object");
            res.body.status.should.be.eql("success");
            done();
          });
      });
    });
  });
});