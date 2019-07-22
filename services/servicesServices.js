const servicesDao = require("../dao/servicesDao");

const getServiceByManagerId = async (managerId) => await servicesDao.getServiceByManagerId(managerId);

const addService = async (addData) => await servicesDao.addService(addData);

const deleteService = async ({ _id }) => await servicesDao.deleteService({ _id });

const updateService = async ({ _id }, service) => await servicesDao.updateService({ _id }, service);

module.exports = {
    getServiceByManagerId,
    addService,
    deleteService,
    updateService
}