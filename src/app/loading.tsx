'use client';

import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sunset-orange/5 to-metal-light flex items-center justify-center">
      <div className="text-center">
        {/* Animated Logo/Icon */}
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 2, repeat: Infinity, ease: "linear" },
            scale: { duration: 1, repeat: Infinity, ease: "easeInOut" }
          }}
          className="w-16 h-16 mx-auto mb-6"
        >
          <div className="w-full h-full bg-gradient-to-r from-sunset-orange to-forest-green rounded-lg shadow-lg flex items-center justify-center">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z"
              />
            </svg>
          </div>
        </motion.div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-metal-dark mb-2">
            Loading...
          </h2>
          <p className="text-gray-600">
            Preparing your SunSet Metal experience
          </p>
        </motion.div>

        {/* Loading Dots */}
        <div className="flex justify-center space-x-2 mt-6">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              animate={{
                y: [0, -10, 0],
                backgroundColor: ['#ef4444', '#22c55e', '#ef4444']
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: index * 0.2
              }}
              className="w-3 h-3 rounded-full bg-sunset-orange"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
