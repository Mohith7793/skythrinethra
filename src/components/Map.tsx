import React from 'react';

const Map: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="rounded-xl overflow-hidden shadow-lg h-96">
          {/* Replace with actual Google Maps or other map service */}
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <p className="text-gray-600">Map will be displayed here</p>
            {/* In a real implementation, you would include an iframe with Google Maps or similar service */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;