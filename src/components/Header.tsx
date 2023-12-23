import { MainNav } from './main-nav';
import { ModeToggle } from './default/ui/toggle-mode';
import { UserNav } from './user-nav';

export default function Header() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <UserNav />
        <MainNav className="mx-6" />
        <div className="ml-auto flex items-center space-x-4">
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
