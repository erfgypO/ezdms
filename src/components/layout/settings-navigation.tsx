"use client"
import Link from "next/link";
import {cn} from "@/lib/utils";
import {buttonVariants} from "@/components/ui/button";
import {usePathname} from "next/navigation";
import {useTranslations} from "next-intl";

export function SettingsNavigation() {
    const pathname = usePathname();
    const t = useTranslations("Components.SettingsNavigation");

    const links = [
        {
            url: '/settings/account',
            name: 'Account'
        },
        {
            url: '/settings/storage-devices',
            name: 'StorageDevices'
        },
    ]

    return <div className={"border-r-2 flex flex-col px-1"}>
        {links.map((link, index) => <Link key={index} href={link.url} className={cn(
                buttonVariants({variant: "link", size: "sm"}),
                !pathname.endsWith(link.url) &&  "dark:text-white text-black dark:hover:text-white",
                "dark:hover:bg-muted justify-start mb-1"
            )}>
            {t(link.name)}
            </Link>
        )}
    </div>
}
