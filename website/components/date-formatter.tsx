import { format, parseISO } from 'date-fns';
import * as React from 'react';

type Props = {
  dateString: string;
};

export function DateFormatter({ dateString }: Props) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL	d, yyyy')}</time>;
}
