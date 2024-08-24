// app/routes/exercises.tsx
import React, { useState } from 'react';
import VideoExercise from '~/components/ExerciseVideo';
import MultipleChoiceExercise from '~/components/ExerciseMultipleChoice';
import NavigationButton from '~/components/NavigationButton'; // Import your navigation button
import { useLoaderData } from '@remix-run/react';

// Types
interface Exercise {
  title: string;
  url?: string; 
  description?: string; 
  answers?: { id: string; answer: string }[]; 
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
  const data = useLoaderData<LessonsData>();
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
    <div className="exercise-page  min-h-screen bg-customPurple">
      {currentExercise.resourcetype === 'VideoExercise' && (
        <VideoExercise title={currentExercise.title} videoUrl={currentExercise.url || ''} onNext={nextScreen} />
      )}
      {currentExercise.resourcetype === 'MultipleChoiceExercise' && (
        <MultipleChoiceExercise
          title={currentExercise.title}
          question={currentExercise.description || ''}
          options={currentExercise.answers || []}
          onPrevious={previousScreen}
          onNext={nextScreen}
        />
      )}
      <div className="flex justify-between w-full mt-4">
        {currentScreen > 0 && (
          <NavigationButton direction="left" onClick={previousScreen} />
        )}
        {currentScreen < exercises.length - 1 && (
          <NavigationButton direction="right" onClick={nextScreen} />
        )}
      </div>
    </div>
  );
};

export default ExercisePage;
