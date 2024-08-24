// app/components/MultipleChoiceExercise.tsx

import React from 'react';

// Option arayüzü
interface Option {
  id: string;
  answer: string;
}

// Props türlerini tanımlayın
interface MultipleChoiceExerciseProps {
  title: string;
  question: string;
  options: Option[];
  onPrevious: () => void;
  onNext: () => void;
}

// MultipleChoiceExercise bileşeni
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
      <div className="navigation">
        <button onClick={onPrevious}>{'<'}</button>
        <button onClick={onNext}>{'>'}</button>
      </div>
    </div>
  );
};

export default MultipleChoiceExercise;
