const serviceModel=require("mongoose").model("service");

const getService =async () =>await serviceModel.find();

const addService =async (addData) =>await serviceModel.create(addData);

const deleteService =async ({_id}) =>await serviceModel.remove({_id});

const updateService =async ({ _id }, service) =>await serviceModel.update({ _id }, service);



module.exports={
    getService,
    addService,
    deleteService,
    updateService
}