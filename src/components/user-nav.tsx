import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function UserNav() {
  return (
    <Link href={"/"}>
      <Button variant="ghost" className="relative h-8 w-8 rounded-full">
        <Avatar className="h-8 w-8">
          <AvatarImage src="/avatars/01.png" alt="avatar" />
          <AvatarFallback>KM</AvatarFallback>
        </Avatar>
      </Button>
    </Link>
  );
}
