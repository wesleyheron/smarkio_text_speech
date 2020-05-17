const model = require('../models/index');

exports.get = async () => {
    const comments = await model.Comment.findAll();
    return comments;
};

exports.getById = async (id) => {
    const comment = await model.Comment.findByPk(id);
    return comment;
};

exports.post = async(data) => {
    const comment = await model.Comment.create(data);
    return comment;
};

exports.put = async(data) => {
    const comment = await model.Comment.update(data);
};