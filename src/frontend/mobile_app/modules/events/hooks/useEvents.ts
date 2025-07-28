import * as React from 'react';

type Events = Array<React.ReactNode>;
type PushEvent = (el: React.ReactNode) => any;

export const useEvents = (): [Events, PushEvent] => {
  const [events, setEvents] = React.useState<Array<React.ReactNode>>([]);
  return [
    events,
    (ev: React.ReactNode) => {
      setEvents(([...prev]) => {
        prev.push(ev);
        if (prev.length > 10) {
          // prev.slice(20 - prev.length);
          prev = [];
        }

        return prev;
      });
    },
  ];
};
