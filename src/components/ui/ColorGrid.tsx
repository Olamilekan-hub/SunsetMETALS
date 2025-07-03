'use client';

import React, { useState } from 'react';
import { ColorOption, ColorGridProps } from '@/types';
import Image from 'next/image';

const ColorGrid: React.FC<ColorGridProps> = ({
  colors,
  categories,
  title,
  columns = 4,
  showDisclaimer = true,
  className = '',
}) => {
  const [selectedColor, setSelectedColor] = useState<ColorOption | null>(null);

  // Filter colors based on categories
  const filteredColors = categories 
    ? colors.filter(color => categories.includes(color.category? color.category : ''))
    : colors;

  const gridCols = {
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-2 md:grid-cols-4 lg:grid-cols-6',
    6: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6',
  };

  return (
    <div className={`${className}`}>
      {title && (
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-200 mb-3 md:mb-8 text-center">
          {title}
        </h2>
      )}

      {/* Color Grid */}
      <div className={`grid ${gridCols[columns as keyof typeof gridCols]} gap-3  md:gap-6 mb-2 md:mb-8`}>
        {filteredColors.map((color) => (
          <div
            key={color.id}
            className="group cursor-pointer"
            onClick={() => setSelectedColor(color)}
          >
            {/* Color Swatch with Image */}
            <div className="w-full aspect-[4/3] rounded-lg shadow-md group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105 border-2 border-gray-200 group-hover:border-sunset-orange relative overflow-hidden">
                  {/* Actual Image */}
                  <Image
                    src={color.image || '/placeholder-color.png'}
                    alt={color.name}
                    width={100}
                    height={100}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 rounded-lg transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                        <p className="text-sm font-medium text-gray-900">Click to view</p>
                      </div>
                    </div>
                  </div>
            </div>

            {/* Color Name */}
            <div className="mt-3 text-center">
              <h3 className="font-semibold text-white group-hover:text-sunset-orange transition-colors uppercase">
                {color.name}
              </h3>
              {color.description && (
                <p className="text-sm text-gray-200 mt-1">{color.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Disclaimer */}
      {showDisclaimer && (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                <strong>Important Notice:</strong> Colours on chart may be different. Please see us for accurate colour samples.
              </p>
              <div className="mt-3">
                <a
                  href="/contact"
                  className="inline-flex items-center bg-yellow-100 hover:bg-yellow-200 text-yellow-800 px-4 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Request Physical Samples
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Color Detail Modal */}
      {selectedColor && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-gray-900">Color Details</h3>
              <button
                onClick={() => setSelectedColor(null)}
                className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
              >
                ×
              </button>
            </div>

            {/* Large Color Swatch with Image */}
            <div className="w-full h-48 rounded-lg mb-4 border-2 border-gray-200 overflow-hidden">
                <Image
                  src={selectedColor.image || '/placeholder-color.png'}
                  alt={selectedColor.name}
                  width={100}
                  height={100}
                  className="w-full h-full object-cover rounded-lg"
                />
            </div>

            {/* Color Information */}
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-gray-900 uppercase">{selectedColor.name}</h4>
                <p className="text-sm text-gray-600">Image: {selectedColor.image}</p>
              </div>

              {selectedColor.description && (
                <div>
                  <h5 className="font-medium text-gray-900 mb-1">Description</h5>
                  <p className="text-sm text-gray-600">{selectedColor.description}</p>
                </div>
              )}

              <div>
                <h5 className="font-medium text-gray-900 mb-1">Gauges</h5>
                <span className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm capitalize">
                  {selectedColor.category}
                </span>
              </div>

              <div>
                <h5 className="font-medium text-gray-900 mb-1">Category</h5>
                <span className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm capitalize">
                  {selectedColor.category}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setSelectedColor(null)}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-lg font-medium transition-colors"
              >
                Close
              </button>
              <a
                href="/quote"
                className="flex-1 bg-gradient-sunset hover:shadow-lg text-white py-2 px-4 rounded-lg font-medium transition-all text-center"
              >
                Request Quote
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorGrid;