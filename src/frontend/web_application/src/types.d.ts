import { AxiosError } from 'axios';

import configureAppStore from './store/configure-store';

// redux ----------------------------------------

export type AppDispatch = ReturnType<typeof configureAppStore>['dispatch'];

export interface AxiosActionPayload<P = any, D = any> {
  request: {
    url: string;
    method?: 'get' | 'patch' | 'delete';
    params?: P;
    data?: D;
  };
}

// XXX: not sure about that
export type AxiosActionError = AxiosError;

//  ---------------------------------------------

// fetch ----------------------------------------

export interface PagerParams {
  offset?: number;
  limit?: number;
}

export type PatchPayload<E extends { [key: string]: any } = {}> = Partial<E> & {
  current_state: Partial<E>;
};

export type ResourceStatus =
  | 'idle'
  | 'pending'
  | 'resolved'
  | 'rejected'
  | 'invalidated';

//  ---------------------------------------------
