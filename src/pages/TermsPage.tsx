import React from 'react';
import PageHeader from '../components/PageHeader';

const TermsPage: React.FC = () => {
  return (
    <div>
      <PageHeader 
        title="Terms of Service" 
        subtitle="Please read these terms carefully before using our services"
        bgColor="bg-blue-600"
      />
      
      <div className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
              <div className="p-6 bg-blue-50 rounded-lg">
                <p className="text-gray-700">
                  By accessing or using our services, you agree to be bound by these Terms and our Privacy Policy. If you disagree with any part of the terms, you may not access our services.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Intellectual Property</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-purple-50 rounded-lg">
                  <h3 className="font-semibold mb-2">Our Rights</h3>
                  <p className="text-gray-700">
                    The service and all materials therein are the property of TechDrone and are protected by copyright, trademark, and other intellectual property laws.
                  </p>
                </div>
                <div className="p-6 bg-green-50 rounded-lg">
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
                    content: "You are responsible for safeguarding your account credentials"
                  },
                  {
                    title: "Acceptable Use",
                    content: "You agree not to misuse our services or help anyone else do so"
                  },
                  {
                    title: "Content Guidelines",
                    content: "You agree to follow our content guidelines when using our services"
                  }
                ].map((item, index) => (
                  <div key={index} className="p-6 bg-indigo-50 rounded-lg">
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-700">{item.content}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Limitation of Liability</h2>
              <div className="p-6 bg-red-50 rounded-lg">
                <p className="text-gray-700">
                  To the maximum extent permitted by law, in no event shall TechDrone be liable for any indirect, incidental, special, consequential or punitive damages, or any loss of profits or revenues.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Changes to Terms</h2>
              <div className="p-6 bg-yellow-50 rounded-lg">
                <p className="text-gray-700">
                  We reserve the right to modify these terms at any time. We will notify you of any changes by posting the new terms on this page.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <div className="p-6 bg-gray-50 rounded-lg">
                <p className="text-gray-700 mb-4">
                  If you have any questions about these Terms, please contact us:
                </p>
                <div className="space-y-2">
                  <p className="text-gray-700">Email: contact@skythrinethra.com</p>
                  <p className="text-gray-700">Phone: +91 75694 34522</p>
                  <p className="text-gray-700">Address:SkyThrinethra Drones Muthyam building 3rd floor,
                    behind Muthukur 2 Grama Sachivalayam,
                     mamidipudi - Muthukur road, Nellore-524001,
                      Andhra Pradesh, India</p>
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