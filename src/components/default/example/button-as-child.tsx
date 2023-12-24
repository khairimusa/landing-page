import Link from 'next/link';

import { Button } from '@/components/default/ui/button';

export default function ButtonAsChild() {
  return (
    <Button asChild>
      <Link href="/login">Login</Link>
    </Button>
  );
}
