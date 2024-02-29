import * as yup from "yup";

export const clientSchema = yup.object({
    email: yup.string().typeError("wrong email"),
    password: yup.string().typeError("wrong password"),
    phone: yup.string().typeError("wrong phone"),
    status: yup.string().typeError("wrong status"),
    firstName: yup.string().typeError("wrong first name"),
    lastName: yup.string().typeError("wrong last name"),
    fatherName: yup.string().typeError("wrong father name")
});