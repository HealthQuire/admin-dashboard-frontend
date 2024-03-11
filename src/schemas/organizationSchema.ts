import * as yup from "yup";

export const organizationSchema = yup.object({
    ownerId: yup.string().typeError("wrong owner id"),
    name: yup.string().typeError("wrong name"),
    status: yup.string().typeError("wrong status")
});