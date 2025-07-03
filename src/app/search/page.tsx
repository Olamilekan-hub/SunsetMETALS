'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Search, ChevronRight, Package, Palette, FileText, Camera } from 'lucide-react';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: 'product' | 'color' | 'resource' | 'gallery';
  url: string;
  image?: string;
  category?: string;
}

const searchData: SearchResult[] = [
  // Products
  {
    id: '1',
    title: 'Standing Seam Profile',
    description: 'Premium architectural metal roofing with concealed fasteners and superior weather protection.',
    type: 'product',
    url: '/products/profiles/standing-seam',
    image: '/images/products/standing-seam.jpg',
    category: 'Profiles'
  },
  {
    id: '2',
    title: 'Corrugated Panels',
    description: 'Versatile and economical metal roofing solution for residential and commercial applications.',
    type: 'product',
    url: '/products/profiles/corrugated',
    image: '/images/products/corrugated.jpg',
    category: 'Profiles'
  },
  {
    id: '3',
    title: 'Snaplock System',
    description: 'Easy-install metal roofing system with mechanical lock design.',
    type: 'product',
    url: '/products/profiles/snaplock',
    image: '/images/products/snaplock.jpg',
    category: 'Profiles'
  },
  {
    id: '4',
    title: 'Roof Flashings',
    description: 'Custom-formed flashings for weather-tight roof transitions and penetrations.',
    type: 'product',
    url: '/products/flashings/roof',
    image: '/images/products/flashings.jpg',
    category: 'Flashings'
  },
  
  // Colors
  {
    id: '5',
    title: 'Galvanized',
    description: 'Classic zinc-coated steel finish providing excellent corrosion resistance.',
    type: 'color',
    url: '/colours#galvanized',
    category: 'Classic Colors'
  },
  {
    id: '6',
    title: 'Forest Green',
    description: 'Rich deep green color perfect for blending with natural surroundings.',
    type: 'color',
    url: '/colours#forest-green',
    category: 'Classic Colors'
  },
  {
    id: '7',
    title: 'Burnished Slate',
    description: 'Sophisticated dark gray with subtle metallic undertones.',
    type: 'color',
    url: '/colours#burnished-slate',
    category: 'Signature Colors'
  },
  {
    id: '8',
    title: 'Storm Blue',
    description: 'Modern blue-gray color inspired by stormy Canadian skies.',
    type: 'color',
    url: '/colours#storm-blue',
    category: 'Classic Colors'
  },
  
  // Resources
  // {
  //   id: '9',
  //   title: 'Standing Seam Installation Guide',
  //   description: 'Complete step-by-step installation instructions for standing seam metal roofing systems.',
  //   type: 'resource',
  //   url: '/resources#installation',
  //   category: 'Installation Guides'
  // },
  // {
  //   id: '10',
  //   title: 'Metal Roofing Maintenance Manual',
  //   description: 'Essential maintenance procedures to maximize the lifespan of your metal roof.',
  //   type: 'resource',
  //   url: '/resources#maintenance',
  //   category: 'Maintenance'
  // },
  // {
  //   id: '11',
  //   title: 'Snow Load Calculations',
  //   description: 'Engineering guidelines for Canadian snow load requirements and calculations.',
  //   type: 'resource',
  //   url: '/resources#technical',
  //   category: 'Technical Data'
  // },
  
  // Gallery
  {
    id: '12',
    title: 'Modern Residential Roofing',
    description: 'Standing seam metal roofing installation on contemporary home featuring Storm Blue color.',
    type: 'gallery',
    url: '/gallery#residential-1',
    image: '/images/gallery/residential-1.jpg',
    category: 'Residential'
  },
  {
    id: '13',
    title: 'Industrial Warehouse Complex',
    description: 'Large-scale commercial roofing project using corrugated metal panels in Galvanized finish.',
    type: 'gallery',
    url: '/gallery#commercial-1',
    image: '/images/gallery/commercial-1.jpg',
    category: 'Commercial'
  },
  {
    id: '14',
    title: 'Agricultural Barn Restoration',
    description: 'Heritage barn restoration with traditional metal roofing in Classic Red.',
    type: 'gallery',
    url: '/gallery#agricultural-1',
    image: '/images/gallery/agricultural-1.jpg',
    category: 'Agricultural'
  }
];

