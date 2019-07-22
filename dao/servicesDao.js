const serviceModel=require("mongoose").model("service");

const getServiceByManagerId =async (managerId) =>await serviceModel.find({managerId}).populate("managerId").populate("shopId");

const addService =async (addData) =>await serviceModel.create(addData);

const deleteService =async ({_id}) =>await serviceModel.remove({_id});

const updateService =async ({ _id }, service) =>await serviceModel.update({ _id }, service);

module.exports={
    getServiceByManagerId,
    addService,
    deleteService,
    updateService
}