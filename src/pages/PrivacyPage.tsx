import React from 'react';
import PageHeader from '../components/PageHeader';

const PrivacyPage: React.FC = () => {
  return (
    <div>
      <PageHeader 
        title="Privacy Policy" 
        subtitle="How we protect and manage your data"
        bgColor="bg-indigo-600"
      />
      
      <div className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Information Collection and Use</h2>
              <div className="space-y-4">
                <div className="p-6 bg-indigo-50 rounded-lg">
                  <h3 className="font-semibold mb-2">Personal Information</h3>
                  <p className="text-gray-700">We collect various types of information including:</p>
                  <ul className="mt-2 space-y-2">
                    <li className="flex items-center">
                      <span className="h-2 w-2 bg-indigo-500 rounded-full mr-2"></span>
                      <span>Name and contact details</span>
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 bg-indigo-500 rounded-full mr-2"></span>
                      <span>Payment information</span>
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 bg-indigo-500 rounded-full mr-2"></span>
                      <span>Device and usage data</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Data Protection</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-green-50 rounded-lg">
                  <h3 className="font-semibold mb-2">Security Measures</h3>
                  <p className="text-gray-700">
                    We implement industry-standard security measures to protect your data:
                  </p>
                  <ul className="mt-2 space-y-2">
                    <li className="flex items-center">
                      <span className="h-2 w-2 bg-green-500 rounded-full mr-2"></span>
                      <span>Encryption at rest and in transit</span>
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 bg-green-500 rounded-full mr-2"></span>
                      <span>Regular security audits</span>
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 bg-green-500 rounded-full mr-2"></span>
                      <span>Access controls</span>
                    </li>
                  </ul>
                </div>
                <div className="p-6 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold mb-2">Data Retention</h3>
                  <p className="text-gray-700">
                    We retain your data only for as long as necessary to:
                  </p>
                  <ul className="mt-2 space-y-2">
                    <li className="flex items-center">
                      <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>
                      <span>Provide our services</span>
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>
                      <span>Comply with legal obligations</span>
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>
                      <span>Resolve disputes</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Access",
                    description: "Request access to your personal data"
                  },
                  {
                    title: "Rectification",
                    description: "Request correction of inaccurate data"
                  },
                  {
                    title: "Erasure",
                    description: "Request deletion of your personal data"
                  }
                ].map((right, index) => (
                  <div key={index} className="p-6 bg-purple-50 rounded-lg">
                    <h3 className="font-semibold mb-2">{right.title}</h3>
                    <p className="text-gray-700">{right.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <div className="p-6 bg-gray-50 rounded-lg">
                <p className="text-gray-700 mb-4">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <div className="space-y-2">
                  <p className="text-gray-700">Email: contact@skythrinethra.com</p>
                  <p className="text-gray-700">Phone: +91 75694 34522</p>
                  <p className="text-gray-700">Address:  SkyThrinethra Drones Muthyam building 3rd floor, behind Muthukur 2 Grama Sachivalayam, mamidipudi - Muthukur road, Nellore-524001, Andhra Pradesh, India</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;