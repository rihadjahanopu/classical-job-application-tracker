export type JobStatus = 'not-applied' | 'interview' | 'rejected';

export interface Job {
  id: number;
  company: string;
  position: string;
  location: string;
  type: string; // e.g. "Full-time", "Part-time", "Remote"
  salary: string;
  description: string;
  status: JobStatus;
}
