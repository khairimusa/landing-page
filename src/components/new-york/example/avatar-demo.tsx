import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/new-york/ui/avatar';

export default function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
