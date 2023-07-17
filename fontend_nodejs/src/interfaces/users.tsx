import * as Yup from 'yup';

export const SigninSchema = Yup.object({
    email: Yup.string().email("Email sai định dạng").required("Trường dữ liệu là bắt buộc "),
    password: Yup.string().min(6).required("Trường sữa liệu là bắt buộc"),

})
export type SigninForm = Yup.InferType<typeof SigninSchema>

export const SingupSchema = Yup.object({
    name: Yup.string().required("Trường dữ liệu là bắt buộc."),
    email: Yup.string().email("Email sai địng dạng").required("Trường dữ liệu là bắt buộc"),
    password: Yup.string().min(6).required("Trường dữ liệu là bắt buộc"),
    confirmPassword: Yup.string().oneOf([Yup.ref('password')], "Mật khẩu không khớp."),
})
export type SignupForm = Yup.InferType<typeof SingupSchema>