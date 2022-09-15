const yup = require('yup');

const schema = yup.object({
    userName: yup.string()
        .required('User Name Is A Required Field ... '),
    email: yup.string()
        .email()
        .required('Email Is A Required Field ...'),
    password: yup.string()
        .required('Password Is A Required Field ... ')
        .min(8)
});

module.exports = schema;