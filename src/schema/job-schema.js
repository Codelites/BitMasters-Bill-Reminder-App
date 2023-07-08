import joi from "joi";

export const jobSchema = joi.object({

    
        bill: Joi.string().required(),
        runDate: Joi.date().iso(), //.required(),
        runImmediately: Joi.boolean().required(),
      

})