import React from 'react';
import { Bell, Calendar } from 'lucide-react';

export default function News() {
  const news = [
    {
      title: "Temple Renovation Project Completed",
      date: "March 20, 2024",
      category: "Announcements",
      content: "We are pleased to announce the completion of our temple renovation project. The newly renovated spaces include..."
    },
    {
      title: "Special Prayer Services for Spring Festival",
      date: "March 18, 2024",
      category: "Events",
      content: "Join us for special prayer services during the upcoming Spring Festival. The schedule includes..."
    },
    {
      title: "New Youth Program Launch",
      date: "March 15, 2024",
      category: "Programs",
      content: "We're excited to announce the launch of our new youth program, focusing on spiritual education and cultural activities..."
    }
  ];

  return (
    <div className="min-h-screen bg-orange-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <Bell className="h-12 w-12 text-orange-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">News & Announcements</h1>
          <p className="text-gray-600">Stay updated with the latest happenings at our temple</p>
        </div>

        <div className="grid gap-8">
          {news.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-start justify-between">
                <div>
                  <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-2">
                    {item.category}
                  </span>
                  <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
                  <div className="flex items-center text-gray-500 mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{item.date}</span>
                  </div>
                  <p className="text-gray-600">{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Important Updates</h2>
          <div className="space-y-4">
            <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
              <h3 className="font-semibold text-orange-800">COVID-19 Guidelines</h3>
              <p className="text-orange-600">Please follow all safety protocols when visiting the temple.</p>
            </div>
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h3 className="font-semibold text-blue-800">Parking Information</h3>
              <p className="text-blue-600">Additional parking available during weekend services.</p>
            </div>
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <h3 className="font-semibold text-green-800">Volunteer Opportunities</h3>
              <p className="text-green-600">We're looking for volunteers for upcoming events.</p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors">
            Load More News
          </button>
        </div>
      </div>
    </div>
  );
}