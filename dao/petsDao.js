const petsModel = require("mongoose").model("pets")

const getPets = async data => await petsModel.find({ managerId: data.managerId }).sort({ [data.key]: 1 })

const searchPet = async data => await petsModel.find(data).sort({ _id: -1 })

const addPet = async data => await petsModel.create(data)

const updatePet = async data => await petsModel.update({ _id: data._id }, data)

const deletePet = async data => await petsModel.remove({ _id: data._id })


module.exports = {
    addPet,
    getPets,
    updatePet,
    deletePet,
    searchPet
}