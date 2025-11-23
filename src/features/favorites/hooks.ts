import { useContext } from 'react';
import { FavoritesContext } from 'src/features/favorites/FavoritesContext';

export function useFavorites() {
  const ctx = useContext(FavoritesContext);
  if (!ctx) throw new Error('useFavorites must be inside FavoritesProvider');

  return ctx.state.items;
}

export function useFavoritesDispatch() {
  const ctx = useContext(FavoritesContext);
  if (!ctx)
    throw new Error('useFavoritesDispatch must be inside FavoritesProvider');

  return ctx.dispatch;
}
