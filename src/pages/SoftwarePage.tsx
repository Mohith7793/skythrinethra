// import React from 'react';
// import PageHeader from '../components/PageHeader';
// import SoftwareServices from '../components/SoftwareServices';
// import DevelopmentProcess from '../components/DevelopmentProcess';
// import ClientSuccessStories from '../components/ClientSuccessStories';
// import ContactCTA from '../components/ContactCTA';

// const SoftwarePage: React.FC = () => {
//   return (
//     <div>
//       <PageHeader 
//         title="Software Solutions" 
//         subtitle="Custom software development and AI/ML solutions"
//         bgColor="bg-purple-600"
//         textColor="text-white"
//       />
      
//       <section className="py-16 px-4">
//         <div className="container mx-auto">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div className="order-2 md:order-1 relative rounded-xl overflow-hidden shadow-xl">
//               <img 
//                 src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
//                 alt="Software Development Team" 
//                 className="w-full h-auto"
//               />
//             </div>
//             <div className="order-1 md:order-2">
//               <h2 className="text-3xl font-bold mb-6">Tailored Software Solutions</h2>
//               <p className="text-gray-700 mb-6 leading-relaxed">
//                 Our team of expert developers creates custom software solutions designed to address your specific business challenges. From web applications to AI-driven systems, we build scalable, secure, and efficient software that drives your business forward.
//               </p>
//               <div className="space-y-4">
//                 <div className="flex items-start">
//                   <div className="h-6 w-6 text-purple-500 mr-3 mt-1">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                     </svg>
//                   </div>
//                   <p className="text-gray-700">Custom web & mobile application development</p>
//                 </div>
//                 <div className="flex items-start">
//                   <div className="h-6 w-6 text-purple-500 mr-3 mt-1">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                     </svg>
//                   </div>
//                   <p className="text-gray-700">AI & machine learning integration</p>
//                 </div>
//                 <div className="flex items-start">
//                   <div className="h-6 w-6 text-purple-500 mr-3 mt-1">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                     </svg>
//                   </div>
//                   <p className="text-gray-700">Data analytics & business intelligence</p>
//                 </div>
//                 <div className="flex items-start">
//                   <div className="h-6 w-6 text-purple-500 mr-3 mt-1">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                     </svg>
//                   </div>
//                   <p className="text-gray-700">Cloud infrastructure & DevOps</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
      
//       <SoftwareServices />
//       <DevelopmentProcess />
//       <ClientSuccessStories 
//         industry="Software Development"
//         bgColor="bg-purple-50"
//       />
//       <ContactCTA 
//         title="Have a software project in mind?"
//         subtitle="Let's discuss how we can bring your vision to life."
//         buttonText="Start a Project"
//         bgColor="bg-purple-600"
//       />
//     </div>
//   );
// };

// export default SoftwarePage;
import React from 'react';
import PageHeader from '../components/PageHeader';
import SoftwareServices from '../components/SoftwareServices';
import DevelopmentProcess from '../components/DevelopmentProcess';
import ClientSuccessStories from '../components/ClientSuccessStories';
import ContactCTA from '../components/ContactCTA';

const SoftwarePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with video and fallback image */}
      <div className="relative h-screen overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="https://assets.mixkit.co/videos/4216/4216-720.mp4" type="video/mp4" />
          <img
            src="https://miro.medium.com/v2/resize:fit:1358/1*T8HTxb22Uddz9MvSQkN7Yg.gif"
            alt="Software background"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Software Solutions</h1>
          <p className="text-xl md:text-2xl max-w-2xl">
            Custom software development and AI/ML solutions
          </p>
        </div>
      </div>

      {/* Tailored Software Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Software Development Team" 
                className="w-full h-auto"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6">Tailored Software Solutions</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our team of expert developers creates custom software solutions designed to address your specific business challenges. From web applications to AI-driven systems, we build scalable, secure, and efficient software that drives your business forward.
              </p>
              <div className="space-y-4">
                {[
                  'End-to-end software development lifecycle management',
                  'AI & ML solutions tailored to your data needs',
                  'Cloud-native applications for scalable performance',
                  'Robust security and compliance integration',
                ].map((text, index) => (
                  <div key={index} className="flex items-start">
                    <div className="h-6 w-6 text-purple-600 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Software Services Component */}
      <SoftwareServices />

      {/* Development Process Component */}
      <DevelopmentProcess />

      {/* Client Success Stories */}
      <section className="py-20 bg-purple-50">
        <div className="container mx-auto px-4">
          <ClientSuccessStories 
            industry="Software Development"
            bgColor="bg-purple-50"
          />
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-1 bg-purple-600 text-white">
        <div className="container mx-auto px-4">
          <ContactCTA 
            title="Ready to build smarter software?"
            subtitle="Connect with us to explore your tailored software solution."
            buttonText="Start Your Project"
            bgColor="bg-purple-600"
          />
        </div>
      </section>
    </div>
  );
};

export default SoftwarePage;
