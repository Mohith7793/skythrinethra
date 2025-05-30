// import React from 'react';
// import PageHeader from '../components/PageHeader';
// import TrainingPrograms from '../components/TrainingPrograms';
// import TeachingMethodology from '../components/TeachingMethodology';
// import FAQ from '../components/FAQ';
// import ContactCTA from '../components/ContactCTA';

// const TrainingPage: React.FC = () => {
//   return (
//     <div>
//       <PageHeader 
//         title="Training Programs" 
//         subtitle="Empowering young minds with technology education"
//         bgColor="bg-green-600"
//         textColor="text-white"
//       />
      
//       <section className="py-16 px-4">
//         <div className="container mx-auto">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="text-3xl font-bold mb-6">Nurturing Future Innovators</h2>
//               <p className="text-gray-700 mb-6 leading-relaxed">
//                 Our specialized training programs are designed for students below 10th standard, introducing them to the exciting world of technology through engaging, age-appropriate curricula. We focus on building strong foundations while fostering creativity and problem-solving skills.
//               </p>
//               <div className="space-y-4">
//                 <div className="flex items-start">
//                   <div className="h-6 w-6 text-green-500 mr-3 mt-1">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                     </svg>
//                   </div>
//                   <p className="text-gray-700">Age-appropriate technology curriculum</p>
//                 </div>
//                 <div className="flex items-start">
//                   <div className="h-6 w-6 text-green-500 mr-3 mt-1">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                     </svg>
//                   </div>
//                   <p className="text-gray-700">Hands-on learning with real-world projects</p>
//                 </div>
//                 <div className="flex items-start">
//                   <div className="h-6 w-6 text-green-500 mr-3 mt-1">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                     </svg>
//                   </div>
//                   <p className="text-gray-700">Small class sizes for personalized attention</p>
//                 </div>
//                 <div className="flex items-start">
//                   <div className="h-6 w-6 text-green-500 mr-3 mt-1">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                     </svg>
//                   </div>
//                   <p className="text-gray-700">Regular progress reports and parent involvement</p>
//                 </div>
//               </div>
//             </div>
//             <div className="relative rounded-xl overflow-hidden shadow-xl">
//               <img 
//                 src="https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
//                 alt="Children Learning Technology" 
//                 className="w-full h-auto"
//               />
//             </div>
//           </div>
//         </div>
//       </section>
      
//       <TrainingPrograms />
//       <TeachingMethodology />
//       <FAQ />
//       <ContactCTA 
//         title="Ready to enroll your child?"
//         subtitle="Contact us to learn more about our training programs and schedule."
//         buttonText="Enroll Now"
//         bgColor="bg-green-600"
//       />
//     </div>
//   );
// };

// export default TrainingPage;
import React from 'react';
import PageHeader from '../components/PageHeader';
import TrainingPrograms from '../components/TrainingPrograms';
import TeachingMethodology from '../components/TeachingMethodology';
import FAQ from '../components/FAQ';
import ContactCTA from '../components/ContactCTA';

const TrainingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with fallback image */}
      <div className="relative h-screen overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="https://assets.mixkit.co/videos/6945/6945-720.mp4" type="video/mp4" />
          <img
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Training Background"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Training Programs</h1>
          <p className="text-xl md:text-2xl max-w-2xl">
            Empowering young minds with technology education
          </p>
        </div>
      </div>

      {/* Training Intro Section */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Nurturing Future Innovators</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our specialized training programs are designed for students below 10th standard, introducing them to the exciting world of technology through engaging, age-appropriate curricula. We focus on building strong foundations while fostering creativity and problem-solving skills.
              </p>
              <div className="space-y-4">
                {[
                  'Fun and interactive hands-on workshops',
                  'Custom curriculum tailored for young learners',
                  'Focus on foundational STEM skills',
                  'Encouraging creativity through guided projects',
                ].map((text, index) => (
                  <div key={index} className="flex items-start">
                    <div className="h-6 w-6 text-green-500 mr-3 mt-1">
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
                src="https://images.pexels.com/photos/4144221/pexels-photo-4144221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Kids Training Program" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs Showcase */}
      <TrainingPrograms />

      {/* Teaching Methodology Section */}
      <section className="py-1 bg-green-50">
        <div className="container mx-auto px-4">
          <TeachingMethodology />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <FAQ />
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-1 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <ContactCTA 
            title="Ready to ignite curiosity in young minds?"
            subtitle="Reach out to us to explore our engaging training programs."
            buttonText="Get in Touch"
            bgColor="bg-green-600"
          />
        </div>
      </section>
    </div>
  );
};

export default TrainingPage;
