const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
const orderSchema = new Schema({
  name: String,
  email: String,
  message: String,
  bid:Number,
  sentAt: {
    type: Date,
    default: Date.now,
  },
});
 
module.exports = mongoose.model("Order", orderSchema);