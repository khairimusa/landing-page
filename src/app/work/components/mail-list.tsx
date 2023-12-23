import { cn } from '@/lib/utils';
import { Badge } from '@/components/new-york/ui/badge';
import { ScrollArea } from '@/components/new-york/ui/scroll-area';
import { MailType } from '@/app/work/data';

interface MailListProps {
  items: MailType[];
}

export function MailList({ items }: MailListProps) {
  return (
    <ScrollArea className="h-auto">
      <div className="flex flex-col gap-4 p-4">
        {items.map(item => (
          <button
            key={item.id}
            className={cn(
              'flex flex-col items-start gap-2 rounded-lg border py-4 px-4 text-left text-sm transition-all hover:shadow-xl hover:scale-[1.02]',
            )}
          >
            <div className="flex w-full md:flex-row flex-col gap-1">
              <div className="text-md md:w-1/4 w-full">
                <time className="mb-1 text-sm font-normal leading-none text-slate-400 dark:text-slate-300">
                  {item.date}
                </time>
              </div>

              <div className="flex flex-col gap-2 md:w-3/4 w-full">
                <div className="flex items-center gap-1">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <div>
                      <a
                        className="inline-flex items-baseline text-lg font-semibold leading-tight text-slate-600 dark:text-slate-200"
                        href={item.link}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <span>
                          {item.name} ·{' '}
                          <span className="inline-block">
                            {item.subject}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 5 20 20"
                              fill="currentColor"
                              className="inline-block h-4 w-4"
                              aria-hidden="true"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </span>
                        </span>
                      </a>
                    </div>
                  </h3>
                </div>
                <div className="text-md text-slate-500 dark:text-slate-300">
                  {item.text}
                </div>
                <div>
                  {item.products.length ? (
                    <ul className="flex flex-wrap">
                      {item.products.map((product, key) => (
                        <li key={key} className="mr-4">
                          <a
                            className="relative inline-flex items-center text-sm font-medium text-slate-400 hover:text-teal-600"
                            href={product.href}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="mr-1 h-3 w-3"
                              aria-hidden="true"
                            >
                              <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z" />
                              <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z" />
                            </svg>
                            <span>{product.title}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <></>
                  )}
                </div>
                <div>
                  {item.labels.length ? (
                    <div className="flex flex-wrap gap-2">
                      {item.labels.map((label, key) => (
                        <Badge
                          key={key}
                          variant={'outline'}
                          className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-500 dark:bg-teal-300/10"
                        >
                          {label}
                        </Badge>
                      ))}
                    </div>
                  ) : (
                    <span className="p-0"></span>
                  )}
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </ScrollArea>
  );
}
