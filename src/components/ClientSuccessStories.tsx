import React from 'react';

interface ClientSuccessStoriesProps {
  industry: string;
  bgColor: string;
}

const ClientSuccessStories: React.FC<ClientSuccessStoriesProps> = ({ industry, bgColor }) => {
  return (
    <section className={`py-16 px-4 ${bgColor}`}>
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Client Success Stories in {industry}</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Success Story 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Client Success"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2">Global Tech Solutions</h3>
              <p className="text-gray-600 mb-4">
                "The team's expertise transformed our operations, delivering exceptional results that exceeded our expectations."
              </p>
              <p className="text-sm text-gray-500">- Sarah Chen, CTO</p>
            </div>
          </div>

          {/* Success Story 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Client Success"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2">Innovation Corp</h3>
              <p className="text-gray-600 mb-4">
                "Their innovative approach and dedication to quality helped us achieve our strategic objectives."
              </p>
              <p className="text-sm text-gray-500">- Michael Rodriguez, CEO</p>
            </div>
          </div>

          {/* Success Story 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Client Success"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2">Future Dynamics</h3>
              <p className="text-gray-600 mb-4">
                "Working with this team has been transformative for our business. Their solutions drive real results."
              </p>
              <p className="text-sm text-gray-500">- Emily Watson, COO</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSuccessStories;