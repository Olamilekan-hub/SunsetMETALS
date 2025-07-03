import { companyInfo } from '@/data';
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import { Breadcrumbs1 } from '@/components/ui/Breadcrumb';

export default function Contact() {
  return (
    <main className="">
        
              {/* Breadcrumb */}
              <Breadcrumbs1
                crumbs={{
                  subpage1: "contact",
                }}
              />
    
      {/* Page Header */}
      <section className="relative bg-[url('/image.png')] bg-cover bg-center bg-no-repeat py-12 lg:py-32 after:absolute after:inset-0 after:bg-black after:opacity-40">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-2xl lg:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-metal-100 leading-relaxed">
              Get in touch with our metal roofing experts for technical support, 
              quotes, and project consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-[#8D9E76]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Details */}
              <div>
                <h2 className="text-4xl font-bold text-gray-100 mb-8">
                  Get In Touch
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-sunset-500 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-100">Phone</h3>
                      <p className="text-gray-200">{companyInfo.contact.phone}</p>
                      <p className="text-sm text-gray-200">Monday - Friday, 8:00 AM - 5:00 PM MST</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-sunset-500 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-100">Email</h3>
                      <p className="text-gray-200">{companyInfo.contact.email}</p>
                      <p className="text-sm text-gray-200">We&apos;ll respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-sunset-500 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-100">Address</h3>
                      <p className="text-gray-200">{companyInfo.contact.address}</p>
                      <p className="text-sm text-gray-200">Visit our facility by appointment</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-sunset-500 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-100">Business Hours</h3>
                      <div className="text-gray-200 space-y-1">
                        <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                        <p>Saturday: 9:00 AM - 3:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-2xl font-bold text-gray-100 mb-4">
                    Our Services
                  </h3>
                  <ul className="space-y-2 text-gray-200">
                    {companyInfo.services.map((service, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-sunset-500 rounded-full mr-3"></span>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-[#3A4A35] p-8 rounded-xl">
                <h2 className="text-3xl font-bold text-gray-100 mb-6">
                  Send Us a Message
                </h2>
                <form action="https://formsubmit.co/3aa1d68990c14b55c9a100d511ea22c0" method="POST" className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-200 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A4A35] focus:border-transparent text-gray-200"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-200 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A4A35] focus:border-transparent text-gray-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A4A35] focus:border-transparent text-gray-200"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-200 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A4A35] focus:border-transparent text-gray-200"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-200 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A4A35] focus:border-transparent text-gray-200"
                    >
                      <option value="">Select a subject</option>
                      <option value="quote">Request a Quote</option>
                      <option value="technical">Technical Support</option>
                      <option value="products">Product Information</option>
                      <option value="colors">Color Samples</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A4A35] focus:border-transparent "
                      placeholder="Please provide details about your project or inquiry..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#f7931e] text-white px-6 py-4 rounded-lg hover:bg-sunset-600 transition-colors font-semibold flex items-center justify-center space-x-2"
                  >
                    <MessageSquare className="h-5 w-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-[#8D9E76] border-t border-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-100 mb-8 text-center">
              Visit Our Facility
            </h2>
            <div className="bg-[#3A4A35] border border-[#3A4A35] shadow-md shadow-[#3A4A35] text-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-video w-full">
                <iframe
                  title="Facility Location"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(companyInfo.contact.address)}&output=embed`}
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-100 mb-2">
                  Facility Information
                </h3>
                <p className="text-gray-100 mb-4">
                  Our modern manufacturing facility features state-of-the-art equipment 
                  for custom metal forming and on-site metal rolling capabilities. 
                  Visits are available by appointment.
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="bg-[#8D9E76] text-sunset-800 px-3 py-1 rounded-full text-sm">
                    Manufacturing Facility
                  </span>
                  <span className="bg-[#8D9E76] text-forest-800 px-3 py-1 rounded-full text-sm">
                    On-site Rolling
                  </span>
                  <span className="bg-[#8D9E76] text-metal-800 px-3 py-1 rounded-full text-sm">
                    Color Samples Available
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="bg-[#8D9E76] py-10 border-t border-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-100 mb-8">
              Need Immediate Assistance?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link 
                href="/quote"
                className="bg-sunset-500 text-white p-6 rounded-xl hover:bg-sunset-600 transition-colors group bg-[#3A4A35] shadow-lg shadow-[#3A4A35]"
              >
                <MessageSquare className="h-8 w-8 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold mb-2">Get a Quote</h3>
                <p className="text-sunset-100">Fast, detailed quotes for your project</p>
              </Link>
              <a 
                href={`tel:${companyInfo.contact.phone}`}
                className="bg-forest-600 text-white p-6 rounded-xl hover:bg-forest-700 transition-colors group bg-[#3A4A35] shadow-lg shadow-[#3A4A35]"
              >
                <Phone className="h-8 w-8 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold mb-2">Call Now</h3>
                <p className="text-forest-100">Speak with an expert today</p>
              </a>
              <a 
                href={`mailto:${companyInfo.contact.email}`}
                className="bg-metal-600 text-white p-6 rounded-xl hover:bg-metal-700 transition-colors group bg-[#3A4A35] shadow-lg shadow-[#3A4A35]"
              >
                <Mail className="h-8 w-8 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                <p className="text-metal-100">Detailed inquiries welcome</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
