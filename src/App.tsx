//App.tsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import JobFilter from './components/JobFilter';
import JobList from './components/JobList';
import JobForm from './components/JobForm';

interface Job {
  id: number;
  title: string;
  category: string;
  salary: string;
}

function App() {
  const [jobs, setJobs] = useState<Job[]>([
    { id: 1, title: "経験者歓迎!大手企業でのWebエンジニア募集", category: "エンジニア", salary: "600" },
    { id: 2, title: "未経験OK!営業アシスタント急募", category: "営業", salary: "350" },
    // 他の求人情報も追加
  ]);
  const [categories, setCategories] = useState<string[]>(["エンジニア", "デザイン"]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [minSalary, setMinSalary] = useState<string>("300");

  const addJob = (newJob: Job) => {
    setJobs([newJob, ...jobs]);

    if (!categories.includes(newJob.category)) {
      setCategories([...categories, newJob.category]);
    }
  };

  const filteredJobs = jobs.filter(job => 
    parseInt(job.salary) >= parseInt(minSalary) &&
    (selectedCategories.length === 0 || selectedCategories.includes(job.category))
  );
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <header className="bg-blue-900 text-white p-4 text-xl flex justify-between items-center">
          <div className="font-bold text-3xl">求人検索アプリ</div>
          <nav className="space-x-4">
            <Link to="/" className="text-white">求人検索</Link>
            <Link to="/post" className="text-white">求人投稿</Link>
          </nav>
        </header>
        <div className="flex flex-1 justify-center">
          <aside className="p-4 bg-gray-200" style={{ width: '200px' }}>
          <JobFilter categories={categories} onCategoryChange={setSelectedCategories} onSalaryChange={setMinSalary} />
          </aside>
          <main className="p-4 bg-white" style={{ width: '700px' }}>
            <Routes>
              <Route path="/" element={<JobListWrapper jobs={filteredJobs} />} />
              <Route path="/post" element={<JobFormWrapper addJob={addJob} />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

//JobListコンポーネント用
const JobListWrapper = ({ jobs }: { jobs: Job[] }) => {
  return <JobList jobs={jobs} />;
};

//JobFormコンポーネント用
const JobFormWrapper = ({ addJob }: { addJob: (job: Job) => void }) => {
  return <JobForm AddJob={addJob} />;
};

export default App;