const filterOptions = [
  { value: 'all', label: 'All Results', icon: Search },
  { value: 'product', label: 'Products', icon: Package },
  { value: 'color', label: 'Colors', icon: Palette },
  { value: 'resource', label: 'Resources', icon: FileText },
  { value: 'gallery', label: 'Gallery', icon: Camera }
];

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (searchQuery.trim().length === 0) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);
    
    // Simulate search delay
    const searchTimeout = setTimeout(() => {
      const filtered = searchData.filter(item => {
        const matchesQuery = 
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (item.category && item.category.toLowerCase().includes(searchQuery.toLowerCase()));
        
        const matchesFilter = selectedFilter === 'all' || item.type === selectedFilter;
        
        return matchesQuery && matchesFilter;
      });
      
      setSearchResults(filtered);
      setIsSearching(false);
    }, 300);

    return () => clearTimeout(searchTimeout);
  }, [searchQuery, selectedFilter]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'product': return Package;
      case 'color': return Palette;
      case 'resource': return FileText;
      case 'gallery': return Camera;
      default: return Search;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'product': return 'bg-blue-100 text-blue-800';
      case 'color': return 'bg-purple-100 text-purple-800';
      case 'resource': return 'bg-green-100 text-green-800';
      case 'gallery': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sunset-orange/5 to-metal-light">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-metal-dark via-forest-green to-sunset-orange py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Search
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Find products, colors, technical resources, and project galleries
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for products, colors, resources..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 text-lg rounded-lg border-0 shadow-lg focus:ring-2 focus:ring-sunset-orange focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filter Options */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {filterOptions.map((option) => {
              const Icon = option.icon;
              return (
                <button
                  key={option.value}
                  onClick={() => setSelectedFilter(option.value)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedFilter === option.value
                      ? 'bg-sunset-orange text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{option.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Search Results */}
        <div className="min-h-96">
          {searchQuery.length === 0 ? (
            <div className="text-center py-16">
              <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-500 mb-2">
                Start typing to search
              </h3>
              <p className="text-gray-400">
                Search for products, colors, technical resources, and project galleries
              </p>
            </div>
          ) : isSearching ? (
            <div className="text-center py-16">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sunset-orange mx-auto mb-4"></div>
              <p className="text-gray-500">Searching...</p>
            </div>
          ) : searchResults.length === 0 ? (
            <div className="text-center py-16">
              <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-500 mb-2">
                No results found
              </h3>
              <p className="text-gray-400">
                Try adjusting your search terms or filters
              </p>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-4"
            >
              <div className="mb-6">
                <p className="text-gray-600">
                  Found {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} for &quot;{searchQuery}&quot;
                </p>
              </div>
              
              {searchResults.map((result, index) => {
                const TypeIcon = getTypeIcon(result.type);
                
                return (
                  <motion.div
                    key={result.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={result.url}
                      className="block bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6 group"
                    >
                      <div className="flex items-start space-x-4">
                        {result.image && (
                          <div className="relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden">
                            <Image
                              src={result.image}
                              alt={result.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        )}
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-xl font-bold text-metal-dark group-hover:text-sunset-orange transition-colors">
                              {result.title}
                            </h3>
                            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(result.type)}`}>
                              <TypeIcon className="h-3 w-3 mr-1" />
                              {result.type.charAt(0).toUpperCase() + result.type.slice(1)}
                            </span>
                          </div>
                          
                          {result.category && (
                            <p className="text-sm text-gray-500 mb-2">{result.category}</p>
                          )}
                          
                          <p className="text-gray-700 line-clamp-2">
                            {result.description}
                          </p>
                        </div>
                        
                        <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-sunset-orange transition-colors flex-shrink-0" />
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </div>

        {/* Popular Searches */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-metal-dark mb-6">Popular Searches</h2>
          <div className="flex flex-wrap gap-2">
            {[
              'Standing Seam',
              'Galvanized',
              'Installation Guide',
              'Forest Green',
              'Corrugated Panels',
              'Warranty Information',
              'Snow Load',
              'Flashings'
            ].map((term) => (
              <button
                key={term}
                onClick={() => setSearchQuery(term)}
                className="bg-white hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-full border border-gray-200 transition-colors"
              >
                {term}
              </button>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-16 text-center">
          <div className="bg-gradient-to-r from-forest-green to-sunset-orange rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Can&apos;t Find What You&apos;re Looking For?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Our experts are here to help. Contact us for personalized product recommendations 
              and technical assistance.
            </p>
            <div className="space-x-4">
              <Link 
                href="/contact"
                className="inline-block bg-white text-forest-green px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Expert
              </Link>
              <Link 
                href="/quote"
                className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-forest-green transition-colors"
              >
                Get Quote
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
