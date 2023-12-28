import { atom, useAtom } from 'jotai';

import { ExperienceType, experiences } from '@/app/work/data';

type Config = {
  selected: ExperienceType['id'] | null;
};

const configAtom = atom<Config>({
  selected: experiences[0].id,
});

export function useMail() {
  return useAtom(configAtom);
}
