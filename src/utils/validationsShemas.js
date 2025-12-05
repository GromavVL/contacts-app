import * as yup from "yup";

export  const CONTACT_VALIDATION_SCHEMA = yup.object({
  fullName: yup.string().trim().min(3).max(64).required(),
  phoneNumber: yup
    .string()
    .trim()
    .length(13)
    .matches(/\+\d{12}/, "Phone number must be in format +XXXXXXXXXXXX")
    .required(),
});
