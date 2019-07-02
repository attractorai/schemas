const Yup = require('yup');

module.exports = Yup.object().shape({
    researchName: Yup.string()
        .trim()
        .min(1, 'Too short')
        .max(512, 'Too long')
        .required('Required'),

    dateStart: Yup.date()
        .required('Required'),

    dateFinish: Yup.date()
        .required('Required'),

    eventStart: Yup.string()
        .required('Required'),

    eventFinish: Yup.string()
        .required('Required'),
})
