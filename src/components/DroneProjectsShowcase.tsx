import React, { useState } from 'react';

interface VideoData {
  title: string;
  videoUrl: string;
  thumbnail: string;
  description: string;
}

const droneVideos: VideoData[] = [
  {
    title: 'Autonomous Navigation Drone',
    videoUrl: 'https://skythrinethrssets.blob.core.windows.net/skythrinethfiles/autonamous_navigation.mp4?sp=r&st=2025-05-30T17:46:54Z&se=2028-03-26T01:46:54Z&spr=https&sv=2024-11-04&sr=b&sig=8N1FRMxTTsHDsIfqTLl56pUs743%2Bs5FsSkzAhHBFGbs%3D',
    thumbnail: 'https://repository-images.githubusercontent.com/533444988/abeb99db-127d-4dae-9445-f2b48afaba0e',
    description: 'This autonomous drone showcases advanced navigation capabilities using GPS, obstacle avoidance, and real-time route optimization for seamless mobility in unknown terrains.',
  },
  {
    title: '5G-Enabled Drone with Unlimited Range',
    videoUrl: 'https://skythrinethrssets.blob.core.windows.net/skythrinethfiles/innovtion.mp4?sp=r&st=2025-05-30T17:50:41Z&se=2028-06-01T01:50:41Z&spr=https&sv=2024-11-04&sr=b&sig=VLfWZlZktp1%2Fa7GpBtA37dh6PcxFBJEXTvoVmLbRQ9M%3D',
    thumbnail: 'https://skythrinethrssets.blob.core.windows.net/skythrinethfiles/distance.png?sp=r&st=2025-05-30T18:21:42Z&se=2028-08-30T02:21:42Z&spr=https&sv=2024-11-04&sr=b&sig=amWGFLr50uu0ucP2eJmx9AShok7lSwOVVrSohQvxb6k%3D',
    description: 'Designed for high-altitude surveillance, this drone integrates live video streaming and object detection to monitor and secure restricted areas efficiently.',
  },
  {
    title: 'Autonomous AI-Powered Drone for Plant Disease Detection',
    videoUrl: 'https://skythrinethrssets.blob.core.windows.net/skythrinethfiles/Testing.mp4?sp=r&st=2025-05-30T17:37:31Z&se=2027-02-01T01:37:31Z&spr=https&sv=2024-11-04&sr=b&sig=kibD0ZHV72m1JHN%2F8IoE71vmapQTvZTipaygs0PstZ8%3D',
    thumbnail: 'https://d12aarmt01l54a.cloudfront.net/cms/images/UserMedia-20240831114042/808-440.png',
    description: 'This AI-powered drone autonomously scans agricultural fields to detect early signs of plant disease using image recognition and machine learning algorithms.',
  },
  {
    title: 'AI-Driven Drone for Advanced Landing Zone Mapping',
    videoUrl: 'https://skythrinethrssets.blob.core.windows.net/skythrinethfiles/Precision_Landing%20.mp4?sp=r&st=2025-05-30T17:54:44Z&se=2028-03-28T01:54:44Z&spr=https&sv=2024-11-04&sr=b&sig=N9jQ2XixLVIHRA0%2B1WYAgGvZI%2Frn8Es8GgRkE%2FMYWo4%3D',
    thumbnail: 'https://geospatialmedia.s3.amazonaws.com/wp-content/uploads/2019/08/Precision-Landing-Workflow.png',
    description: 'This advanced drone integrates Artificial Intelligence with Augmented Reality to autonomously analyze environments and visually map optimal landing zones, ensuring accurate, safe, and real-time deployment decisions in dynamic terrains',
  },
  {
    title: 'AI-Powered SOS Drone for Natural Disaster Response',
    videoUrl: 'https://skythrinethrssets.blob.core.windows.net/skythrinethfiles/SkyWatch%20-%20Made%20with%20Clipchamp.mp4?sp=r&st=2025-05-30T19:11:12Z&se=2028-03-30T03:11:12Z&spr=https&sv=2024-11-04&sr=b&sig=pOdrc4nhd9Qy1fFdzshR6KGFlrnsMTKJ54OhjuIs1IA%3D',
    thumbnail: 'https://img.freepik.com/premium-photo/aidriven-drones-delivering-emergency-medical-supplies-remote-locations-autonomous-drones-providing-lifesaving-medical-supplies-hardtoreach-areas_1230253-30020.jpg',
    description: 'Engineered for emergency scenarios, this AI-enabled drone rapidly deploys to natural disaster zones—assisting in real-time search and rescue, mapping affected areas, and delivering critical aid with precision and autonomy.',
  },
];

const DroneProjectsShowcase: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-orange-50 py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-extrabold text-center mb-4 text-gray-800">
        Drone R&D Project Showcase
      </h2>
      <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
        Explore our cutting-edge drone projects powered by AI and automation, designed to solve real-world problems in navigation, surveillance, and precision agriculture.
      </p>

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
              <p className="text-sm text-gray-500 mb-2">
                Watch how our R&D team is innovating with next-gen drone technologies.
              </p>
              <p className="text-sm text-gray-600">
                {video.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DroneProjectsShowcase;
