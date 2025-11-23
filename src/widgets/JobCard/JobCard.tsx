import type { FC, MouseEvent } from 'react';
import type { Job } from 'src/shared/types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {
  useFavorites,
  useFavoritesDispatch,
} from 'src/features/favorites/hooks';

type JobCardProps = {
  job: Job;
  onClickCard: (jobId: number) => void;
};

const JobCard: FC<JobCardProps> = ({ job, onClickCard }) => {
  const favorites = useFavorites();
  const dispatch = useFavoritesDispatch();

  const isFavorite = !!favorites.find((f) => f.id === job.id);

  const addToFavorite = (e: MouseEvent<SVGSVGElement>) => {
    console.log('add', job);

    e.stopPropagation();

    dispatch({ type: 'ADD_FAVORITE', job: job });
  };

  const removeFromFavorite = (e: MouseEvent<SVGSVGElement>) => {
    e.stopPropagation();
    dispatch({ type: 'REMOVE_FAVORITE', jobId: job.id });
  };

  return (
    <Card
      variant='outlined'
      style={{ margin: '16px 0', cursor: 'pointer' }}
      onClick={() => onClickCard(job.id)}
    >
      <CardContent>
        <Typography variant={'body1'}>{job.title}</Typography>
        {isFavorite ? (
          <FavoriteIcon onClick={removeFromFavorite} />
        ) : (
          <FavoriteBorderIcon onClick={addToFavorite} />
        )}
      </CardContent>
    </Card>
  );
};

export { JobCard, type JobCardProps };
