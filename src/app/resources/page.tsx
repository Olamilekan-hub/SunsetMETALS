'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Download, FileText, Video, Wrench, Shield, AlertTriangle, CheckCircle } from 'lucide-react';

interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'pdf' | 'video' | 'guide';
  category: string;
  fileSize?: string;
  duration?: string;
  downloadUrl: string;
  thumbnailUrl: string;
}

const resources: Resource[] = [
  {
    id: '1',
    title: 'Standing Seam Installation Guide',
    description: 'Complete step-by-step installation instructions for standing seam metal roofing systems.',
    type: 'pdf',
    category: 'Installation',
    fileSize: '2.3 MB',
    downloadUrl: '/downloads/standing-seam-installation.pdf',
    thumbnailUrl: '/images/technical/standing-seam-guide.jpg'
  },
  {
    id: '2',
    title: 'Corrugated Panel Installation Video',
    description: 'Professional installation demonstration for corrugated metal panels.',
    type: 'video',
    category: 'Installation',
    duration: '12:30',
    downloadUrl: '/videos/corrugated-installation.mp4',
    thumbnailUrl: '/images/technical/corrugated-video.jpg'
  },
  {
    id: '3',
    title: 'Metal Roofing Maintenance Manual',
    description: 'Essential maintenance procedures to maximize the lifespan of your metal roof.',
    type: 'pdf',
    category: 'Maintenance',
    fileSize: '1.8 MB',
    downloadUrl: '/downloads/maintenance-manual.pdf',
    thumbnailUrl: '/images/technical/maintenance-guide.jpg'
  },
  {
    id: '4',
    title: 'Snow Load Calculations',
    description: 'Engineering guidelines for Canadian snow load requirements and calculations.',
    type: 'pdf',
    category: 'Engineering',
    fileSize: '950 KB',
    downloadUrl: '/downloads/snow-load-calculations.pdf',
    thumbnailUrl: '/images/technical/snow-load.jpg'
  },
  {
    id: '5',
    title: 'Fastener Selection Guide',
    description: 'Comprehensive guide to choosing the right fasteners for different applications.',
    type: 'guide',
    category: 'Installation',
    downloadUrl: '/guides/fastener-selection',
    thumbnailUrl: '/images/technical/fasteners.jpg'
  },
  {
    id: '6',
    title: 'Warranty Information',
    description: 'Complete warranty terms, conditions, and claim procedures.',
    type: 'pdf',
    category: 'Warranty',
    fileSize: '1.2 MB',
    downloadUrl: '/downloads/warranty-info.pdf',
    thumbnailUrl: '/images/technical/warranty.jpg'
  }
];

const categories = ['All', 'Installation', 'Maintenance', 'Engineering', 'Warranty'];

const safetyTips = [
  'Always wear appropriate safety equipment including hard hats, safety glasses, and non-slip footwear',
  'Check weather conditions - never work on roofs during storms or high winds',
  'Use proper fall protection equipment and secure ladder placement',
  'Ensure adequate ventilation when using sealants or adhesives',
  'Have a spotter when working at heights and communicate regularly',
  'Keep tools organized and avoid leaving materials on roof edges'
];

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredResources = selectedCategory === 'All' 
    ? resources 
    : resources.filter(resource => resource.category === selectedCategory);

  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'pdf': return FileText;
      case 'video': return Video;
      case 'guide': return Wrench;
      default: return FileText;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sunset-orange/5 to-metal-light">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-metal-dark via-forest-green to-sunset-orange py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Technical Resources
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Professional installation guides, maintenance manuals, and technical documentation 
              for SunSet Metal Forming products.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Safety Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-sunset-orange rounded-lg p-6 mb-12"
        >
          <div className="flex items-start">
            <AlertTriangle className="h-8 w-8 text-sunset-orange mt-1 mr-4 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-bold text-metal-dark mb-2">Safety First</h3>
              <p className="text-gray-700 mb-4">
                Metal roofing installation requires specialized knowledge and safety precautions. 
                We strongly recommend professional installation for all projects.
              </p>
              <ul className="space-y-2">
                {safetyTips.map((tip, index) => (
                  <li key={index} className="flex items-start text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Category Filter */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg shadow-md p-2 inline-flex space-x-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-md font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-sunset-orange text-white shadow-md'
                    : 'text-metal-dark hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredResources.map((resource, index) => {
            const Icon = getResourceIcon(resource.type);
            
            return (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={resource.thumbnailUrl}
                    alt={resource.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-sunset-orange text-white px-3 py-1 rounded-full text-sm font-medium">
                      {resource.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full">
                      <Icon className="h-5 w-5 text-metal-dark" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-metal-dark mb-2">
                    {resource.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {resource.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      {resource.fileSize && (
                        <span className="mr-4">{resource.fileSize}</span>
                      )}
                      {resource.duration && (
                        <span>{resource.duration}</span>
                      )}
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-forest-green to-sunset-orange text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow flex items-center justify-center">
                    <Download className="h-5 w-5 mr-2" />
                    {resource.type === 'video' ? 'Watch' : 'Download'}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Quick Reference */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-metal-dark mb-4">Quick Reference</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Essential specifications and standards for metal roofing projects.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <Shield className="h-12 w-12 text-sunset-orange mb-4" />
              <h3 className="text-lg font-bold text-metal-dark mb-2">Wind Resistance</h3>
              <p className="text-gray-600">Up to 185 mph winds when properly installed</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <Wrench className="h-12 w-12 text-forest-green mb-4" />
              <h3 className="text-lg font-bold text-metal-dark mb-2">Fastener Spacing</h3>
              <p className="text-gray-600">12&quot; on center for corrugated, clips for standing seam</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <FileText className="h-12 w-12 text-sunset-orange mb-4" />
              <h3 className="text-lg font-bold text-metal-dark mb-2">Slope Requirements</h3>
              <p className="text-gray-600">Minimum 1:12 slope for most applications</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <CheckCircle className="h-12 w-12 text-forest-green mb-4" />
              <h3 className="text-lg font-bold text-metal-dark mb-2">Warranty Coverage</h3>
              <p className="text-gray-600">40-year paint, 25-year substrate protection</p>
            </div>
          </div>
        </section>

        {/* Professional Installation CTA */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-forest-green to-sunset-orange rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Need Professional Installation?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
              Our certified installers ensure your roof is installed to the highest standards. 
              Get a quote for professional installation services.
            </p>
            <div className="space-x-4">
              <button className="bg-white text-forest-green px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Find an Installer
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-forest-green transition-colors">
                Get Quote
              </button>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
