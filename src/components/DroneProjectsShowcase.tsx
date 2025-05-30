import React, { useState } from 'react';

interface VideoData {
  title: string;
  videoUrl: string;
  thumbnail: string;
}

const droneVideos: VideoData[] = [
  {
    title: 'Autonomous Navigation Drone',
    videoUrl: '/videos/drone1.mp4',
    thumbnail: '/thumbnails/drone1.jpg',
  },
  {
    title: 'Surveillance Drone Test',
    videoUrl: '/videos/drone2.mp4',
    thumbnail: '/thumbnails/drone2.jpg',
  },
  {
    title: 'Aerial Mapping Prototype',
    videoUrl: '/videos/drone3.mp4',
    thumbnail: '/thumbnails/drone3.jpg',
  },
];

const DroneProjectsShowcase: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-orange-50 py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800">
        Drone R&D Project Showcase
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {droneVideos.map((video, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="bg-white shadow-lg rounded-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300"
          >
            <div className="relative w-full h-56 overflow-hidden">
              {hoveredIndex === index ? (
                <video
                  src={video.videoUrl}
                  controls
                  autoPlay
                  loop
                  muted
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition duration-300"
                />
              )}
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                {video.title}
              </h3>
              <p className="text-sm text-gray-500">
                Watch how our R&D team is innovating with next-gen drone technologies.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DroneProjectsShowcase;
