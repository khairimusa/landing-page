'use client';
import Container from '@/components/Container';
import { Button } from '@/components/default/ui/button';
import { FileText } from 'lucide-react';
import { Drawer } from 'vaul';

export default function About() {
  return (
    <Container>
      <div className="flex min-h-[80vh] justify-center items-center">
        <Drawer.Root shouldScaleBackground>
          <Drawer.Trigger asChild>
            <Button variant="outline">
              Résumé
              <FileText className="ml-2 h-4 w-4" />
            </Button>
          </Drawer.Trigger>
          <Drawer.Portal>
            <Drawer.Overlay className="fixed inset-0 bg-black/40" />
            <Drawer.Content className="bg-gray-100 flex flex-col rounded-t-[10px] h-3/4 mt-24 max-h-[96%] fixed bottom-0 left-0 right-0">
              <div className="p-4 bg-white dark:bg-slate-900 rounded-t-[10px] flex-1">
                <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-gray-300 mb-8" />
                <div className="max-w-md mx-auto">
                  <Drawer.Title className="font-medium mb-4">
                    Resume
                  </Drawer.Title>
                </div>
              </div>
            </Drawer.Content>
          </Drawer.Portal>
        </Drawer.Root>
      </div>
    </Container>
  );
}
