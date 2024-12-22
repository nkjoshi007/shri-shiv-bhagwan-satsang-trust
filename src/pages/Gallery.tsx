import React from 'react';
import { Image } from 'lucide-react';

export default function Gallery() {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1604486901749-5dc6e5a00c4d",
      title: "Temple Front View",
      description: "Main entrance during sunset"
    },
    {
      url: "https://images.unsplash.com/photo-1545486332-9e0999c535b2",
      title: "Prayer Hall",
      description: "Main prayer hall during morning aarti"
    },
    {
      url: "https://images.unsplash.com/photo-1623841675698-8a9b80196c6e",
      title: "Festival Celebrations",
      description: "Annual spring festival"
    },
    {
      url: "https://images.unsplash.com/photo-1544006659-f0b21884ce1d",
      title: "Community Gathering",
      description: "Weekly community meal"
    },
    {
      url: "https://images.unsplash.com/photo-1618091372c6-4afe519e2dc6",
      title: "Meditation Session",
      description: "Morning meditation"
    },
    {
      url: "https://images.unsplash.com/photo-1604486901749-5dc6e5a00c4d",
      title: "Cultural Program",
      description: "Youth cultural performance"
    }
  ];

  return (
    <div className="min-h-screen bg-orange-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <Image className="h-12 w-12 text-orange-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Temple Gallery</h1>
          <p className="text-gray-600">Capturing moments of devotion, celebration, and community</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                <p className="text-gray-600">{image.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors">
            Load More Images
          </button>
        </div>
      </div>
    </div>
  );
}