import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-orange-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <MapPin className="h-12 w-12 text-orange-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-600">We're here to help and answer any questions you might have</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Temple Information</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-orange-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-gray-600">123 Temple Street<br />Cityville, ST 12345</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-orange-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-orange-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">info@divinetemple.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-orange-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 6:00 AM - 9:00 PM<br />
                      Saturday - Sunday: 5:00 AM - 9:30 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Getting Here</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Public Transport</h3>
                  <p className="text-gray-600">
                    Bus routes 12, 15, and 18 stop directly in front of the temple.
                    The nearest subway station is Central Station (Red Line).
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Parking</h3>
                  <p className="text-gray-600">
                    Free parking is available in our temple parking lot.
                    Additional street parking is available on Temple Street.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Location Map</h2>
          <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg">
            {/* Add your map component here */}
            <div className="w-full h-[400px] bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-600">Map will be displayed here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}