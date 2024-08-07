import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
import createMiddleware from "next-intl/middleware";

// Can be imported from a shared config
const locales = ['en'];

export default getRequestConfig(async ({locale}) => {
    // Validate that the incoming `locale` parameter is valid
    if (!locales.includes(locale as any)) notFound();

    return {
        messages: (await import(`../messages/${locale}.json`)).default
    };
});

export const i18nMiddleware = createMiddleware({
    // A list of all locales that are supported
    locales: locales,

    // Used when no locale matches
    defaultLocale: 'en',
});
