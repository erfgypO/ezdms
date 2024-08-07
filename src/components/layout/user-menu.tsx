import {getUser} from "@/lib/server/auth";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {UserIcon} from "lucide-react";
import {getTranslations} from "next-intl/server";

export async function UserMenu() {
    const t = await getTranslations("Components.NavBar")
    const user = await getUser();

    return <DropdownMenu>
        <DropdownMenuTrigger>
            <Avatar>
                <AvatarFallback>
                    <UserIcon />
                </AvatarFallback>
                { user.picture && <AvatarImage className={"rounded-full"} src={user.picture!} /> }
            </Avatar>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
        <DropdownMenuLabel>
            { user.given_name } { user.family_name}
    </DropdownMenuLabel>
        <DropdownMenuItem>
            <Link href="/settings">
                { t("UserMenu.Settings") }
            </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
    <Link href="/api/auth/logout">
        { t("UserMenu.SignOut") }
    </Link>
    </DropdownMenuItem>
    </DropdownMenuContent>
    </DropdownMenu>
}
