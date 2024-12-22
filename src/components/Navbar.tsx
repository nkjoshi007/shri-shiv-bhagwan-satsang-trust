import React from 'react';
import { Menu, Home, Calendar, Heart, Users, Image, BookOpen, Phone, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-orange-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="h-8 w-8" />
            <span className="font-bold text-xl">Shri Shiv Bhagwan Satsang Trust</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <NavLink to="/" icon={<Home className="h-4 w-4" />} text="Home" />
            <NavLink to="/events" icon={<Calendar className="h-4 w-4" />} text="Events" />
            <NavLink to="/donate" icon={<Heart className="h-4 w-4" />} text="Donate" />
            <NavLink to="/volunteer" icon={<Users className="h-4 w-4" />} text="Volunteer" />
            <NavLink to="/gallery" icon={<Image className="h-4 w-4" />} text="Gallery" />
            <NavLink to="/blog" icon={<BookOpen className="h-4 w-4" />} text="Blog" />
            <NavLink to="/contact" icon={<Phone className="h-4 w-4" />} text="Contact" />
            <NavLink to="/news" icon={<Bell className="h-4 w-4" />} text="News" />
          </div>

          <button className="md:hidden">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ to, icon, text }: { to: string; icon: React.ReactNode; text: string }) {
  return (
    <Link to={to} className="flex items-center space-x-1 hover:text-orange-200 transition-colors">
      {icon}
      <span>{text}</span>
    </Link>
  );
}