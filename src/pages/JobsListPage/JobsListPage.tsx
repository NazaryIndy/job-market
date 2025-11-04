import type { FC } from "react";
import jobs from "../../mocks/jobs.json";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";

type JobsListPageProps = {};

const JobsListPage: FC<JobsListPageProps> = () => {
  return (
    <div>
      <Typography variant="h3" component="h1">
        Jobs List
      </Typography>

      {jobs.map((job) => (
        <Card variant="outlined" key={job.id} style={{ margin: "16px 0" }}>
          <CardContent>
            <a href={`/job/${job.id}`}>{job.title}</a>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export { JobsListPage, type JobsListPageProps };
