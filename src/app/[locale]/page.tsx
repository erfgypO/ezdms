import Image from "next/image";
import {Button} from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
      <div className={"w-screen h-screen flex"}>
        <Link href={"/api/auth/login"} className={"m-auto"}>
          <Button>Sign in</Button>
        </Link>
      </div>
  );
}
