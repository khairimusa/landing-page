import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/default/ui/avatar';

export default function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
