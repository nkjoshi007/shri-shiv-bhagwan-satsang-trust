import React, { useState } from 'react';
import { CreditCard, Heart } from 'lucide-react';

export default function Donate() {
  const [amount, setAmount] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle donation submission
    console.log({ amount, name, email });
  };

  return (
    <div className="min-h-screen bg-orange-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <Heart className="h-12 w-12 text-orange-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Support Our Temple</h1>
          <p className="text-gray-600">Your generous donations help us maintain the temple and support our community programs</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Donation Amount
                </label>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {['$11', '$21', '$51', '$101'].map((value) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => setAmount(value.slice(1))}
                      className={`p-3 text-center rounded-lg border ${
                        amount === value.slice(1)
                          ? 'bg-orange-600 text-white border-orange-600'
                          : 'border-gray-300 hover:border-orange-600'
                      }`}
                    >
                      {value}
                    </button>
                  ))}
                </div>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Other amount"
                    className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="border-t pt-6">
              <button
                type="submit"
                className="w-full bg-orange-600 text-white py-3 px-4 rounded-lg hover:bg-orange-700 transition-colors flex items-center justify-center space-x-2"
              >
                <CreditCard className="h-5 w-5" />
                <span>Proceed to Payment</span>
              </button>
            </div>
          </form>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Other Ways to Contribute</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Material Donations</h3>
              <p className="text-gray-600">We accept donations of:</p>
              <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Fresh flowers for daily rituals</li>
                <li>Food items for prasad</li>
                <li>Oil for temple lamps</li>
                <li>Books for temple library</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Volunteer Your Time</h3>
              <p className="text-gray-600">
                Consider volunteering for temple activities and events. Your time and skills are valuable contributions to our community.
              </p>
              <a href="/volunteer" className="text-orange-600 hover:text-orange-700 mt-2 inline-block">
                Learn more about volunteering →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}