// import React from 'react';
// import PageHeader from '../components/PageHeader';
// import ContactForm from '../components/ContactForm';
// import ContactInfo from '../components/ContactInfo';
// import FAQ from '../components/FAQ';
// import Map from '../components/Map';

// const ContactPage: React.FC = () => {
//   return (
//     <div>
//       <PageHeader 
//         title="Contact Us" 
//         subtitle="Get in touch with our team"
//         bgColor="bg-blue-600"   // Solid color, no gradient
//         textColor="text-white"
//       />
      
//       <section className="py-16 px-4">
//         <div className="container mx-auto">
//           <div className="grid md:grid-cols-2 gap-12">
//             <ContactForm />
//             <ContactInfo />
//           </div>
//         </div>
//       </section>
      
//       <Map />
      
//       <section className="py-16 px-4 bg-gray-50">  {/* Clean light background */}
//         <div className="container mx-auto">
//           <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
//             Frequently Asked Questions
//           </h2>
//           <FAQ isContactPage={true} />
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ContactPage;
import React from 'react';
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';
import FAQ from '../components/FAQ';
import Map from '../components/Map';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with background image */}
      <div className="relative h-screen overflow-hidden">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/051/166/491/small/communication-concept-with-email-message-box-and-contacts-icons-e-mail-marketing-customer-support-counseling-and-support-hotline-connection-with-modern-network-technology-contact-us-free-photo.jpg"
          alt="Contact background"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0  bg-opacity-60 z-10 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl md:text-2xl max-w-2xl">
            Get in touch with our team
          </p>
        </div>
      </div>

      {/* Contact Form and Info */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <Map />

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Frequently Asked Questions
          </h2>
          <FAQ isContactPage={true} />
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
