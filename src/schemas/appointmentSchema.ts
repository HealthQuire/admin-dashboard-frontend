import * as yup from "yup";

export const appointmentSchema = yup.object({
    timeCellId: yup.number().typeError("wrong time cell id"),
    description: yup.string().typeError("wrong description")
});