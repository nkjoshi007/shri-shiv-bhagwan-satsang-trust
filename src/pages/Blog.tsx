import React from 'react';
import { BookOpen, Calendar, User } from 'lucide-react';

export default function Blog() {
  const posts = [
    {
      title: "Understanding Temple Rituals",
      excerpt: "Learn about the significance of daily temple rituals and their spiritual importance in our lives.",
      author: "Swami Ananda",
      date: "March 15, 2024",
      image: "https://images.unsplash.com/photo-1604486901749-5dc6e5a00c4d"
    },
    {
      title: "The Power of Community Prayer",
      excerpt: "Exploring how collective prayer strengthens both individual faith and community bonds.",
      author: "Dr. Sarah Chen",
      date: "March 10, 2024",
      image: "https://images.unsplash.com/photo-1623841675698-8a9b80196c6e"
    },
    {
      title: "Meditation Techniques for Beginners",
      excerpt: "A guide to starting your meditation journey with simple, effective techniques.",
      author: "Guru Patel",
      date: "March 5, 2024",
      image: "https://images.unsplash.com/photo-1618091372c6-4afe519e2dc6"
    }
  ];

  return (
    <div className="min-h-screen bg-orange-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <BookOpen className="h-12 w-12 text-orange-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Temple Blog</h1>
          <p className="text-gray-600">Insights, teachings, and stories from our spiritual community</p>
        </div>

     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-3">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center text-sm text-gray-500 space-x-4">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.date}
                  </div>
                </div>
                <button className="mt-4 text-orange-600 hover:text-orange-700 font-medium">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Spiritual Teachings",
              "Temple Events",
              "Community Stories",
              "Meditation Guides",
              "Festival Celebrations",
              "Sacred Arts",
              "Youth Corner",
              "Q&A with Priests"
            ].map((category, index) => (
              <a
                key={index}
                href="#"
                className="bg-white p-4 rounded-lg shadow text-center hover:bg-orange-600 hover:text-white transition-colors"
              >
                {category}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-600 mb-6">Stay updated with our latest articles and temple news</p>
          <form className="flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
            <button
              type="submit"
              className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}