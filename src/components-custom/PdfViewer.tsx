'use client';
import { Button } from '@/components/default/ui/button';
import { FileText } from 'lucide-react';
import { Drawer } from 'vaul';

export default function PdfViewer() {
  return (
    <Drawer.Root shouldScaleBackground>
      <Drawer.Trigger asChild>
        <Button variant="outline">
          Résumé
          <FileText className="ml-2 h-4 w-4" />
        </Button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="bg-gray-100 flex flex-col rounded-t-[10px] h-full mt-24 fixed max-h-[85%] bottom-0 left-0 right-0">
          <div className="bg-white dark:bg-slate-900 rounded-t-[10px] py-4">
            <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-gray-300 mb-8" />
            <div className="absolute w-full h-full overflow-hidden">
              <iframe
                src="https://firebasestorage.googleapis.com/v0/b/kai-portfolio-7c5c4.appspot.com/o/Khairi-Resume-2024.pdf?alt=media&token=b3b15ecf-47cc-48d7-96bd-9dbbc9b18c41"
                className="relative top-0 left-0 bottom-0 right-0 w-full h-full border-none overflow-hidden"
              ></iframe>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
