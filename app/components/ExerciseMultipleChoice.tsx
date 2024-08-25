import React from 'react';

interface Option {
  id: string;
  answer: string;
}

interface MultipleChoiceExerciseProps {
  title: string;
  question: string;
  options: Option[];
  onPrevious: () => void;
  onNext: () => void;
}
const stripHtmlTags = (str: string) => {
  return str.replace(/<[^>]*>?/gm, '');
};
const MultipleChoiceExercise: React.FC<MultipleChoiceExerciseProps> = ({ title, question, options, onPrevious, onNext }) => {
  const cleanedQuestion = stripHtmlTags(question);
  return (
    <div className="exercise-container w-full h-full flex flex-col">
      <h2 className="text-2xl font-bold mb-8">{title}</h2>
      <p className="text-lg mb-6
      ">{cleanedQuestion}</p>
      <form className="w-full">
        {options.map((option, index) => (
          <div key={index} className="option mb-4 p-5 bg-customPurple_light rounded-lg justify-center item-center">
            <input type="radio" id={option.id} name="option" className="mr-2 justify-center item-center appearance-none w-4 h-4 border border-white rounded-full checked:bg-white checked:border-white" />
            <label htmlFor={option.id}>{option.answer}</label>
          </div>
        ))}
      </form>
    </div>
  );
};

export default MultipleChoiceExercise;
