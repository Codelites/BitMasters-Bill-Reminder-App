import Joi from 'joi';
// import Bill from '../models/Bill';

const billSchema = Joi.object({
  amount: Joi.number().required(),
  type: Joi.string().required(),
  dueDate: Joi.date().required(),
  userId: Joi.string().required(),
});