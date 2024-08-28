import React, { useState } from 'react';

interface JobFilterProps {
  categories: string[];
  onCategoryChange: (selectedCategories: string[]) => void;
  onSalaryChange: (salary: string) => void;
}

const JobFilter: React.FC<JobFilterProps> = ({ categories, onCategoryChange, onSalaryChange }) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleCategoryChange = (category: string) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((item) => item !== category)
      : [...selectedCategories, category];

    setSelectedCategories(updatedCategories);
    onCategoryChange(updatedCategories);
  };

  return (
    <div>
      <h2 className="text-lg font-bold mb-4 text-gray-700">求人カテゴリ</h2>
      {categories.map((category) => (
        <div className="mb-4" key={category}>
          <input 
            type="checkbox" 
            id={category} 
            onChange={() => handleCategoryChange(category)} 
          />
          <label htmlFor={category} className="ml-2 text-gray-700">{category}</label>
        </div>
      ))}

      <h2 className="text-lg font-bold mt-6 mb-4 text-gray-700">年収</h2>
      <select className="w-full bg-white border p-2 text-gray-700" onChange={(e) => onSalaryChange(e.target.value)}>
        <option value="800">200万円以上</option>
        <option value="300">300万円以上</option>
        <option value="400">400万円以上</option>
        <option value="500">500万円以上</option>
        <option value="600">600万円以上</option>
        <option value="700">700万円以上</option>
        <option value="800">800万円以上</option>
        <option value="800">900万円以上</option>
        <option value="800">1000万円以上</option>
      </select>
    </div>
  );
};

export default JobFilter;