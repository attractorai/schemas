const Yup = require('yup');

module.exports = Yup.object().shape({
    name: Yup.string()
        .trim()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    company: Yup.string()
        .trim()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string()
        .trim()
        .lowercase()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string()
        .trim()
        .min(6, 'Too Short!')
        .max(64, 'Too Long!')
        .required('Required'),
})
