import React from 'react';
import PageHeader from '../components/PageHeader';

const PrivacyPage: React.FC = () => {
  return (
    <div
      className="min-h-screen bg-gray-50"
      style={{
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
        color: '#222222',
        fontSize: '16px',
        lineHeight: 1.5,
      }}
    >
      <PageHeader 
        title="Privacy Policy" 
        subtitle="How we protect and manage your data"
        bgColor="bg-gradient-to-r from-indigo-600 to-blue-500"
      />
      
      <div className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-xl shadow-lg p-10 space-y-12">
            
            <section>
              <h2 className="text-3xl font-bold mb-5">What information do we collect and why?</h2>
              <p>
                We collect a variety of personal data to provide, maintain, and improve our services. This includes identification data such as your name, date of birth, and government-issued identification numbers which help us verify your identity and comply with legal obligations. We also collect contact details including your email address, postal address, and telephone numbers to communicate effectively. Account credentials like usernames, passwords, and security questions are collected to secure your account. Payment and billing information, including bank details, credit card information, and billing addresses, are collected to process transactions securely. Additionally, we collect usage data automatically such as IP addresses, device types, browser information, and log files to understand how our services are accessed and used. Where you have provided consent, location information is collected to offer location-specific services and meet regulatory requirements. Communication data, including records of your emails, calls, and chats with us, are used to assist in customer support and improve service quality. We gather this data through your interactions with our websites, applications, customer service channels, and through third-party sources when legally permissible.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-5">How do we use your personal data?</h2>
              <p>
                Your personal information is used for a range of essential purposes. Primarily, it enables us to set up, manage, and operate your accounts and services efficiently. We tailor our offerings and communications based on your preferences and needs to provide a personalized experience. We use your data to send important updates, promotional offers, and to respond to your inquiries or complaints. Security and fraud prevention are a critical part of our use of your information; we monitor accounts and transactions to detect and prevent unauthorized activities. Compliance with legal, regulatory, and contractual obligations also requires the use of your data. Furthermore, we analyze usage trends and feedback to improve service quality and customer experience. Subject to your consent, your information may be used for marketing purposes to provide relevant communications and offers from us or our selected partners. We are committed to ensuring that your data is only used in ways consistent with this Privacy Policy and your rights under applicable laws.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-5">What legal grounds do we have to process your data?</h2>
              <p>
                We process your personal data under various legal bases depending on the context. This includes situations where you have explicitly provided your consent to the processing of your personal data for specific purposes. We also process data as necessary to fulfill our contractual obligations to you. Compliance with legal obligations requires processing your data when mandated by laws, regulations, court orders, or governmental requests. In rare cases, processing is necessary to protect your life or safety, or that of another individual. Lastly, we process data when it is necessary for our legitimate business interests, provided such interests do not override your fundamental rights and freedoms. We carefully assess and document these legal grounds to ensure transparency and accountability.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-5">With whom do we share your data?</h2>
              <p>
                We do not sell your personal data to any third parties. Your information is shared only with trusted entities who support our business operations. This includes third-party service providers who assist us with IT services, payment processing, customer support, marketing, and analytics. We may share data with business partners with whom we collaborate to provide joint services or promotions. Regulatory authorities receive information when required by law, regulation, or legal process, including law enforcement agencies and courts. Additionally, corporate affiliates such as subsidiaries, parent companies, or other affiliated entities may access data for operational purposes. All third parties are contractually bound to protect your data in accordance with this Privacy Policy and applicable data protection laws.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-5">How long do we keep your personal data?</h2>
              <p>
                We retain your personal information only for as long as necessary to fulfill the purposes described in this Privacy Policy, which includes meeting legal, accounting, or reporting requirements. Retention periods vary depending on the type of data and the applicable laws. Once your personal data is no longer needed, we securely delete, anonymize, or aggregate it to prevent unauthorized access.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-5">What rights do you have over your personal data?</h2>
              <p>
                Subject to applicable laws, you have various rights regarding your personal data. These rights include obtaining a copy of the personal data we hold about you, correcting inaccurate or incomplete data, and requesting the deletion of your personal data in certain circumstances. You may also request restrictions on how we process your data, object to processing for direct marketing or on grounds relating to your specific situation, and receive your data in a structured, commonly used, and machine-readable format. Furthermore, if processing is based on consent, you have the right to withdraw your consent at any time without affecting prior processing. To exercise any of these rights, please contact us using the details provided below. We may ask you to verify your identity to protect your privacy.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-5">Do we use cookies and tracking technologies?</h2>
              <p>
                Yes, our website and services use cookies and similar tracking technologies to enhance user experience, measure site performance, and deliver relevant advertisements. Cookies enable us to recognize your device, remember your preferences, and analyze traffic patterns. You can manage cookie settings through your browser preferences or opt out of targeted advertising by adjusting your preferences on relevant platforms. Please note that disabling cookies may affect the functionality of certain features on our site.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-5">Do we transfer your data internationally?</h2>
              <p>
                As a global company, your personal data may be transferred to and processed in countries outside your place of residence. When we transfer data internationally, we ensure that appropriate safeguards are in place to protect your information, such as standard contractual clauses, binding corporate rules, or other legal mechanisms compliant with data protection regulations.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-5">How do we protect children's privacy?</h2>
              <p>
                Our services are not intended for children under the age of 13 or the relevant age of majority in your jurisdiction. We do not knowingly collect or solicit personal information from children. If we become aware that we have collected personal data from a child without parental consent, we will promptly delete such information and take measures to prevent further collection.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-5">How do we update this privacy policy?</h2>
              <p>
                We may update this Privacy Policy periodically to reflect changes in our practices, technology, or legal requirements. Significant updates will be communicated via our website or other appropriate channels. We encourage you to review this policy regularly to stay informed about how we protect your personal data.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-5">How can you contact us?</h2>
              <p>
                If you have questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact our Data Protection Officer at the following:
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

export default PrivacyPage;
