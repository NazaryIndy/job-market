import { createContext } from 'react';
import type { FavoritesContextType } from 'src/features/favorites/types';

export const FavoritesContext = createContext<FavoritesContextType | null>(
  null,
);
