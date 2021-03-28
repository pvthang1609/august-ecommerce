import * as Yup from "yup";

export const SigninSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email không hợp lệ..!")
    .required("Vui lòng nhập email."),
  password: Yup.string()
    .min(8, "Password không hợp lệ.")
    .required("Vui lòng nhập password."),
});

export const RatingSchema = Yup.object().shape({
  id_product: Yup.string(),
  star: Yup.number()
    .min(1, "Invalid!")
    .max(5, "Invalid!")
    .required("Vui lòng đánh giá số sao!"),
  comment: Yup.string().required("Vui lòng nhập nội dung!"),
});
