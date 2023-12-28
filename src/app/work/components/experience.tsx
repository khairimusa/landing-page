'use client';
import * as React from 'react';
import { ExperienceList } from '@/app/work/components/experience-list';
import { Separator } from '@/components/new-york/ui/separator';
import { TooltipProvider } from '@/components/new-york/ui/tooltip';
import { experiences } from '../data';

type Experience = (typeof experiences)[number];

interface ExperienceProps {
  experiences: Experience[];
}

export function Experience({ experiences }: ExperienceProps) {
  return (
    <TooltipProvider delayDuration={0}>
      <div className="">
        <div className="flex items-center px-4 py-2">
          <h1 className="text-xl font-bold">Experience</h1>
        </div>
        <Separator />
        <ExperienceList items={experiences} />
      </div>
    </TooltipProvider>
  );
}
