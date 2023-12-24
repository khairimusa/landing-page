'use client';

import { Button } from '@/components/new-york/ui/button';
import { ToastAction } from '@/components/new-york/ui/toast';
import { useToast } from '@/components/new-york/ui/use-toast';

export default function ToastDemo() {
  const { toast } = useToast();

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          title: 'Scheduled: Catch up ',
          description: 'Friday, February 10, 2023 at 5:57 PM',
          action: (
            <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
          ),
        });
      }}
    >
      Add to calendar
    </Button>
  );
}
