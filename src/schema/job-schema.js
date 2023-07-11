import Joi from "joi";

 const jobSchema = Joi.object({

    bill: Joi.string().required(),
    runDate: Joi.date().iso(), //.required(),
    runImmediately: Joi.boolean().required(),
      

})

export default jobSchema