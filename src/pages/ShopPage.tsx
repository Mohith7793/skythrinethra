import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { useCartStore } from '../store/cartStore';

const courses = [
  {
    id: 'course-ai-1',
    name: 'AI Fundamentals',
    price: 299,
    type: 'course',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Learn the basics of Artificial Intelligence and Machine Learning'
  },
  {
    id: 'course-web-1',
    name: 'Frontend Development',
    price: 249,
    type: 'course',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Master modern web development with React and TypeScript'
  },
  {
    id: 'course-blockchain-1',
    name: 'Blockchain Development',
    price: 399,
    type: 'course',
    image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Build decentralized applications with blockchain technology'
  },
  {
    id: 'course-ml-1',
    name: 'Machine Learning Essentials',
    price: 349,
    type: 'course',
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Comprehensive introduction to machine learning algorithms and applications'
  }
];

const droneProducts = [
  {
    id: 'drone-1',
    name: 'Skythrinethra Explorer Drone',
    price: 999,
    type: 'product',
    image: 'https://images.pexels.com/photos/442589/pexels-photo-442589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Professional-grade drone for aerial photography'
  },
  {
    id: 'drone-course-1',
    name: 'Drone Pilot Training',
    price: 499,
    type: 'training',
    image: 'https://images.pexels.com/photos/1087180/pexels-photo-1087180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Comprehensive drone pilot training program with hands-on experience'
  },
  {
    id: 'drone-assembly-1',
    name: 'Drone Assembly Workshop',
    price: 599,
    type: 'training',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Learn to assemble and customize drones with expert guidance'
  }
];

const ShopPage: React.FC = () => {
  const addItem = useCartStore((state) => state.addItem);
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const handleRegistration = (item: any) => {
    setSelectedItem(item);
    setShowRegistrationModal(true);
  };

  return (
    <div>
      <PageHeader
        title="Shop"
        subtitle="Browse our courses and products"
        bgColor="bg-purple-600"
      />

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">Technology Courses</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courses.map((course) => (
              <div key={course.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={course.image}
                  alt={course.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{course.name}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold">${course.price}</span>
                    <button
                      onClick={() => handleRegistration(course)}
                      className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
                    >
                      Register Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold mt-16 mb-8">Drone Products & Training</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {droneProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold">${product.price}</span>
                    <button
                      onClick={() => product.type === 'training' ? handleRegistration(product) : addItem(product)}
                      className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
                    >
                      {product.type === 'training' ? 'Register Now' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Modal */}
      {showRegistrationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold mb-4">Register for {selectedItem?.name}</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input type="tel" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500" />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowRegistrationModal(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => {
                    addItem(selectedItem);
                    setShowRegistrationModal(false);
                  }}
                  className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
                >
                  Register & Add to Cart
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShopPage;