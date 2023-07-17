import joi from "joi";

export const addProduct = joi.object({
    name: joi.string().required(),
    price: joi.number().required(),
    categoryId: joi.string().required()
})
