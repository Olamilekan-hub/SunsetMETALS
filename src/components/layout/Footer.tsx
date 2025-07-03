import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import { companyInfo } from '@/data';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-green text-white z-10 relative">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Column 1: Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-sunset-orange">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-sunset-orange mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">{companyInfo.contact.name}</p>
                  <p>{companyInfo.contact.phone}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-sunset-orange flex-shrink-0" />
                <a 
                  href={`mailto:${companyInfo.contact.email}`}
                  className="hover:text-sunset-orange transition-colors"
                >
                  {companyInfo.contact.email}
                </a>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-sunset-orange mt-1 flex-shrink-0" />
                <div>
                  <p>{companyInfo.contact.address}</p>
                </div>
              </div>

              <div className="pt-4">
                <h4 className="font-medium mb-2">Business Hours</h4>
                <p className="text-sm text-gray-300">Monday - Friday: 8:00 AM - 5:00 PM</p>
                <p className="text-sm text-gray-300">Saturday: 9:00 AM - 3:00 PM</p>
                <p className="text-sm text-gray-300">Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-sunset-orange">Quick Links</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <Link href="/about" className="block hover:text-sunset-orange transition-colors">
                  About Us
                </Link>
                <Link href="/products" className="block hover:text-sunset-orange transition-colors">
                  Products
                </Link>
                <Link href="/colours" className="block hover:text-sunset-orange transition-colors">
                  Colours
                </Link>
                <Link href="/gallery" className="block hover:text-sunset-orange transition-colors">
                  Gallery
                </Link>
              </div>
              <div className="space-y-3">
                <Link href="/quote" className="block hover:text-sunset-orange transition-colors">
                  Request Quote
                </Link>
                <Link href="/contact" className="block hover:text-sunset-orange transition-colors">
                  Contact
                </Link>
                <Link href="#" className="block hover:text-sunset-orange transition-colors">
                  Metal Profiles
                </Link>
                <Link href="#" className="block hover:text-sunset-orange transition-colors">
                  Flashings
                </Link>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="font-medium mb-3">Popular Categories</h4>
              <div className="space-y-2 text-sm">
                <Link href="/products/profiles/standing-seam" className="block text-gray-300 hover:text-sunset-orange transition-colors">
                  Standing Seam Roofing
                </Link>
                <Link href="/colours/classic" className="block text-gray-300 hover:text-sunset-orange transition-colors">
                  Classic Colours
                </Link>
                <Link href="/colours/warranty" className="block text-gray-300 hover:text-sunset-orange transition-colors">
                  Warranty Information
                </Link>
              </div>
            </div>
          </div>

          {/* Column 3: Get Social & Location */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-sunset-orange">Get Location</h3>
            
            {/* Social Media Links */}
            {/* <div className="mb-6">
              <h4 className="font-medium mb-3">Follow Us</h4>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-sunset-orange rounded-full flex items-center justify-center hover:bg-sunset-red transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-sunset-orange rounded-full flex items-center justify-center hover:bg-sunset-red transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-sunset-orange rounded-full flex items-center justify-center hover:bg-sunset-red transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-sunset-orange rounded-full flex items-center justify-center hover:bg-sunset-red transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div> */}

            {/* Service Area */}
            <div className="mb-6">
              <h4 className="font-medium mb-3">Service Area</h4>
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-sm text-gray-300 mb-2">We serve throughout Alberta and beyond</p>
                <p className="text-xs text-gray-400">Ask for delivery details and pricing</p>
              </div>
            </div>

            {/* Newsletter Signup */}
            {/* <div className="mb-6">
              <h4 className="font-medium mb-3">Stay Updated</h4>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 rounded text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-sunset-orange"
                />
                <button
                  type="submit"
                  className="bg-sunset-orange hover:bg-sunset-red px-4 py-2 rounded text-sm font-medium transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div> */}

            {/* Canadian Made Badge */}
            <div className="bg-gradient-sunset rounded-lg p-4 text-center">
              <p className="font-bold text-lg">🍁 Proudly Canadian Made</p>
              <p className="text-sm opacity-90">Quality Alberta Manufacturing</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-300">
              © {currentYear} {companyInfo.name} - All Rights Reserved
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-gray-300 hover:text-sunset-orange transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-300 hover:text-sunset-orange transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
