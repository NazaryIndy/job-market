import {
  type FavoritesState,
  type ActionType,
} from 'src/features/favorites/types';

function favoritesReducer(state: FavoritesState, action: ActionType) {
  console.log('action', action);
  console.log('state', state);
  switch (action.type) {
    case 'ADD_FAVORITE': {
      const addingJob = state.items.find((j) => j.id === action.job.id);
      console.log('adding job', addingJob);
      if (addingJob) {
        return state;
      }
      return { items: [...state.items, action.job] };
    }
    case 'REMOVE_FAVORITE': {
      return { items: state.items.filter((j) => j.id !== action.jobId) };
    }

    default: {
      throw Error('Unknown action: ');
    }
  }
}

export { favoritesReducer, type ActionType };
