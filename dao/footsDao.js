const footsModel = require("mongoose").model("foots")

const getFoots = async data => await footsModel.find({ managerId: data.managerId }).sort({ [data.key]: 1 })

const searchFoot = async data => await footsModel.find(data).sort({ _id: -1 })

const addFoot = async data => await footsModel.create(data)

const updateFoot = async data => await footsModel.update({ _id: data._id }, data)

const deleteFoot = async data => await footsModel.remove({ _id: data._id })


module.exports = {
    addFoot,
    getFoots,
    updateFoot,
    deleteFoot,
    searchFoot
}