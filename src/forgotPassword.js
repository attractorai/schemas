const Yup = require('yup');

module.exports = Yup.object().shape({
    email: Yup.string()
        .trim()
        .lowercase()
        .email('Invalid email')
        .required('Required'),
})
