import * as yup from "yup";

export const doctorSchema = yup.object({
    medCentreId: yup.number().typeError("wrong med centre id"),
    email: yup.string().typeError("wrong email"),
    password: yup.string().typeError("wrong password"),
    phone: yup.string().typeError("wrong phone"),
    status: yup.string().typeError("wrong status"),
    firstName: yup.string().typeError("wrong first name"),
    lastName: yup.string().typeError("wrong last name"),
    fatherName: yup.string().typeError("wrong father name"),
    age: yup.number().typeError("wrong age"),
    yearStarted: yup.number().typeError("wrong year"),
    medService: yup.string().typeError("wrong med service"),
    description: yup.string().typeError("wrong med description"),
});