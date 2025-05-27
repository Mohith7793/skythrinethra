import React from 'react';
import PageHeader from '../components/PageHeader';

const TermsPage: React.FC = () => {
  return (
    <div>
      <PageHeader 
        title="Terms of Service" 
        subtitle="Please read these terms carefully before using our services"
        bgColor="bg-gradient-to-r from-blue-600 to-purple-600"
      />
      
      <div className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
              <div className="p-6 bg-blue-50 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <div className="flex items-start gap-6">
                  <img 
                    src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Agreement"
                    className="w-1/3 h-40 object-cover rounded-lg"
                  />
                  <div>
                    <p className="text-gray-700 mb-4">
                      By accessing or using our services, you agree to be bound by these Terms and our Privacy Policy. If you disagree with any part of the terms, you may not access our services.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center text-gray-700">
                        <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>
                        <span>Read and understand all terms</span>
                      </li>
                      <li className="flex items-center text-gray-700">
                        <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>
                        <span>Accept our privacy policy</span>
                      </li>
                      <li className="flex items-center text-gray-700">
                        <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>
                        <span>Comply with all applicable laws</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Intellectual Property</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-purple-50 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <img 
                    src="https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Our Rights"
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                  <h3 className="font-semibold mb-2">Our Rights</h3>
                  <p className="text-gray-700">
                    The service and all materials therein are the property of SkyThrinethra and are protected by copyright, trademark, and other intellectual property laws.
                  </p>
                </div>
                <div className="p-6 bg-green-50 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <img 
                    src="https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Your Rights"
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                  <h3 className="font-semibold mb-2">Your Rights</h3>
                  <p className="text-gray-700">
                    We grant you a limited license to access and use our services for your personal or business use in accordance with these terms.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. User Responsibilities</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Account Security",
                    content: "You are responsible for safeguarding your account credentials",
                    image: "https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  },
                  {
                    title: "Acceptable Use",
                    content: "You agree not to misuse our services or help anyone else do so",
                    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  },
                  {
                    title: "Content Guidelines",
                    content: "You agree to follow our content guidelines when using our services",
                    image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  }
                ].map((item, index) => (
                  <div key={index} className="p-6 bg-indigo-50 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <div className="flex items-center gap-6">
                      <img 
                        src={item.image}
                        alt={item.title}
                        className="w-1/4 h-32 object-cover rounded-lg"
                      />
                      <div>
                        <h3 className="font-semibold mb-2">{item.title}</h3>
                        <p className="text-gray-700">{item.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Limitation of Liability</h2>
              <div className="p-6 bg-red-50 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <div className="flex items-start gap-6">
                  <img 
                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Liability"
                    className="w-1/3 h-40 object-cover rounded-lg"
                  />
                  <p className="text-gray-700">
                    To the maximum extent permitted by law, in no event shall SkyThrinethra be liable for any indirect, incidental, special, consequential or punitive damages, or any loss of profits or revenues.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Changes to Terms</h2>
              <div className="p-6 bg-yellow-50 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <div className="flex items-start gap-6">
                  <img 
                    src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Changes"
                    className="w-1/3 h-40 object-cover rounded-lg"
                  />
                  <div>
                    <p className="text-gray-700 mb-4">
                      We reserve the right to modify these terms at any time. We will notify you of any changes by posting the new terms on this page.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center text-gray-700">
                        <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
                        <span>Regular updates to terms</span>
                      </li>
                      <li className="flex items-center text-gray-700">
                        <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
                        <span>Notification of changes</span>
                      </li>
                      <li className="flex items-center text-gray-700">
                        <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
                        <span>User responsibility to review</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <div className="p-6 bg-gray-50 rounded-lg transform transition-all duration-300 hover:shadow-lg">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <img 
                    src="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Contact"
                    className="w-full md:w-1/3 h-48 object-cover rounded-lg"
                  />
                  <div>
                    <p className="text-gray-700 mb-4">
                      If you have any questions about these Terms, please contact us:
                    </p>
                    <div className="space-y-2">
                      <p className="text-gray-700 hover:text-blue-600 transition-colors">
                        <span className="font-semibold">Email:</span> contact@skythrinethra.com
                      </p>
                      <p className="text-gray-700 hover:text-blue-600 transition-colors">
                        <span className="font-semibold">Phone:</span> +91 75694 34522
                      </p>
                      <p className="text-gray-700 hover:text-blue-600 transition-colors">
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

export default TermsPage;