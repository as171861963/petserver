const evaluateDao = require("../dao/evaluateDao.js")

const getEvaluates = async () => await evaluateDao.getEvaluates();

const addEvaluate = async (evaluate) => await evaluateDao.addEvaluate(evaluate);

const deleteEvaluate = async (_id) => await evaluateDao.deleteEvaluate(_id);


module.exports = {
    getEvaluates, addEvaluate, deleteEvaluate, 
};