// app/components/VideoExercise.tsx

import React from 'react';

// Props türlerini tanımlayın
interface VideoExerciseProps {
  title: string;
  videoUrl: string;
  onNext: () => void;
}

// VideoExercise bileşeni
const VideoExercise: React.FC<VideoExerciseProps> = ({ title, videoUrl, onNext }) => {
    return (
        <div className="exercise-container">
          <h2>{title}</h2>
          <div className="video-frame">
            <iframe
              src={videoUrl}
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
              title={title}
            />
          </div>
          <div className="navigation">
            <button onClick={onNext}>{'>'}</button>
          </div>
        </div>
      );
};

export default VideoExercise;
