import {
  LinkedInLogoIcon,
  GitHubLogoIcon,
  StackIcon,
} from '@radix-ui/react-icons';

export default function Footer() {
  let currentDate = new Date().getFullYear();

  return (
    <footer className="absolute left-0 right-0 bottom-0 flex flex-row justify-between items-center text-sm text-gray-500 h-16 border-t text-center px-4">
      <p>©{currentDate} Mohammad Khairi.</p>
      <div className="flex gap-4">
        <a
          className="hover:scale-125"
          target="_blank"
          href="https://github.com/khairimusa"
          rel="noreferrer noopener"
          aria-label="GitHub"
        >
          <GitHubLogoIcon height={24} width={24} />
        </a>
        <a
          className="hover:scale-125"
          target="_blank"
          href="https://www.linkedin.com/in/khairimusa/"
          rel="noreferrer noopener"
          aria-label="LinkedIn"
        >
          <LinkedInLogoIcon height={24} width={24} />
        </a>
        <a
          className="hover:scale-125"
          target="_blank"
          href="https://stackoverflow.com/users/7228601/khairi"
          rel="noreferrer noopener"
          aria-label="Stack Overflow"
        >
          <StackIcon height={24} width={24} />
        </a>
      </div>
    </footer>
  );
}
