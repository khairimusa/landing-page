'use client';
import * as React from 'react';
import { MailList } from '@/app/work/components/mail-list';
import { Separator } from '@/components/new-york/ui/separator';
import { Tabs } from '@/components/new-york/ui/tabs';
import { TooltipProvider } from '@/components/new-york/ui/tooltip';
import { mails } from '../data';

type Mail = (typeof mails)[number];

interface MailProps {
  mails: Mail[];
}

export function Mail({ mails }: MailProps) {
  return (
    <TooltipProvider delayDuration={0}>
      <div className="">
        <div className="flex items-center px-4 py-2">
          <h1 className="text-xl font-bold">Experience</h1>
        </div>
        <Separator />
        <MailList items={mails} />
      </div>
    </TooltipProvider>
  );
}
