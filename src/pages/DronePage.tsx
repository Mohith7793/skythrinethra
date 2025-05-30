// import React from 'react';
// import PageHeader from '../components/PageHeader';
// import DroneShowcase from '../components/DroneShowcase';
// import ClientSuccessStories from '../components/ClientSuccessStories';
// import ContactCTA from '../components/ContactCTA';

// const DronePage: React.FC = () => {
//   return (
//     <div>
//       <PageHeader 
//         title="Drone Solutions" 
//         subtitle="Cutting-edge drone technology for modern applications"
//         bgColor="bg-orange-600"
//         textColor="text-white"
//       />
      
//       <section className="py-16 px-4">
//         <div className="container mx-auto">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="text-3xl font-bold mb-6">Advanced Drone Technology</h2>
//               <p className="text-gray-700 mb-6 leading-relaxed">
//                 Our proprietary drone technology combines cutting-edge hardware with sophisticated software to deliver unparalleled performance and reliability. Designed for both professional and recreational use, our drones represent the pinnacle of aerial innovation.
//               </p>
//               <div className="space-y-4">
//                 <div className="flex items-start">
//                   <div className="h-6 w-6 text-orange-500 mr-3 mt-1">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                     </svg>
//                   </div>
//                   <p className="text-gray-700">Extended flight time with advanced battery technology</p>
//                 </div>
//                 <div className="flex items-start">
//                   <div className="h-6 w-6 text-orange-500 mr-3 mt-1">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                     </svg>
//                   </div>
//                   <p className="text-gray-700">4K Ultra HD camera with image stabilization</p>
//                 </div>
//                 <div className="flex items-start">
//                   <div className="h-6 w-6 text-orange-500 mr-3 mt-1">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                     </svg>
//                   </div>
//                   <p className="text-gray-700">AI-powered obstacle avoidance system</p>
//                 </div>
//                 <div className="flex items-start">
//                   <div className="h-6 w-6 text-orange-500 mr-3 mt-1">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                     </svg>
//                   </div>
//                   <p className="text-gray-700">Intuitive control interface with real-time feedback</p>
//                 </div>
//               </div>
//             </div>
//             <div className="relative rounded-xl overflow-hidden shadow-xl">
//               <img 
//                 src="https://images.pexels.com/photos/2050718/pexels-photo-2050718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
//                 alt="Advanced Drone" 
//                 className="w-full h-auto"
//               />
//             </div>
//           </div>
//         </div>
//       </section>
      
//       <DroneShowcase />
//       <ClientSuccessStories 
//         industry="Drone Technology"
//         bgColor="bg-orange-50"
//       />
//       <ContactCTA 
//         title="Ready to elevate your aerial capabilities?"
//         subtitle="Contact us today to learn more about our drone solutions."
//         buttonText="Get a Quote"
//         bgColor="bg-orange-600"
//       />
//     </div>
//   );
// };

// export default DronePage;
import React from 'react';
import PageHeader from '../components/PageHeader';
import DroneShowcase from '../components/DroneShowcase';
import ClientSuccessStories from '../components/ClientSuccessStories';
import ContactCTA from '../components/ContactCTA';
import DroneProjectsShowcase from '../components/DroneProjectsShowcase.tsx';

const DronePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with video fallback to image */}
      <div className="relative h-screen overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="https://assets.mixkit.co/videos/4998/4998-720.mp4" type="video/mp4" />
          {/* Fallback image if video doesn't load */}
          <img
            src="https://www.cadcrowd.com/blog/wp-content/uploads/2016/09/drone-design-3d-modeling.gif"
            alt="Drone background"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Drone Solutions</h1>
          <p className="text-xl md:text-2xl max-w-2xl">
            Cutting-edge drone technology for modern applications
          </p>
        </div>
      </div>

      {/* Advanced Drone Technology Section */}
      <section className="py-20 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Advanced Drone Technology</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our proprietary drone technology combines cutting-edge hardware with sophisticated software to deliver unparalleled performance and reliability. Designed for both professional and recreational use, our drones represent the pinnacle of aerial innovation.
              </p>
              <div className="space-y-4">
                {[
                  'Extended flight time with advanced battery technology',
                  '4K Ultra HD camera with image stabilization',
                  'AI-powered obstacle avoidance system',
                  'Intuitive control interface with real-time feedback',
                ].map((text, index) => (
                  <div key={index} className="flex items-start">
                    <div className="h-6 w-6 text-orange-500 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700">{text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/2050718/pexels-photo-2050718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Advanced Drone" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Drone Showcase Component */}
      

      
      
          
           
      {/* Client Success Stories Section */}
      <section className="py-0 bg-orange-50">
        <div className="container mx-auto px-4">
          
          <DroneShowcase 
          industry="Drone Technology"
            bgColor="bg-orange-50"
          />
           
          <DroneProjectsShowcase 
          industry="Drone Technology"
            bgColor="bg-orange-50"
          />
          <ClientSuccessStories 
            industry="Drone Technology"
            bgColor="bg-orange-50"
          />
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-1 bg-orange-600 text-white">
        <div className="container mx-auto px-4">
          <ContactCTA 
            title="Ready to elevate your aerial capabilities?"
            subtitle="Contact us today to learn more about our drone solutions."
            buttonText="Get a Quote"
            bgColor="bg-orange-600"
          />
        </div>
      </section>
    </div>
  );
};

export default DronePage;
