"use client";

import NewsLatterBox from "./NewsLatterBox";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
} from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {/* FORM + SIDEBAR */}
          <div className="w-full lg:w-7/12 px-4 mb-12 lg:mb-0">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
              <h2 className="text-3xl font-bold mb-4 text-black dark:text-white">
                Need Help? Open a Ticket
              </h2>
              <p className="mb-8 text-gray-600 dark:text-gray-300">
                Our support team will get back to you ASAP via email.
              </p>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                      className="mt-2 block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 px-4 py-3 focus:ring-primary focus:border-primary outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                      Your Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="mt-2 block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 px-4 py-3 focus:ring-primary focus:border-primary outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Enter your message"
                    className="mt-2 block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 px-4 py-3 focus:ring-primary focus:border-primary outline-none resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white rounded-lg py-3 font-medium hover:bg-primary/90 transition"
                >
                  Submit Ticket
                </button>
              </form>
            </div>
          </div>

          {/* CONTACT INFO + NEWSLETTER */}
          <div className="w-full lg:w-5/12 px-4 space-y-8">
            {/* Contact Info */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-black dark:text-white">
                Contact Info
              </h3>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-center">
                  <MapPin className="mr-3 text-primary" />
                  4922 Rankin Street, Zachary, LA 70791
                </li>
                <li className="flex items-center">
                  <Phone className="mr-3 text-primary" />
                  (225) 555-1234
                </li>
                <li className="flex items-center">
                  <Mail className="mr-3 text-primary" />
                  info@southernunderground.com
                </li>
                <li className="flex items-center">
                  <Clock className="mr-3 text-primary" />
                  Mon–Fri, 7am–5pm CST
                </li>
              </ul>
            </div>

            {/* Newsletter Signup */}
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
