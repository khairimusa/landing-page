import { MainNav } from './MainNav';
import { ModeToggle } from '@/components/default/ui/toggle-mode';
import { UserNav } from './UserNav';

export default function Header() {
  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4">
        <UserNav />
        <MainNav className="mx-6" />
        <div className="ml-auto flex items-center space-x-4">
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
