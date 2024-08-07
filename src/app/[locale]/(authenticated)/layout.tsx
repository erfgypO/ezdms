import { isAuthenticated } from "@/lib/server/auth";
import { redirect } from "next/navigation";
import AuthenticatedNavbar from "@/components/layout/authenticated-navbar";

export default async function Layout({
  children,
}: {
  children?: React.ReactNode;
}) {
  if (!(await isAuthenticated())) redirect("/api/auth/login");

  return (
    <>
      <AuthenticatedNavbar />
      <div className={"container max-w-screen-xl mx-auto"}>{children}</div>
    </>
  );
}
