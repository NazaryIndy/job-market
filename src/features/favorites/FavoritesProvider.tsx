import { useReducer } from 'react';
import { favoritesReducer } from 'src/features/favorites/favoritesReducer';
import type { FavoritesProviderProps } from 'src/features/favorites/types';
import { initialState } from 'src/features/favorites/constants';
import { FavoritesContext } from 'src/features/favorites/FavoritesContext';

export function FavoritesProvider({ children }: FavoritesProviderProps) {
  const [state, dispatch] = useReducer(favoritesReducer, initialState);

  return (
    <FavoritesContext value={{ state, dispatch }}>{children}</FavoritesContext>
  );
}
