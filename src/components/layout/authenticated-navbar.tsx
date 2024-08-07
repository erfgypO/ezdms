import Link from "next/link";
import {UserMenu} from "@/components/layout/user-menu";
import {getTranslations} from "next-intl/server";

export default function AuthenticatedNavbar() {
    return <nav className={"w-full border-b h-[60px]"}>
        <div className="items-center container max-w-screen-xl mx-auto h-full">
            <div className="flex items-center justify-between h-full">
                <Link href="/">
                    <h1 className="text-3xl font-bold text-primary">ezdms</h1>
                </Link>
                <div className={"flex flex-row"}>
                    <UserMenu />
                </div>
            </div>
        </div>
    </nav>
}
