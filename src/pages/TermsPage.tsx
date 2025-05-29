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
          <div className="bg-white rounded-xl shadow-lg p-8 space-y-8 text-gray-700">
            
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
              <p>
                By accessing or using our services, you agree to be fully bound by these Terms of Service as well as our Privacy Policy. If you do not agree to any part of these terms, please do not use our services. You must carefully read and understand all the terms outlined herein before proceeding. Use of the service constitutes your acceptance of our privacy practices and your commitment to comply with all applicable laws, rules, and regulations. This agreement represents a legally binding contract between you and SkyThrinethra. 
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Intellectual Property</h2>
              <p>
                All content, materials, software, products, and services provided through SkyThrinethra, including but not limited to trademarks, copyrights, designs, and logos, are the exclusive property of SkyThrinethra or its licensors and are protected by national and international intellectual property laws. You are granted a limited, non-exclusive, revocable license to access and use our services for personal or business purposes only and strictly in accordance with these terms. Unauthorized use, reproduction, or distribution of our intellectual property is strictly prohibited and may result in legal action.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. User Responsibilities</h2>
              <p>
                Users are responsible for maintaining the confidentiality and security of their account credentials and must notify us immediately of any unauthorized use or breach. You agree to use our services responsibly and ethically, refraining from any activities that may harm or misuse the platform, interfere with others’ use, or violate any laws or regulations. Compliance with our content guidelines is mandatory, and users are expected to avoid posting or transmitting any harmful, offensive, or illegal content. We reserve the right to suspend or terminate accounts that breach these responsibilities.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Privacy</h2>
              <p>
                Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your personal information. By using our services, you consent to the collection and use of your information as described in the Privacy Policy. Please review the Privacy Policy carefully to understand your rights and how we protect your data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. User Content</h2>
              <p>
                You retain ownership of any content you submit or post on our platform. However, by submitting content, you grant SkyThrinethra a worldwide, royalty-free, non-exclusive license to use, reproduce, modify, and display such content solely for the purposes of operating and improving our services. You affirm that you have the necessary rights and permissions to share your content and that it does not violate any third-party rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, SkyThrinethra and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the service, including but not limited to loss of profits, data, or other intangible losses. Our services are provided "as is" and "as available" without warranties of any kind, either express or implied. We do not guarantee uninterrupted or error-free service, and you agree to use the platform at your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Termination</h2>
              <p>
                We reserve the right to suspend or terminate your access to the services immediately, without prior notice or liability, for any reason including breach of these Terms of Service. Upon termination, your right to use the services will cease immediately. Any provisions of the Terms which by their nature should survive termination shall remain in effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Changes to Terms</h2>
              <p>
                SkyThrinethra reserves the right to update, modify, or replace these Terms of Service at any time without prior notice. Any changes will be effective immediately upon posting on this page. It is your responsibility to regularly review these terms to stay informed of any updates. Continued use of our services after such modifications constitutes acceptance of the new terms. We encourage users to periodically check this page for the latest information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Governing Law and Dispute Resolution</h2>
              <p>
                These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law principles. Any disputes arising out of or relating to these Terms or the use of our services shall be resolved exclusively in the courts located in Andhra Pradesh, India. You agree to submit to the personal jurisdiction of these courts.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-5">How can you contact us?</h2>
              <p>
                If you have questions, concerns, or requests regarding these Terms of Service, the Privacy Policy, or your personal data, please contact our Data Protection Officer at the following:
              </p>
              <p className="mt-4">
                Email: <a href="mailto:contact@skythrinethra.com" className="text-indigo-600 hover:underline">contact@skythrinethra.com</a><br />
                Phone: <a href="tel:+917569434522" className="text-indigo-600 hover:underline">+91 75694 34522</a><br />
                Postal Address:<br />
                SkyThrinethra Drones<br />
                Muthyam Building 3rd Floor<br />
                Behind Muthukur 2, Grama Sachivalayam<br />
                Mamidipudi - Muthukur Road<br />
                Nellore-524001, Andhra Pradesh<br />
                India
              </p>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
