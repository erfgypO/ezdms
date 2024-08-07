import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import {cache} from "react";

export async function isAuthenticated() {
    const { getUser } = getKindeServerSession();

    const user = await getUser();

    return !!user;
}

export const getUser = cache(async () => {
    const { getUser } = getKindeServerSession();

    const user = await getUser();
    if(!user) throw new Error("User not found");

    return user;
})
