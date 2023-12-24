import Container from '@/components/Container';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/default/ui/avatar';
import { Image } from '@radix-ui/react-avatar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  description: 'Example dashboard app built using the components.',
};

export default function Page() {
  return (
    <Container>
      <div className="min-h-[80vh] flex flex-col md:flex-row gap-8 items-center justify-between px-4 py-20">
        <div className="w-1/4 flex justify-center items-center">
          <div className="flex flex-col items-center gap-4">
            <Avatar className="h-44 w-44 border">
              <AvatarImage
                src="https://raw.githubusercontent.com/khairimusa/landing-page/main/public/profile-removed.png"
                alt="avatar"
              />
              <AvatarFallback>KM</AvatarFallback>
            </Avatar>
          </div>
        </div>
        <div className="w-3/4">
          <h2 className="mt-10 scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            Hi, Im Khairi
          </h2>
          <p className="leading-7 mt-6 text-lg">
            Software Developer based in Kuala Lumpur, Malaysia. Currently, i
            work for Capital A . My main focus now is building new features for
            ikhlas.com for both Web and Mobile Application .
          </p>
          <p className="leading-7 mt-6 text-lg">
            Previously had worked with multiple projects. From small/medium to
            large scale enterprise level applications. I enjoy writting front
            end with React + Next.js and TailwindCSS.
          </p>
        </div>
      </div>
    </Container>
  );
}
