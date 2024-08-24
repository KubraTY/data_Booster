// app/components/ExerciseVideo.tsx
import React from 'react';

interface VideoExerciseProps {
  title: string;
  videoUrl: string;
  onNext: () => void;
}

const VideoExercise: React.FC<VideoExerciseProps> = ({ title, videoUrl, onNext }) => {
  return (
    <div className="exercise-video">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <iframe
        src={videoUrl}
        title={title}
        className="w-full h-64 rounded-lg  mb-4"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoExercise;
