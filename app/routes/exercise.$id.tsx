import { useParams } from '@remix-run/react';
import { useEffect, useState } from 'react';

interface Exercise {
  id: string;
  title: string;
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

export default function ExerciseDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [exercise, setExercise] = useState<Exercise | null>(null);

  useEffect(() => {
    console.log('Fetching exercise details...');
    fetch('/lessons.json')
      .then(response => response.json())
      .then((data: LessonsData) => {
        console.log('Fetched lessons data:', data);
        const lessons = data.lessons;
        const foundExercise = lessons.flatMap(lesson => lesson.exercises)
                                    .find((ex: Exercise) => ex.id === id);

        if (foundExercise) {
          setExercise(foundExercise);
        } else {
          console.error('Exercise not found');
        }
      })
      .catch(error => console.error('Error fetching lessons.json:', error));
  }, [id]);

  if (!exercise) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{exercise.title}</h1>
    </div>
  );
}

