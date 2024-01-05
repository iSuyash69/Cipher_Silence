import * as Yup from "yup";

export const validationSchema=Yup.object({
    title:Yup.string().required('This is a required field'),
    price: Yup.string().required('This is a required field'),
    description:Yup.string().required('This is a required field'),
    country:Yup.string().required('This is a required field'),
    location:Yup.string().required('This is a required field'),
    img_url:Yup.string().required('This is a required field'),
});