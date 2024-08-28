/**
 * 求人投稿フォーム用コンポーネント
 *JobForm.tsx
 */

import React, { useState } from 'react';

interface Job {
  id: number;
  title: string;
  category: string;
  salary: string;
}

interface JobFormProps {
  AddJob: (job: Job) => void;
}

const JobForm: React.FC<JobFormProps> = ({ AddJob }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [salary, setSalary] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newJob = {
      id: Date.now(), // 一意のIDを生成
      title,
      category,
      salary,
    };
    AddJob(newJob);
    setTitle(''); // フォームをリセット
    setCategory('');
    setSalary('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 border rounded w-full max-w-2xl shadow-md mx-auto">
      <h2 className="text-black font-bold mb-4">求人投稿</h2>
      <div className="mb-4">
        <label className="text-black block mb-2">求人タイトル</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 bg-white text-black" style={{ width: '600px' }}
          required
        />
      </div>
      <div className="mb-4">
        <label className="text-black block mb-2">カテゴリを選択</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="bg-white text-black" style={{ width: '200px' }}
          required
        >
          <option value="">選択してください</option>
          <option value="エンジニア">エンジニア</option>
          <option value="デザイン">デザイン</option>
          <option value="マーケティング">マーケティング</option>
          <option value="営業">営業</option>
          <option value="事務">事務</option>
          <option value="財務・経理">財務・経理</option>
          <option value="人事">人事</option>
          <option value="カスタマーサポート">カスタマーサポート</option>
          <option value="医療・介護">医療・介護</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="text-black block mb-2">年収 (万円)</label>
        <input
          type="number"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          className="border p-2 bg-white text-black" style={{ width: '200px' }}
          required
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 w-full" style={{ width: '200px'}}>
        投稿
      </button>
    </form>
  );
};

export default JobForm;