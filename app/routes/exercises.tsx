// app/routes/exercises.tsx
import React, { useState } from 'react';
import VideoExercise from '~/components/ExerciseVideo';
import MultipleChoiceExercise from '~/components/ExerciseMultipleChoice';
import { useLoaderData } from '@remix-run/react';

// Tür tanımlamaları
interface Exercise {
  title: string;
  url?: string; // VideoExercise için
  description?: string; // MultipleChoiceExercise için
  answers?: { id: string; answer: string }[]; // MultipleChoiceExercise için
  resourcetype: 'VideoExercise' | 'MultipleChoiceExercise';
}

interface Lesson {
  id: string;
  order: number;
  title: string;
  exercises: Exercise[];
}

interface LessonsData {
  lessons: Lesson[];
}

export const loader = async () => {
  const data: LessonsData = await fetch('http://localhost:5173/public/lessons.json').then(res => res.json());
  return data;
};

const ExercisePage: React.FC = () => {
  const data = useLoaderData<LessonsData>(); // Tür belirtme
  const [currentScreen, setCurrentScreen] = useState(0);

  const exercises = data.lessons[0].exercises;

  const nextScreen = () => {
    if (currentScreen < exercises.length - 1) {
      setCurrentScreen(currentScreen + 1);
    }
  };

  const previousScreen = () => {
    if (currentScreen > 0) {
      setCurrentScreen(currentScreen - 1);
    }
  };

  const currentExercise = exercises[currentScreen];

  return (
    <div className="exercise-page">
      {currentExercise.resourcetype === 'VideoExercise' && (
        <VideoExercise
          title={currentExercise.title}
          videoUrl={currentExercise.url || ''} // Varsayılan değer
          onNext={nextScreen}
        />
      )}
      {currentExercise.resourcetype === 'MultipleChoiceExercise' && (
        <MultipleChoiceExercise
          title={currentExercise.title}
          question={currentExercise.description || ''} // Varsayılan değer
          options={currentExercise.answers || []} // Varsayılan değer
          onPrevious={previousScreen}
          onNext={nextScreen}
        />
      )}
    </div>
  );
};

export default ExercisePage;
