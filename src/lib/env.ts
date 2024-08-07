import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
    server: {
        KINDE_CLIENT_ID: z.string(),
        KINDE_CLIENT_SECRET: z.string(),
        KINDE_ISSUER_URL: z.string().url(),
        KINDE_SITE_URL: z.string().url(),
        KINDE_POST_LOGOUT_REDIRECT_URL: z.string().url(),
        KINDE_POST_LOGIN_REDIRECT_URL: z.string().url(),
        CONNECTION_STRING: z.string().url(),
    },
    client: {},
    runtimeEnv: {
        CONNECTION_STRING: process.env.CONNECTION_STRING,
        KINDE_CLIENT_ID: process.env.KINDE_CLIENT_ID,
        KINDE_CLIENT_SECRET: process.env.KINDE_CLIENT_SECRET,
        KINDE_ISSUER_URL: process.env.KINDE_ISSUER_URL,
        KINDE_SITE_URL: process.env.KINDE_SITE_URL,
        KINDE_POST_LOGOUT_REDIRECT_URL: process.env.KINDE_POST_LOGOUT_REDIRECT_URL,
        KINDE_POST_LOGIN_REDIRECT_URL: process.env.KINDE_POST_LOGIN_REDIRECT_URL,
    }
})
