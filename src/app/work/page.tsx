import { Experience } from '@/app/work/components/experience';
import { experiences } from '@/app/work/data';

export default function MailPage() {
  return (
    <>
      <div className="flex-col md:flex">
        <Experience experiences={experiences} />
      </div>
    </>
  );
}
