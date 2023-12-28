import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/default/ui/avatar';
import { Button } from '@/components/default/ui/button';
import Link from 'next/link';

export function UserNav() {
  return (
    <Link href={'/'}>
      <Button
        variant="ghost"
        className="relative h-8 w-8 rounded-full hover:scale-125"
      >
        <Avatar className="h-8 w-8">
          <AvatarImage alt="avatar" />
          <AvatarFallback>KM</AvatarFallback>
        </Avatar>
      </Button>
    </Link>
  );
}
