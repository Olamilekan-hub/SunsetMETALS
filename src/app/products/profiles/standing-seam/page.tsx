'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  Thermometer, 
  Wind,
  CheckCircle,
  X,
  ZoomIn
} from 'lucide-react';
import ModelViewer3D from '@/components/3d/ModelViewer3D';
import ColorGrid from '@/components/ui/ColorGrid';
import { relatedProducts } from '@/data/index';
import Breadcrumbs from '@/components/ui/Breadcrumb';

const standingSeamSpecs = {
  profile: 'Standing Seam',
  panelWidth: '16" (406mm)',
  seamHeight: '1.5" (38mm)',
  coverage: '15" (381mm)',
  thickness: '24 gauge (0.024") or 26 gauge (0.019")',
  materials: ['Galvalume', 'Aluminum', 'Copper', 'Zinc'],
  finishes: ['PVDF', 'Polyester', 'Natural'],
  slopeMin: '1:12 (4.8°)',
  windRating: '185 mph (298 km/h)',
  thermalMovement: 'Accommodated by clips',
  warranty: {
    paint: '40 years',
    substrate: '25 years',
    perforation: '20 years'
  }
};

const features = [
  {
    icon: Shield,
    title: 'Superior Weather Protection',
    description: 'Raised seams and concealed fasteners prevent water infiltration'
  },
  {
    icon: Wind,
    title: 'High Wind Resistance',
    description: 'Engineered to withstand winds up to 185 mph when properly installed'
  },
  {
    icon: Thermometer,
    title: 'Thermal Movement',
    description: 'Floating clip system allows for natural expansion and contraction'
  },
  {
    icon: CheckCircle,
    title: 'No Exposed Fasteners',
    description: 'Clean aesthetic with all fasteners hidden beneath the panel'
  }
];

const applications = [
  'Residential roofing',
  'Commercial buildings',
  'Architectural projects',
  'Historic restorations',
  'High-end residential',
  'Institutional buildings'
];

