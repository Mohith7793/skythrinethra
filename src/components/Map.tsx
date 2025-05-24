import React from 'react';

const Map: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="rounded-xl overflow-hidden shadow-lg h-96">
          <iframe
            title="SkyThrinethra Drones Location"
            src="https://www.google.com/maps?q=SkyThrinethra+Drones,+Muthyam+building,+Muthukur,+Nellore,+Andhra+Pradesh&output=embed"
            width="100%"
            height="100%"
            loading="lazy"
            style={{ border: 0 }}
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Map;
