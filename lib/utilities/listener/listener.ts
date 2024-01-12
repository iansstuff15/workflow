import { Dispatch, SetStateAction } from 'react';
export const listenToKey = (
  e: KeyboardEvent,
  state: boolean,
  setState: Dispatch<SetStateAction<boolean>>,
  keysToListen: Array<string>
) => {
  if (
    keysToListen.includes('ctrl') &&
    keysToListen.includes('meta') &&
    keysToListen.includes('cmd') &&
    keysToListen.includes('shift')
  ) {
    if (
      (e.metaKey || e.ctrlKey) &&
      e.shiftKey &&
      keysToListen.includes(e.code)
    ) {
      setState(!state);
    }
  }
  return false;
};
