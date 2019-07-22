const petsDao = require("../dao/petsDao.js");


const getPets = async data => await petsDao.getPets(data)

const searchPet = async data => await petsDao.searchPet(data)

const addPet = async data => await petsDao.addPet(data)

const updatePet = async data => await petsDao.updatePet(data)

const deletePet = async data => await petsDao.deletePet(data)


module.exports={
    addPet,
    getPets,
    updatePet,
    deletePet,
    searchPet
}