import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import './styles/base/reset.scss';
import './styles/base/variables.scss';
import App from './App.tsx';
import { FavoritesProvider } from 'src/features/favorites/FavoritesProvider';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FavoritesProvider>
      <App />
    </FavoritesProvider>
  </StrictMode>,
);
