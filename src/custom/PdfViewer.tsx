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
        <Drawer.Content className="bg-gray-100 flex flex-col rounded-t-[10px] h-full mt-24 max-h-[96%] fixed bottom-0 left-0 right-0">
          <div className="p-4 bg-white dark:bg-slate-900 rounded-t-[10px] flex-1">
            <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-gray-300 mb-8" />
            <iframe
              src="https://firebasestorage.googleapis.com/v0/b/kai-portfolio-7c5c4.appspot.com/o/Mohammad%20Khairi%20Bin%20Musa%20CV%202023.pdf?alt=media&token=afe82669-e70a-4f1a-a539-1bad0b22792c"
              className="w-1/2 mx-auto h-full"
            ></iframe>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
