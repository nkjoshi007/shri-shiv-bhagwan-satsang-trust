import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="h-[600px] bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1604486901749-5dc6e5a00c4d?auto=format&fit=crop&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-4">Welcome to Shri Shiv Bhagwan Satsang Trust</h1>
            <p className="text-xl max-w-2xl mx-auto">A sacred space for spiritual growth, community, and inner peace</p>
          </div>
        </div>
      </div>

      {/* History Section */}
      <section className="py-16 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Rich History</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1545486332-9e0999c535b2?auto=format&fit=crop&q=80" 
                alt="Temple History" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-4">
              <p className="text-gray-600">Founded in 1925, Shri Shiv Bhagwan Satsang Trust has been a cornerstone of spiritual guidance and community service for nearly a century. Our temple stands as a testament to the enduring faith and dedication of our community.</p>
              <p className="text-gray-600">Through generations, we have maintained our sacred traditions while embracing positive change, creating a welcoming space for all seekers of spiritual wisdom.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Temple Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Daily Prayers",
                description: "Join us for morning and evening prayers, maintaining ancient traditions.",
                image: "https://images.unsplash.com/photo-1623841675698-8a9b80196c6e?auto=format&fit=crop&q=80"
              },
              {
                title: "Community Events",
                description: "Regular cultural programs and festivals that bring our community together.",
                image: "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?auto=format&fit=crop&q=80"
              },
              {
                title: "Spiritual Guidance",
                description: "One-on-one sessions with our experienced spiritual guides.",
                image: "https://images.unsplash.com/photo-1618091372c6-4afe519e2dc6?auto=format&fit=crop&q=80"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={feature.image} alt={feature.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}