const footsDao = require("../dao/footsDao.js");


const getFoots = async data => await footsDao.getFoots(data)

const searchFoot = async data => await footsDao.searchFoot(data)

const addFoot = async data => await footsDao.addFoot(data)

const updateFoot = async data => await footsDao.updateFoot(data)

const deleteFoot = async data => await footsDao.deleteFoot(data)


module.exports={
    addFoot,
    getFoots,
    updateFoot,
    deleteFoot,
    searchFoot
}