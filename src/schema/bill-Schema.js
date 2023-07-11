import Joi from 'joi';
// import Bill from '../models/Bill';

  export const billSchema = Joi.object({
  amount: Joi.number().required(),
  type: Joi.string().required(),
  dueDate: Joi.date(), //.required(),
  user: Joi.string().required(),
});


 export const billUpdateSchema = Joi.object({
  amount: Joi.number().required(),
  type: Joi.string().required(),
  dueDate: Joi.date(), //.required(),
})
// 
// export default billSchema 