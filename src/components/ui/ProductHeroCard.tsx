'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Eye, ImageIcon } from 'lucide-react';
import ModelViewer3D from '@/components/3d/ModelViewer3D';

interface ProductHeroCardProps {
  product: {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    modelUrl?: string;
    specifications?: {
      gauges?: number[];
      bends?: number;
      girth?: number;
      measurements?: string;
    };
  };
  showGuideButton?: boolean;
  guideButtonText?: string;
  guideButtonLink?: string;
  className?: string;
}

const ProductHeroCard: React.FC<ProductHeroCardProps> = ({
  product,
  showGuideButton = true,
  guideButtonText = 'PRODUCT GUIDE',
  guideButtonLink,
  className = '',
}) => {
  const [show3D, setShow3D] = React.useState(false);

  return (
    <div className={`bg-white rounded-lg shadow-lg overflow-hidden ${className}`}>
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[5rem] cover">
        {/* Left Side - Image/3D Model */}
        <div className="relative bg-gray-50">
          {/* Orange accent frame */}
          <div className="absolute inset-4 border-4 border-sunset-orange rounded-lg z-10 pointer-events-none" />
          
          {!show3D ? (
            <div className="relative h-[100%]">
              <Image
                src='/logo_for_sm_1.png'
                alt={product.name}
                fill
                className="object-cover"
                sizes="100vw, 50vw"
              />
              
              {/* 3D Toggle Button */}
              {product.modelUrl && (
                <button
                  onClick={() => setShow3D(true)}
                  className="absolute top-4 right-4 z-20 bg-sunset-orange hover:bg-sunset-red text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
                  title="View in 3D"
                >
                  <Eye className="w-5 h-5" />
                </button>
              )}
            </div>
          ) : (
            <div className="relative h-full p-8">
              <ModelViewer3D
                src={product.modelUrl!}
                alt={`3D model of ${product.name}`}
                className="h-full"
              />
              
              {/* Back to Image Button */}
              <button
                onClick={() => setShow3D(false)}
                className="absolute top-4 right-4 z-20 bg-gray-700 hover:bg-gray-800 text-white p-3 rounded-full shadow-lg transition-all duration-300"
                title="View Image"
              >
                <ImageIcon className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>

        {/* Right Side - Content */}
        <div className="p-8 flex flex-col justify-center">
          <div>
            {/* Product Name */}
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {product.name}
            </h2>

            {/* Product Description */}
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {product.description}
            </p>

            {/* Specifications */}
            {product.specifications && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Specifications</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {product.specifications.gauges && (
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-2">Available Gauges</h4>
                      <div className="flex gap-2">
                        {product.specifications.gauges.map((gauge) => (
                          <span
                            key={gauge}
                            className="bg-sunset-orange text-white px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {gauge}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {product.specifications.measurements && (
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-2">Measurements</h4>
                      <p className="text-gray-700 text-sm">{product.specifications.measurements}</p>
                    </div>
                  )}
                  
                  {(product.specifications.bends || product.specifications.girth) && (
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-2">Technical Details</h4>
                      {product.specifications.bends && (
                        <p className="text-gray-700 text-sm">Bends: {product.specifications.bends}</p>
                      )}
                      {product.specifications.girth && (
                        <p className="text-gray-700 text-sm">Girth: {product.specifications.girth}</p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {showGuideButton && guideButtonLink && (
                <Link
                  href={guideButtonLink}
                  className="inline-flex items-center justify-center gap-2 bg-gradient-sunset text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  {guideButtonText}
                  <ExternalLink className="w-4 h-4" />
                </Link>
              )}
              
              <Link
                href="/quote"
                className="inline-flex items-center justify-center gap-2 border-2 border-sunset-orange text-sunset-orange px-6 py-3 rounded-lg font-semibold hover:bg-sunset-orange hover:text-white transition-all duration-300"
              >
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHeroCard;
