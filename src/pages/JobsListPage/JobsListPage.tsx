import type { FC } from "react";
import jobs from "../../mocks/jobs.json";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

type JobsListPageProps = {};

const JobsListPage: FC<JobsListPageProps> = () => {
  const navigate = useNavigate();

  const navigateToJob = (id: number) => {
    navigate(`/job/${id}`);
  };

  return (
    <Container maxWidth={"lg"}>
      <Typography variant="h1">Jobs List</Typography>

      {jobs.map((job) => (
        <Card
          variant="outlined"
          key={job.id}
          style={{ margin: "16px 0" }}
          onClick={() => navigateToJob(job.id)}
        >
          <CardContent>
            <Typography variant={"body1"}>{job.title}</Typography>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export { JobsListPage, type JobsListPageProps };
