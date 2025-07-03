'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Search, Phone } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sunset-orange/5 to-metal-light flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* 404 Number */}
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mb-8"
          >
            <h1 className="text-9xl font-bold text-transparent bg-gradient-to-r from-sunset-orange to-forest-green bg-clip-text">
              404
            </h1>
          </motion.div>

          {/* Error Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-metal-dark mb-4">
              Page Not Found
            </h2>
            <p className="text-gray-600 text-lg mb-2">
              The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>
            <p className="text-gray-500">
              Don&apos;t worry, our metal roofing is more reliable than this error page!
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center"
          >
            <Link
              href="/"
              className="inline-flex items-center justify-center w-full sm:w-auto bg-gradient-to-r from-forest-green to-sunset-orange text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow"
            >
              <Home className="h-5 w-5 mr-2" />
              Back to Home
            </Link>
            
            <Link
              href="/products"
              className="inline-flex items-center justify-center w-full sm:w-auto bg-white text-metal-dark border-2 border-gray-200 px-6 py-3 rounded-lg font-semibold hover:border-sunset-orange hover:text-sunset-orange transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              View Products
            </Link>
          </motion.div>

          {/* Additional Help */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 pt-8 border-t border-gray-200"
          >
            <h3 className="text-lg font-semibold text-metal-dark mb-4">
              Need Help Finding Something?
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <Link
                href="/search"
                className="flex items-center justify-center bg-gray-50 hover:bg-gray-100 p-4 rounded-lg transition-colors"
              >
                <Search className="h-5 w-5 text-sunset-orange mr-3" />
                <div className="text-left">
                  <div className="font-medium text-metal-dark">Search Our Site</div>
                  <div className="text-sm text-gray-500">Find products, colors, and resources</div>
                </div>
              </Link>
              
              <Link
                href="/contact"
                className="flex items-center justify-center bg-gray-50 hover:bg-gray-100 p-4 rounded-lg transition-colors"
              >
                <Phone className="h-5 w-5 text-sunset-orange mr-3" />
                <div className="text-left">
                  <div className="font-medium text-metal-dark">Contact Us</div>
                  <div className="text-sm text-gray-500">Speak with our experts</div>
                </div>
              </Link>
            </div>
          </motion.div>

          {/* Popular Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-8"
          >
            <h4 className="text-md font-medium text-gray-700 mb-4">Popular Pages</h4>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                { label: 'Standing Seam', href: '/products/profiles/standing-seam' },
                { label: 'Color Options', href: '/colours' },
                { label: 'Gallery', href: '/gallery' },
                { label: 'Get Quote', href: '/quote' },
                { label: 'Resources', href: '/resources' },
                { label: 'About Us', href: '/about' }
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-gray-600 hover:text-sunset-orange px-3 py-1 rounded border border-gray-200 hover:border-sunset-orange transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
