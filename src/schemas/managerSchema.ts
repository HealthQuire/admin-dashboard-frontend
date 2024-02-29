import * as yup from "yup";

export const managerSchema = yup.object({
    medCentreId: yup.number().typeError("wrong med centre id"),
    email: yup.string().typeError("wrong email"),
    password: yup.string().typeError("wrong password"),
    role: yup.mixed().oneOf(["1", "2", "3"]).typeError("wrong role (should be one of 1, 2, 3)"),
    phone: yup.string().typeError("wrong phone"),
    status: yup.string().typeError("wrong status"),
    firstName: yup.string().typeError("wrong first name"),
    lastName: yup.string().typeError("wrong last name"),
    fatherName: yup.string().typeError("wrong father name")
});