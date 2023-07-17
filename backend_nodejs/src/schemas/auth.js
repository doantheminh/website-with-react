import joi from 'joi';
export const signupSchema = joi.object({
    name: joi.string().required().messages({
        "string.empty": "Tên không được để trống",
        "any.required": "Trường tên là bắt buộc"
    }),
    email: joi.string().email().required().messages({
        "string.empty": "Trường email không được để trống",
        "any.required": "Trường email là bắt buộc"

    }),
    password: joi.string().min(6).required().messages({
        "string.empty": "Trường mật khẩu không được để trống",
        "any.required": "Trường mật khẩu là bắt buộc",
        "string.min": "Mật khẩu phải có ít nhất 6 ký tự"
    }),
    confirmPassword: joi.string().valid(joi.ref("password")).required().messages({
        "string.empty": "Xác nhận mật khẩu không được để trống",
        "any.only": "Xác nhận mật khẩu không khớp",
        "any.required": "Trường xác nhận mật khẩu là bắt buộc",
    }),


})
export const signinSchema = joi.object({
    email: joi.string().email().required().messages({
        "string.empty": "Trường email không được để trống",
        "any.required": "Trường email là bắt buộc"

    }),
    password: joi.string().min(6).required().messages({
        "string.empty": "Trường mật khẩu không được để trống",
        "any.required": "Trường mật khẩu là bắt buộc",
        "string.min": "Mật khẩu phải có ít nhất 6 ký tự"
    }),



})


