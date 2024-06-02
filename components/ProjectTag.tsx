import React from 'react';

type ProjectTagProps = {
  onClick: () => void;
  name: string;
  isSelected: boolean;
};

const ProjectTag: React.FC<ProjectTagProps> = ({ onClick, name, isSelected }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm md:text-base font-semibold transition-colors duration-200 ${
        isSelected ? 'bg-white text-black' : 'bg-gray-700 text-white'
      }`}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
