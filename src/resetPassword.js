const Yup = require('yup');

module.exports = Yup.object().shape({
    password: Yup.string()
        .trim()
        .min(6, 'Too Short!')
        .max(64, 'Too Long!')
        .required('Required'),
})
