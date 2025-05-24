import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ContactCTAProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  bgColor?: string;
}

const ContactCTA: React.FC<ContactCTAProps> = ({ 
  title = "Ready to get started?",
  subtitle = "Contact us today to discuss your technology needs.",
  buttonText = "Contact Us",
  bgColor = "bg-blue-600"
}) => {
  const navigate = useNavigate();
  
  return (
    <section className={`${bgColor} py-20 px-4`}>
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
        <p className="text-white/90 max-w-2xl mx-auto mb-8">{subtitle}</p>
        <button 
          onClick={() => navigate('/contact')}
          className="px-8 py-3 bg-white text-gray-900 font-medium rounded-md shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1"
        >
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default ContactCTA;