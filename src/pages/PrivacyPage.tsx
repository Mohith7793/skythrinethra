import React from 'react';
import PageHeader from '../components/PageHeader';

const PrivacyPage: React.FC = () => {
  return (
    <div>
      <PageHeader 
        title="Privacy Policy" 
        subtitle="How we protect and manage your data"
        bgColor="bg-gradient-to-r from-indigo-600 to-blue-500"
      />
      
      <div className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Information Collection and Use</h2>
              <div className="space-y-4">
                <div className="p-6 bg-indigo-50 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <div className="flex items-start mb-4">
                    <img 
                      src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                      alt="Data Protection" 
                      className="w-24 h-24 object-cover rounded-lg mr-4"
                    />
                    <div>
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
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Data Protection</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-green-50 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <img 
                    src="https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Security Measures" 
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
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
                <div className="p-6 bg-blue-50 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <img 
                    src="https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Data Retention" 
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
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
                    description: "Request access to your personal data",
                    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  },
                  {
                    title: "Rectification",
                    description: "Request correction of inaccurate data",
                    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  },
                  {
                    title: "Erasure",
                    description: "Request deletion of your personal data",
                    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  }
                ].map((right, index) => (
                  <div key={index} className="p-6 bg-purple-50 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <img 
                      src={right.image} 
                      alt={right.title}
                      className="w-full h-40 object-cover rounded-lg mb-4"
                    />
                    <h3 className="font-semibold mb-2">{right.title}</h3>
                    <p className="text-gray-700">{right.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <div className="p-6 bg-gray-50 rounded-lg transform transition-all duration-300 hover:shadow-lg">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <img 
                    src="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Contact"
                    className="w-full md:w-1/3 h-48 object-cover rounded-lg"
                  />
                  <div>
                    <p className="text-gray-700 mb-4">
                      If you have any questions about this Privacy Policy, please contact us:
                    </p>
                    <div className="space-y-2">
                      <p className="text-gray-700 hover:text-indigo-600 transition-colors">
                        <span className="font-semibold">Email:</span> contact@skythrinethra.com
                      </p>
                      <p className="text-gray-700 hover:text-indigo-600 transition-colors">
                        <span className="font-semibold">Phone:</span> +91 75694 34522
                      </p>
                      <p className="text-gray-700 hover:text-indigo-600 transition-colors">
                        <span className="font-semibold">Address:</span> SkyThrinethra Drones
Muthyam Building 3rd Floor, Behind Muthukur 2
Grama Sachivalayam, Mamidipudi - Muthukur Road,
Nellore-524001, Andhra Pradesh, India
                      </p>
                    </div>
                  </div>
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