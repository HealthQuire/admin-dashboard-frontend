import * as yup from "yup";

export const appointmentSchema = yup.object({
    timeCellId: yup.string().typeError("wrong time cell id"),
    description: yup.string().typeError("wrong description")
});