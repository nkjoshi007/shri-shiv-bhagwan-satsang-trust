import React from 'react';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-orange-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="font-bold text-xl">Shri Shiv Bhagwan Satsang Trust</span>
            </div>
            <p className="text-orange-200">A place of peace, spirituality, and community.</p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-orange-200">
              <li><a href="/events" className="hover:text-white">Events</a></li>
              <li><a href="/donate" className="hover:text-white">Donate</a></li>
              <li><a href="/volunteer" className="hover:text-white">Volunteer</a></li>
              <li><a href="/gallery" className="hover:text-white">Gallery</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2 text-orange-200">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@divinetemple.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>123 Temple Street, City</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Temple Hours</h3>
            <ul className="space-y-2 text-orange-200">
              <li>Monday - Friday: 6:00 AM - 9:00 PM</li>
              <li>Saturday - Sunday: 5:00 AM - 9:30 PM</li>
              <li>Special Events: As announced</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-orange-700 mt-8 pt-8 text-center text-orange-200">
          <p>© 2024 Shri Shiv Bhagwan Satsang Trust. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}