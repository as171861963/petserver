const servicesDao = require("../dao/servicesDao");

const getService = async () => await servicesDao.getService();

const addService = async (addData) => await servicesDao.addService(addData);

const deleteService = async ({ _id }) => await servicesDao.deleteService({ _id });

const updateService = async ({ _id }, service) => await servicesDao.updateService({ _id }, service);

module.exports = {
    getService,
    addService,
    deleteService,
    updateService
}