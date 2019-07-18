const evaluateModel = require("mongoose").model("evaluates");

const getEvaluates = async () => await evaluateModel.find();

const addEvaluate = async (evaluate) => await evaluateModel.create(evaluate);

const deleteEvaluate = async (_id) => await evaluateModel.remove({_id});


module.exports = {
    getEvaluates, addEvaluate, deleteEvaluate, 
};