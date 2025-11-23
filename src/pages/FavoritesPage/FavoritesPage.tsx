import type { FC } from 'react';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { JobCard } from 'src/widgets/JobCard/JobCard';
import { useFavorites } from 'src/features/favorites/hooks';

const FavoritesPage: FC = () => {
  const favorites = useFavorites();

  const navigate = useNavigate();

  const navigateToJob = (id: number) => {
    navigate(`/job/${id}`);
  };

  if (!favorites.length)
    return <Typography variant={'h2'}>Пока пусто</Typography>;

  return (
    <Container maxWidth={'lg'}>
      <Typography variant='h1'>Favorites List</Typography>

      {favorites.map((job) => (
        <JobCard
          job={job}
          key={job.id}
          onClickCard={() => navigateToJob(job.id)}
        />
      ))}
    </Container>
  );
};

export { FavoritesPage };
