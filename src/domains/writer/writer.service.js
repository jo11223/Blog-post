const Writer = require("./writer.model");

const createWriter = async (data) => {
  const writer = new Writer(data);
  return await writer.save();
};

const getWriters = async () => {
  return await Writer.find();
};

const getWriterById = async (id) => {
  return await Writer.findById(id);
};

const updateWriter = async (id, data) => {
  return await Writer.findByIdAndUpdate(id, data, { new: true });
};

const deleteWriter = async (id) => {
  return await Writer.findByIdAndDelete(id);
};

module.exports = {
  createWriter,
  getWriters,
  getWriterById,
  updateWriter,
  deleteWriter
};
