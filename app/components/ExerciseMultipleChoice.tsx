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


const MultipleChoiceExercise: React.FC<MultipleChoiceExerciseProps> = ({ title, question, options, onPrevious, onNext }) => {
  return (
    <div className="exercise-container">
      <h2>{title}</h2>
      <p>{question}</p>
      <form>
        {options.map((option, index) => (
          <div key={index} className="option">
            <input type="radio" id={option.id} name="option" />
            <label htmlFor={option.id}>{option.answer}</label>
          </div>
        ))}
      </form>
    </div>
  );
};

export default MultipleChoiceExercise;
