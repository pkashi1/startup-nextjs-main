"use client";

import { useTheme } from "next-themes";
import { Send } from 'lucide-react';

const NewsLatterBox = () => {
  const { theme } = useTheme();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg relative overflow-hidden">
      <h3 className="text-2xl font-semibold mb-4 text-black dark:text-white">
        Stay Updated
      </h3>
      <p className="mb-6 text-gray-600 dark:text-gray-300">
        Subscribe for the latest project news, safety alerts, and career openings.
      </p>
      <form className="flex">
        <input
          type="email"
          name="email"
          placeholder="Your email address"
          className="flex-grow rounded-l-lg border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 px-4 py-3 focus:ring-primary focus:border-primary outline-none"
        />
        <button
          type="submit"
          className="bg-primary hover:bg-primary/90 text-white px-5 py-3 rounded-r-lg flex items-center"
        >
          <Send className="w-5 h-5 mr-2" /> Subscribe
        </button>
      </form>

      {/* Decorative SVGs */}
      <span className="absolute top-4 left-4 opacity-30">
        <svg width="57" height="65" viewBox="0 0 57 65" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.4076 15.9573L39.1541 64.0714L56.4489 0.1608L0.4076 15.9573Z"
            fill={`url(#grad1)`} opacity="0.5" />
          <defs>
            <linearGradient id="grad1" x1="-18.3187" y1="55.1044" x2="37.161" y2="15.3509" gradientUnits="userSpaceOnUse">
              <stop stopColor={theme === "light" ? "#4A6CF7" : "#fff"} stopOpacity="0.62" />
              <stop offset="1" stopColor={theme === "light" ? "#4A6CF7" : "#fff"} stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </span>
    </div>
  );
};

export default NewsLatterBox;