// Fullscreen Image Modal Component
const FullscreenImageModal = ({ isOpen, onClose, imageSrc, imageAlt }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-60 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Image container */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="relative max-w-4xl max-h-full w-full h-full flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative w-full h-full max-h-[80vh]">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 80vw"
              priority
            />
          </div>
        </motion.div>

        {/* Instructions text */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/70 text-sm">
          Click anywhere to close
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default function StandingSeamPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [show3D, setShow3D] = useState(false);
  const [isFullscreenOpen, setIsFullscreenOpen] = useState(false);

  const productImageSrc = "/profiles/standing seam/standing seam orange.jpg";
  const productImageAlt = "Standing Seam Profile";

  const openFullscreen = () => {
    if (!show3D) { // Only open fullscreen for the photo, not 3D model
      setIsFullscreenOpen(true);
    }
  };

  const closeFullscreen = () => {
    setIsFullscreenOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sunset-orange/5 to-metal-light">
      {/* Breadcrumb */}
      <Breadcrumbs
        crumbs={{
          subpage1: "products",
          subpage2: "profiles",
          subpage3: "Standing Seam"
        }}
      />

      {/* Product Header */}
      <div className="py-12 bg-[url('/image.png')] bg-cover bg-center bg-no-repeat relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-[#FF8A33] mb-4">
                Standing Seam Profile
              </h1>
              <p className="text-xl text-gray-200 mb-6">
                Premium architectural metal roofing with concealed fasteners and superior weather protection.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                {show3D ? (
                  <ModelViewer3D
                    src="/models/standing-seam-profile.glb"
                    alt="Standing Seam Profile 3D Model"
                    className="w-full h-64"
                    cameraOrbit="45deg 75deg 105%"
                    minCameraOrbit="auto auto 50%"
                    maxCameraOrbit="auto auto 200%"
                    fieldOfView="auto"
                    environmentImage="/models/cinematic.hdr"
                    shadowIntensity="0.7"
                    shadowSoftness="0.3"
                    exposure="1.0"
                    tone="commerce"
                  />
                ) : (
                  <div 
                    className="relative h-64 cursor-pointer group"
                    onClick={openFullscreen}
                  >
                    <Image
                      src={productImageSrc}
                      alt={productImageAlt}
                      fill
                      className="object-fill rounded transition-transform group-hover:scale-105"
                    />
                    {/* Zoom indicator */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded flex items-center justify-center">
                      <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                )}
                <button
                  onClick={() => setShow3D(!show3D)}
                  className="w-full mt-4 bg-white/20 hover:bg-white/30 text-white py-2 px-4 rounded font-medium transition-colors"
                >
                  {show3D ? 'View Photo' : 'View 3D Model'}
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      <div className='bg-[#8D9E76] w-full'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Tab Navigation */}
          <div className="mb-8">
            <div className="border-b border-[#3A4A35]">
              <nav className="-mb-px flex space-x-8">
                {[
                  { id: 'overview', label: 'Overview' },
                  { id: 'specifications', label: 'Specifications' },
                  { id: 'colors', label: 'Available Colors' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === tab.id
                        ? 'border-[#3A4A35] text-[#3A4A35]'
                        : 'border-transparent text-gray-100 hover:text-[#3A4A35] hover:border-[#3A4A35]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Tab Content */}
          <div className="mb-12">
            {activeTab === 'overview' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
              >
                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-white">
                  {features.map((feature) => (
                    <div key={feature.title} className="bg-[#5A6B4F] rounded-lg p-6 shadow-lg">
                      <feature.icon className="h-12 w-12 text-white mb-4" />
                      <h3 className="text-lg font-bold text-metal-dark mb-2">
                        {feature.title}
                      </h3>
                      <p className="">{feature.description}</p>
                    </div>
                  ))}
                </div>

                {/* Applications */}
                <div className="bg-[#5A6B4F] text-white rounded-lg p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-metal-dark mb-6">Ideal Applications</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {applications.map((app) => (
                      <div key={app} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-gray-100 mr-3" />
                        <span className="">{app}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'specifications' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-[#5A6B4F] text-white rounded-lg p-8 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-metal-dark mb-6">Technical Specifications</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex justify-between py-2 border-b">
                      <span className="font-medium">Panel Width:</span>
                      <span>{standingSeamSpecs.panelWidth}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="font-medium">Seam Height:</span>
                      <span>{standingSeamSpecs.seamHeight}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="font-medium">Coverage Width:</span>
                      <span>{standingSeamSpecs.coverage}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="font-medium">Material Thickness:</span>
                      <span>{standingSeamSpecs.thickness}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="font-medium">Minimum Slope:</span>
                      <span>{standingSeamSpecs.slopeMin}</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between py-2 border-b">
                      <span className="font-medium">Wind Rating:</span>
                      <span>{standingSeamSpecs.windRating}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="font-medium">Paint Warranty:</span>
                      <span>{standingSeamSpecs.warranty.paint}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="font-medium">Substrate Warranty:</span>
                      <span>{standingSeamSpecs.warranty.substrate}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="font-medium">Materials Available:</span>
                      <span>{standingSeamSpecs.materials.join(', ')}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'colors' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <ColorGrid colors={[
                  { 
                    name: 'antique linen', 
                    image: '/colors/classic colours/antique linen.png' 
                  },
                  { 
                    name: 'heron-blue', 
                    image: '/colors/classic colours/heron-blue.png' 
                  },
                  { 
                    name: "spruce green", 
                    image: '/colors/classic colours/coffee brown.png' 
                  },
                  { 
                    name: 'Colonial Red', 
                    image: '/colors/classic colours/spruce green.png',
                  },
                  { 
                    name: 'metro brown', 
                    image: '/colors/classic colours/metro brown.png',
                  }
                ]} />
              </motion.div>
            )}
          </div>

          {/* Related Products */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-8">Related Products</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedProducts.map((product) => (
                <Link
                  key={product.name}
                  href={product.href}
                  className="bg- rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group border border-[#3A4A35]"
                >
                  <div className="relative h-48">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-fill group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 border border-[#3A4A35]">
                    <h3 className="font-bold text-white group-hover:text-[#3A4A35] transition-colors">
                      {product.name}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* CTA Section */}
      <section className="text-center border-t border-white py-12 bg-[#8D9E76]">
        <div className="bg-gradient-to-r from-forest-green to-sunset-orange rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Contact our experts to discuss your Standing Seam Profile roofing project and get a custom quote.
          </p>
          <div className="space-x-4">
            <Link 
              href="/quote"
              className="inline-block bg-[#FF8A33] text-forest-green px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Request Quote
            </Link>
            <Link 
              href="/contact"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-forest-green transition-colors"
            >
              Contact Expert
            </Link>
          </div>
        </div>
      </section>

      {/* Fullscreen Image Modal */}
      <FullscreenImageModal
        isOpen={isFullscreenOpen}
        onClose={closeFullscreen}
        imageSrc={productImageSrc}
        imageAlt={productImageAlt}
      />
    </div>
  );
}