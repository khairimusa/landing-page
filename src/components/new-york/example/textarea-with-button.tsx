import { Button } from '@/components/new-york/ui/button';
import { Textarea } from '@/components/new-york/ui/textarea';

export default function TextareaWithButton() {
  return (
    <div className="grid w-full gap-2">
      <Textarea placeholder="Type your message here." />
      <Button>Send message</Button>
    </div>
  );
}
