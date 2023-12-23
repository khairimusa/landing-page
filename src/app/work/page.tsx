import { Mail } from '@/app/work/components/mail';
import { mails } from '@/app/work/data';

export default function MailPage() {
  return (
    <>
      <div className="flex-col md:flex">
        <Mail mails={mails} />
      </div>
    </>
  );
}
