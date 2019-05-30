const Yup = require('yup');

module.exports = Yup.object().shape({
    productName: Yup.string()
        .trim()
        .min(1, 'Too Short!')
        .max(512, 'Too Long!')
        .required('Required'),

    productLink: Yup.string()
        .trim(),

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
                .min(32, 'Too short.')
                .max(32, 'Too long.')
                .required('Required'),
        }),

    amplitudeApiKey: Yup.string()
        .when('integrationProvider', {
            is: 'amplitude',
            then: Yup.string()
                .trim()
                .min(32, 'Too short.')
                .max(32, 'Too long.')
                .required('Required'),
        }),

    amplitudeApiSecret: Yup.string()
        .when('integrationProvider', {
            is: 'amplitude',
            then: Yup.string()
                .trim()
                .min(32, 'Too short.')
                .max(32, 'Too long.')
                .required('Required'),
        }),
})
