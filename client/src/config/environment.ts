export const ENV = {
    LOCAL: 'development',
    STAGING: 'staging',
}

export const isLocal = () => process.env.SMTM_ENV === ENV.LOCAL

export const isStaging = () => process.env.SMTM_ENV === ENV.STAGING
