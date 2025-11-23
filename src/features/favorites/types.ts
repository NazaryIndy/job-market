import type { Job } from 'src/shared';
import type { Dispatch, ReactNode } from 'react';

export type ActionType =
  | { type: 'ADD_FAVORITE'; job: Job }
  | { type: 'REMOVE_FAVORITE'; jobId: number };

export type FavoritesState = {
  items: Job[];
};

export type FavoritesProviderProps = {
  children: ReactNode;
};

export type FavoritesContextType = {
  state: FavoritesState;
  dispatch: Dispatch<ActionType>;
};
