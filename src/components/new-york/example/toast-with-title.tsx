'use client';

import { Button } from '@/components/new-york/ui/button';
import { useToast } from '@/components/new-york/ui/use-toast';

export default function ToastWithTitle() {
  const { toast } = useToast();

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          title: 'Uh oh! Something went wrong.',
          description: 'There was a problem with your request.',
        });
      }}
    >
      Show Toast
    </Button>
  );
}
