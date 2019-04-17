const Yup = require('yup');

module.exports = Yup.object().shape({
    hash: Yup.string()
        .trim()
        .required('Required'),
    password: Yup.string()
        .trim()
        .min(6, 'Too Short!')
        .max(64, 'Too Long!')
        .required('Required'),
    repassword: Yup.string()
        .trim()
        .min(6, 'Too Short!')
        .max(64, 'Too Long!')
        .oneOf([Yup.ref('password'), null], 'Passwords must match!')
        .required('Required'),
})
