'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathName = usePathname();

  return (
    <nav
      className={cn('flex items-center space-x-4 lg:space-x-6', className)}
      {...props}
    >
      <LinkItem href="/about" currentRoute={pathName} name="about" />
      <LinkItem href="/projects" currentRoute={pathName} name="projects" />
      <LinkItem href="/work" currentRoute={pathName} name="work" />
    </nav>
  );
}

function LinkItem(props: any) {
  const { name, currentRoute, href } = props;
  return (
    <Link
      href={href}
      className={cn(
        'text-sm font-medium text-muted-foreground transition-colors hover:text-primary hover:scale-125',
        currentRoute == href ? 'text-primary' : '',
      )}
    >
      {name}
    </Link>
  );
}
