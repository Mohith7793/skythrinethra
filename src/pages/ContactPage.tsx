import React from 'react';
import PageHeader from '../components/PageHeader';
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';
import FAQ from '../components/FAQ';
import Map from '../components/Map';

const ContactPage: React.FC = () => {
  return (
    <div>
      <PageHeader 
        title="Contact Us" 
        subtitle="Get in touch with our team"
        bgColor="bg-blue-600"
        textColor="text-white"
      />
      
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>
      
      <Map />
      
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <FAQ isContactPage={true} />
        </div>
      </section>
    </div>
  );
};

export default ContactPage;