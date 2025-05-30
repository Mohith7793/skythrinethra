import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactInfo: React.FC = () => {
  return (
    <div className="bg-gray-50 rounded-xl p-8">
      <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
      
      <div className="space-y-6">
        <div className="flex items-start">
          <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mr-4">
            <MapPin size={20} className="text-blue-600" />
          </div>
          <div>
            <h4 className="font-medium mb-1">Visit Us</h4>
            <p className="text-gray-600">
            SkyThrinethra Drones,
            Muthyam building 3rd floor,behind Muthukur 2
            Grama Sachivalayam, mamidipudi - Muthukur road,

            <br />
            Nellore-524001, Andhra Pradesh<br />
              India
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mr-4">
            <Phone size={20} className="text-blue-600" />
          </div>
          <div>
            <h4 className="font-medium mb-1">Call Us</h4>
            <p className="text-gray-600">+91  7569434522</p>
            <p className="text-gray-600">+91  7793925513</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mr-4">
            <Mail size={20} className="text-blue-600" />
          </div>
          <div>
            <h4 className="font-medium mb-1">Email Us</h4>
            <p className="text-gray-600">contact@skythrinethra.com</p>
            
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mr-4">
            <Clock size={20} className="text-blue-600" />
          </div>
          <div>
            <h4 className="font-medium mb-1">Business Hours</h4>
            <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM</p>
            <p className="text-gray-600">Sunday: Closed</p>
          </div>
        </div>
      </div>
      
      <div className="mt-8 pt-8 border-t border-gray-200">
        <h4 className="font-medium mb-4">Connect With Us</h4>
        <div className="flex space-x-4">
          <a href="https://www.facebook.com/people/SkyThrinethra/61573399597282/" className="h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
          <a href="https://x.com/i/flow/login?redirect_after_login=%2FSkyThrinethra" className="h-10 w-10 rounded-full bg-blue-400 text-white flex items-center justify-center hover:bg-blue-500 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
            </svg>
          </a>
          <a href="https://www.instagram.com/skythrinethra/" className="h-10 w-10 rounded-full bg-pink-600 text-white flex items-center justify-center hover:bg-pink-700 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/%EF%BD%93%EF%BD%8B%EF%BD%99%EF%BD%94%EF%BD%88%EF%BD%92%EF%BD%89%EF%BD%8E%CE%BE%EF%BD%94%EF%BD%88%EF%BD%92%CE%BB-274198355/" className="h-10 w-10 rounded-full bg-blue-800 text-white flex items-center justify-center hover:bg-blue-900 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
     <a href="https://www.youtube.com/@Skythrinethra" className="h-10 w-10 rounded-full bg-red-600 text-white flex items-center justify-center hover:bg-red-700 transition-colors">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-2C18.88 4 12 4 12 4s-6.88 0-8.59.42a2.78 2.78 0 0 0-1.95 2A29.94 29.94 0 0 0 1 12a29.94 29.94 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 2C5.12 20 12 20 12 20s6.88 0 8.59-.42a2.78 2.78 0 0 0 1.95-2A29.94 29.94 0 0 0 23 12a29.94 29.94 0 0 0-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
  </svg>
</a>



        </div>
      </div>
    </div>
  );
};

export default ContactInfo;