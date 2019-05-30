const Yup = require('yup');

module.exports = Yup.object().shape({
    productName: Yup.string()
        .trim()
        .min(1, 'Too Short!')
        .max(512, 'Too Long!')
        .required('Required'),

    productLink: Yup.string()
        .trim()
        .min(2, 'Too Short!'),

    integrationProvider: Yup.string()
        .oneOf([
            'none',
            'mixpanel',
            'amplitude',
            'mparticle',
            'segment',
        ])
        .required('Required'),

    mixpanelSecret: Yup.string()
        .when('integrationProvider', {
            is: 'mixpanel',
            then: Yup.string()
                .trim()
                .min(31, 'Too short.')
                .max(33, 'Too long.')
                .required('Required'),
        }),

    amplitudeApiKey: Yup.string()
        .when('integrationProvider', {
            is: 'amplitude',
            then: Yup.string()
                .trim()
                .min(31, 'Too short.')
                .max(33, 'Too long.')
                .required('Required'),
        }),

    amplitudeApiSecret: Yup.string()
        .when('integrationProvider', {
            is: 'amplitude',
            then: Yup.string()
                .trim()
                .min(31, 'Too short.')
                .max(33, 'Too long.')
                .required('Required'),
        }),
})
