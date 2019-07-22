const serviceModel=require("mongoose").model("service");

const getServiceByManagerId = async (managerId) =>await serviceModel.find({managerId}).populate("managerId").populate("shopId").sort({_id:-1});

const addService = async (addData) =>await serviceModel.create(addData);

const deleteService = async ({_id}) =>await serviceModel.remove({_id});

const updateService = async (newService) =>await serviceModel.update({ _id:newService._id }, newService);

module.exports={
    getServiceByManagerId,
    addService,
    deleteService,
    updateService
}