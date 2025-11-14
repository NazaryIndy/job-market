import { type FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import mockData from "../../mocks/jobs.json";
import type { Job } from "../../shared";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

type JobDetailsPageProps = {};

const JobDetailsPage: FC<JobDetailsPageProps> = () => {
  const { id } = useParams();
  const [job, setJob] = useState<Job | null>(null);

  useEffect(() => {
    if (!id) return;
    const currentJob = mockData.find((job) => job.id === +id);
    if (currentJob) {
      setJob(currentJob);
    }
  }, []);

  if (!job) return <div>Loading...</div>;

  return (
    <Container>
      <Typography variant={"h3"}>{job.title}</Typography>

      <Typography>Company: {job.company}</Typography>
      <Typography>Format: {job.employment_type}</Typography>
      <Typography>Experience: {job.experience}</Typography>
      <Typography>Salary: {job.salary}</Typography>
    </Container>
  );
};

export { JobDetailsPage, type JobDetailsPageProps };
