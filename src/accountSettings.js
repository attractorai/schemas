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

    changingPassword: Yup.boolean(),

    oldPassword: Yup.string()
        .when('changingPassword', {
            is: true,
            then: yup.string()
                .trim()
                .min(6, 'Your password is too short.')
                .max(64, 'Your password is too long.')
                .required('Required'),
        }),

    newPassword: Yup.string()
        .when('changingPassword', {
            is: true,
            then: yup.string()
                .trim()
                .min(6, 'Your password is too short.')
                .max(64, 'Your password is too long.')
                .required('Required'),
        }),
})
