const serviceDao = require("../dao/model/service/serviceDao");
const getService = async () => {
    return await serviceDao.getService();
}
const addService = async (addData) => {
    return await serviceDao.addService(addData);
}
const deleteService = async ({ _id }) => {
    return await serviceDao.deleteService({ _id });
}
const updateService = async ({ _id }, service) => await serviceDao.updateService({ _id }, service);

module.exports = {
    getService,
    addService,
    deleteService,
    updateService
}