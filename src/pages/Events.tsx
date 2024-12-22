import React from 'react';
import { Calendar as CalendarIcon } from 'lucide-react';

export default function Events() {
  const events = [
    {
      date: "March 25, 2024",
      title: "Spring Festival",
      time: "6:00 AM - 9:00 PM",
      description: "Annual spring celebration with special prayers and community feast."
    },
    {
      date: "April 2, 2024",
      title: "New Moon Ceremony",
      time: "7:00 PM - 9:00 PM",
      description: "Special evening prayers and meditation session."
    },
    {
      date: "April 15, 2024",
      title: "Youth Cultural Program",
      time: "4:00 PM - 7:00 PM",
      description: "Showcase of traditional arts and music by temple youth."
    }
  ];

  return (
    <div className="min-h-screen bg-orange-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Upcoming Events</h1>
          <p className="text-gray-600">Join us for these special occasions and celebrations</p>
        </div>

        <div className="grid gap-6">
          {events.map((event, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <CalendarIcon className="h-8 w-8 text-orange-600" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <div className="text-gray-600 mb-2">
                    <p><strong>Date:</strong> {event.date}</p>
                    <p><strong>Time:</strong> {event.time}</p>
                  </div>
                  <p className="text-gray-600">{event.description}</p>
                </div>
                <button className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition-colors">
                  Register
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Regular Prayer Times</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Weekdays</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Morning Aarti: 6:00 AM</li>
                <li>Afternoon Prayers: 12:00 PM</li>
                <li>Evening Aarti: 7:00 PM</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Weekends</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Morning Aarti: 5:30 AM</li>
                <li>Special Prayers: 11:00 AM</li>
                <li>Evening Aarti: 7:30 PM</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}