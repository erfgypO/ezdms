import {i18nMiddleware} from "./i18n"

export default i18nMiddleware;

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)", '/', '/(de|en)/:path*'],
};
