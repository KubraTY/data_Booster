import React, { useState } from 'react';

interface VideoExerciseProps {
  title: string;
  videoUrl: string;
  onNext: () => void;
}

const VideoExercise: React.FC<VideoExerciseProps> = ({ title, videoUrl, onNext }) => {
  const [loading, setLoading] = useState(true);

  const handleLoadedData = () => {
    setLoading(false);
  };

  return (
    <div className="exercise-video w-full h-full flex flex-col">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      {loading && <div className="loading-spinner mb-4">Loading...</div>}
      <iframe
        src={videoUrl}
        title={title}
        className={`w-full h-64 rounded-lg mb-4 min-h-[70vh]  ${loading ? 'hidden' : ''}`}
        onLoad={handleLoadedData}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoExercise;
