const OrderModel = require("../models/order");
 
exports.getAllorders = async () => {
  return await OrderModel.find();
};
 
exports.createorder = async (order) => {
  return await OrderModel.create(order);
};
exports.getorderById = async (id) => {
  return await OrderModel.findById(id);
};
 
exports.updateorder = async (id, order) => {
  return await OrderModel.findByIdAndUpdate(id, order);
};
 
exports.deleteorder = async (id) => {
  return await OrderModel.findByIdAndDelete(id);
};