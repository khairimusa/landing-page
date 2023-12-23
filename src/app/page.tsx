import Container from '@/components/Container';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/default/ui/avatar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  description: 'Example dashboard app built using the components.',
};

export default function Page() {
  return (
    <Container>
      <div className="border-b flex flex-row md:flex-col gap-8 items-center justify-between  p-4">
        <div className=" w-1/4 flex justify-center items-center">
          <Avatar className="h-32 w-32">
            <AvatarImage src="/avatars/01.png" alt="avatar" />
            <AvatarFallback>KM</AvatarFallback>
          </Avatar>
        </div>
        <div className="w-3/4">
          <h2 className="mt-10 scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            Hi, Im Khairi
          </h2>
          <p className="leading-7 mt-6 text-lg">
            I'm a Software Developer based in Kuala Lumpur, Malaysia. Currently,
            i work for Capital A . My main focus now is building new features
            for ikhlas.com for both Web and Mobile Application .
          </p>
        </div>
      </div>
    </Container>
  );
}
