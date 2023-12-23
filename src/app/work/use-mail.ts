import { atom, useAtom } from 'jotai';

import { MailType, mails } from '@/app/work/data';

type Config = {
  selected: MailType['id'] | null;
};

const configAtom = atom<Config>({
  selected: mails[0].id,
});

export function useMail() {
  return useAtom(configAtom);
}
