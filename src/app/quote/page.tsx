import { products } from '@/data';
import { Calculator, Upload, FileText, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function Quote() {
  return (
    <main className="">
      {/* Quote Benefits */}
      <section className="py-16 bg-[#8D9E76] border-t border-white">
            <h1 className="text-2xl md:text:3xl lg:text-5xl font-bold bg-[#3A4A35] w-full mb-2 py-4 pl-6 md:pl-12 lg:pl-[20%] mb-8 text-gray-50">Request a Quote</h1>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text:3xl font-bold text-gray-100 mb-8 text-center">
              Why Request a Quote?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#3A4A35] shadow-md shadow-[#3A4A35] p-6 rounded-xl shadow-lg text-center">
                <Calculator className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">
                  Accurate Pricing
                </h3>
                <p className="text-gray-100">
                  Get detailed, project-specific pricing based on your exact requirements 
                  and specifications.
                </p>
              </div>
              <div className="bg-[#3A4A35] shadow-md shadow-[#3A4A35] p-6 rounded-xl shadow-lg text-center">
                <FileText className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">
                  Expert Recommendations
                </h3>
                <p className="text-gray-100">
                  Our technical team will recommend the best products and colors 
                  for your specific application.
                </p>
              </div>
              <div className="bg-[#3A4A35] shadow-md shadow-[#3A4A35] p-6 rounded-xl shadow-lg text-center">
                <CheckCircle className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">
                  Fast Response
                </h3>
                <p className="text-gray-100">
                  Receive your detailed quote within 24-48 hours of submitting 
                  your request.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20 bg-[#8D9E76] bg-cover bg-center bg-no-repeat border-t border-white  ">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#3A4A35] rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-100 mb-8 text-center">
                Project Information
              </h2>
              
              <form action="https://formsubmit.co/3aa1d68990c14b55c9a100d511ea22c0" method="POST" className="space-y-8">
                {/* Contact Information */}
                <div className='!text-whte'>
                  <h3 className="text-xl font-bold text-gray-100 mb-4">
                    Contact Information
                  </h3>
                  <div className="!text-whte grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className='!text-whte'>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-100 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="!text-whte w-full px-4 py-3 border border-gray-100 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent text-gray-200"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-100 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="!text-whte w-full px-4 py-3 border border-gray-100 rounded-lg focus:ring-2 focus:ring-sunset-500 focus:border-transparent text-gray-200"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-100 mb-2">
                        Company/Organization
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="w-full px-4 py-3 border border-gray-100 rounded-lg focus:ring-2 focus:ring-sunset-500 focus:border-transparent text-gray-200"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-100 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="!text-whte w-full px-4 py-3 border border-gray-100 rounded-lg focus:ring-2 focus:ring-sunset-500 text-gray-200 focus:border-transparent"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-100 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="!text-whte w-full px-4 py-3 border border-gray-100 rounded-lg focus:ring-2 focus:ring-sunset-500 text-gray-200 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <h3 className="text-xl font-bold text-gray-100 mb-4">
                    Project Details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="projectType" className="block text-sm font-medium text-gray-100 mb-2">
                        Project Type *
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        required
                        className="!text-whte !text-whte w-full px-4 py-3 border border-gray-100 rounded-lg focus:ring-2 focus:ring-sunset-500 text-gray-200 focus:border-transparent"
                      >
                        <option value="">Select project type</option>
                        <option value="residential">Residential</option>
                        <option value="commercial">Commercial</option>
                        <option value="agricultural">Agricultural</option>
                        <option value="industrial">Industrial</option>
                        <option value="renovation">Renovation</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-gray-100 mb-2">
                        Project Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        className="w-full px-4 py-3 border border-gray-100 !text-whte rounded-lg focus:ring-2 focus:ring-sunset-500 text-gray-200 focus:border-transparent"
                      >
                        <option value="">Select timeline</option>
                        <option value="immediate">Immediate (1-2 weeks)</option>
                        <option value="soon">Soon (1-2 months)</option>
                        <option value="planning">Planning (3-6 months)</option>
                        <option value="future">Future planning (6+ months)</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="location" className="block text-sm font-medium text-gray-100 mb-2">
                        Project Location (City, Province) *
                      </label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        required
                        className="!text-whte w-full px-4 py-3 border border-gray-100 rounded-lg focus:ring-2 focus:ring-sunset-500 text-gray-200 focus:border-transparent"
                        placeholder="e.g., Calgary, AB"
                      />
                    </div>
                  </div>
                </div>

                {/* Product Selection */}
                <div>
                  <h3 className="text-xl font-bold text-gray-100 mb-4">
                    Product Requirements
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-100 mb-3">
                        Roofing Profile(s) of Interest
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 !text-whte">
                        {products.map((product) => (
                          <label key={product.id} className="flex items-center space-x-3 !text-whte">
                            <input
                              type="checkbox"
                              name="products"
                              value={product.id}
                              className=" !text-whte h-4 w-4 focus:ring-sunset-500 border-gray-300 rounded"
                            />
                            <span className="text-gray-100">{product.name}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="squareFootage" className="block text-sm font-medium text-gray-100 mb-2">
                        Approximate Square Footage
                      </label>
                      <input
                        type="text"
                        id="squareFootage"
                        name="squareFootage"
                        className="!text-whte w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sunset-500 text-gray-200 focus:border-transparent"
                        placeholder="e.g., 2500 sq ft"
                      />
                    </div>

                    <div>
                      <label htmlFor="colorPreferences" className="block text-sm font-medium text-gray-100 mb-2">
                        Color Preferences
                      </label>
                      <select
                        id="colorPreferences"
                        name="colorPreferences"
                        className="w-full px-4 py-3 border border-gray-100 !text-whte rounded-lg focus:ring-2 focus:ring-sunset-500 text-gray-200 focus:border-transparent"
                      >
                        <option value="">Select color family</option>
                        <option value="neutral">Neutral Colors</option>
                        <option value="earth">Earth Tones</option>
                        <option value="bold">Bold Colors</option>
                        <option value="metallic">Metallic Finishes</option>
                        <option value="custom">Custom Color Match</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div>
                  <h3 className="text-xl font-bold text-gray-100 mb-4">
                    Additional Information
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-100 mb-2">
                        Project Description
                      </label>
                      <textarea
                        id="projectDescription"
                        name="projectDescription"
                        rows={4}
                        className="!text-whte w-full px-4 py-3 border border-gray-100 rounded-lg focus:ring-2 focus:ring-sunset-500 text-gray-200 focus:border-transparent"
                        placeholder="Please describe your project requirements, special considerations, or questions..."
                      ></textarea>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-100 mb-3">
                        File Attachments (Optional)
                      </label>
                      <div className="border-2 border-dashed border-gray-100 rounded-lg p-6 text-center">
                        <Upload className="h-8 w-8 text-gray-100 mx-auto mb-2" />
                        <p className="text-gray-100 mb-2">
                          Upload plans, drawings, or photos
                        </p>
                        <p className="text-sm text-gray-100">
                          PDF, JPG, PNG up to 10MB each
                        </p>
                        <input
                          type="file"
                          multiple
                          accept=".pdf,.jpg,.jpeg,.png"
                          className="hidden"
                          id="fileUpload"
                        />
                        <label
                          htmlFor="fileUpload"
                          className="!text-whte mt-3 inline-block bg-sunset-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-sunset-600 transition-colors"
                        >
                          Choose Files
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="border-t border-gray-100 pt-8">
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                      type="submit"
                      className="px-8 py-4 bg-sunset-orange 500 text-gray-100 rounded-lg hover:bg-sunset-600 transition-colors font-semibold flex items-center justify-center space-x-2"
                    >
                      {/* <Calculator className="h-5 w-5" /> */}
                      <span>Submit Quote Request</span>
                    </button>
                    <Link
                      href="/contact"
                      className="px-8 py-4 border-2 border-gray-100 text-gray-100 rounded-lg hover:bg-sunset-50 transition-colors font-semibold text-center"
                    >
                      Contact Us Instead
                    </Link>
                  </div>
                  <p className="text-center text-sm text-gray-100 mt-4">
                    * Required fields. We&apos;ll respond to your quote request within 24-48 hours.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-20 bg-[#8D9E76] border-t border-b border-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-100 mb-8">
              What Happens Next?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 rounded-xl bg-[#3A4A35] shadow-md shadow-[#3A4A35]">
                <div className="text-2xl font-bold text-gray-100 mb-3">1</div>
                <h3 className="text-lg font-semibold text-gray-100 mb-2">
                  Review & Analysis
                </h3>
                <p className="text-gray-100">
                  Our team reviews your requirements and analyzes the best solutions 
                  for your project.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-[#3A4A35] shadow-md shadow-[#3A4A35]">
                <div className="text-2xl font-bold text-gray-100 mb-3">2</div>
                <h3 className="text-lg font-semibold text-gray-100 mb-2">
                  Quote Preparation
                </h3>
                <p className="text-gray-100">
                  We prepare a detailed quote with product recommendations, 
                  pricing, and delivery timeline.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-[#3A4A35] shadow-md shadow-[#3A4A35]">
                <div className="text-2xl font-bold text-gray-100 mb-3">3</div>
                <h3 className="text-lg font-semibold text-gray-100 mb-2">
                  Follow-up Call
                </h3>
                <p className="text-gray-100">
                  We&apos;ll contact you to discuss the quote and answer any questions 
                  you may have.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
