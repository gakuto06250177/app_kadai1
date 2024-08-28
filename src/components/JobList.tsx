//JobList.tsx
import React from 'react';

interface Job {
  id: number;
  title: string;
  category: string;
  salary: string;
}

interface JobListProps {
  jobs: Job[];
}

const JobList: React.FC<JobListProps> = ({ jobs }) => {
  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-lg font-bold mb-4 text-gray-700">求人一覧</h2>
      {jobs.map((job) => (
        <div key={job.id} className="border p-4 mb-4 bg-white rounded-lg shadow-md w-full">
          <h3 className="text-xl text-gray-700">{job.title}</h3>
          <p className="text-gray-600">カテゴリ: {job.category}</p>
          <p className="text-gray-600">年収: {job.salary} 万円</p>
        </div>
      ))}
    </div>
  );
};

export default JobList;