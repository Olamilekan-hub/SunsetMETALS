// 'use client';

// import { useState, useEffect, useRef } from 'react';
// import Link from 'next/link';
// import { Search, X, Package, Palette, FileText, Camera } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';

// interface SearchResult {
//   id: string;
//   title: string;
//   description: string;
//   type: 'product' | 'color' | 'resource' | 'gallery';
//   url: string;
//   image?: string;
//   category?: string;
// }

// const searchData: SearchResult[] = [
//   // Products
//   {
//     id: '1',
//     title: 'Standing Seam Profile',
//     description: 'Premium architectural metal roofing with concealed fasteners and superior weather protection.',
//     type: 'product',
//     url: '/products/profiles/standing-seam',
//     image: '/images/products/standing-seam.jpg',
//     category: 'Profiles'
//   },
//   {
//     id: '2',
//     title: 'Corrugated Panels',
//     description: 'Versatile and economical metal roofing solution for residential and commercial applications.',
//     type: 'product',
//     url: '/products/profiles/corrugated',
//     image: '/images/products/corrugated.jpg',
//     category: 'Profiles'
//   },
//   {
//     id: '3',
//     title: 'Snaplock System',
//     description: 'Easy-install metal roofing system with mechanical lock design.',
//     type: 'product',
//     url: '/products/profiles/snaplock',
//     image: '/images/products/snaplock.jpg',
//     category: 'Profiles'
//   },
//   {
//     id: '4',
//     title: 'Roof Flashings',
//     description: 'Custom-formed flashings for weather-tight roof transitions and penetrations.',
//     type: 'product',
//     url: '/products/flashings/roof',
//     image: '/images/products/flashings.jpg',
//     category: 'Flashings'
//   },
  
//   // Colors
//   {
//     id: '5',
//     title: 'Galvanized',
//     description: 'Classic zinc-coated steel finish providing excellent corrosion resistance.',
//     type: 'color',
//     url: '/colours#galvanized',
//     category: 'Classic Colors'
//   },
//   {
//     id: '6',
//     title: 'Forest Green',
//     description: 'Rich deep green color perfect for blending with natural surroundings.',
//     type: 'color',
//     url: '/colours#forest-green',
//     category: 'Classic Colors'
//   },
//   {
//     id: '7',
//     title: 'Burnished Slate',
//     description: 'Sophisticated dark gray with subtle metallic undertones.',
//     type: 'color',
//     url: '/colours#burnished-slate',
//     category: 'Signature Colors'
//   },
//   {
//     id: '8',
//     title: 'Storm Blue',
//     description: 'Modern blue-gray color inspired by stormy Canadian skies.',
//     type: 'color',
//     url: '/colours#storm-blue',
//     category: 'Classic Colors'
//   },
  
//   // Resources
//   {
//     id: '9',
//     title: 'Standing Seam Installation Guide',
//     description: 'Complete step-by-step installation instructions for standing seam metal roofing systems.',
//     type: 'resource',
//     url: '/resources#installation',
//     category: 'Installation Guides'
//   },
//   {
//     id: '10',
//     title: 'Metal Roofing Maintenance Manual',
//     description: 'Essential maintenance procedures to maximize the lifespan of your metal roof.',
//     type: 'resource',
//     url: '/resources#maintenance',
//     category: 'Maintenance'
//   },
//   {
//     id: '11',
//     title: 'Snow Load Calculations',
//     description: 'Engineering guidelines for Canadian snow load requirements and calculations.',
//     type: 'resource',
//     url: '/resources#technical',
//     category: 'Technical Data'
//   },
  
//   // Gallery
//   {
//     id: '12',
//     title: 'Modern Residential Roofing',
//     description: 'Standing seam metal roofing installation on contemporary home featuring Storm Blue color.',
//     type: 'gallery',
//     url: '/gallery#residential-1',
//     image: '/images/gallery/residential-1.jpg',
//     category: 'Residential'
//   },
//   {
//     id: '13',
//     title: 'Industrial Warehouse Complex',
//     description: 'Large-scale commercial roofing project using corrugated metal panels in Galvanized finish.',
//     type: 'gallery',
//     url: '/gallery#commercial-1',
//     image: '/images/gallery/commercial-1.jpg',
//     category: 'Commercial'
//   },
//   {
//     id: '14',
//     title: 'Agricultural Barn Restoration',
//     description: 'Heritage barn restoration with traditional metal roofing in Classic Red.',
//     type: 'gallery',
//     url: '/gallery#agricultural-1',
//     image: '/images/gallery/agricultural-1.jpg',
//     category: 'Agricultural'
//   }
// ];

// const HeaderSearchBar: React.FC = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const [isSearching, setIsSearching] = useState(false);
//   const searchRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (searchQuery.trim().length === 0) {
//       setSearchResults([]);
//       return;
//     }

//     setIsSearching(true);
    
//     const searchTimeout = setTimeout(() => {
//       const filtered = searchData.filter(item => {
//         const matchesQuery = 
//           item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//           item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
//           (item.category && item.category.toLowerCase().includes(searchQuery.toLowerCase()));
        
//         return matchesQuery;
//       }).slice(0, 6); // Limit to 6 results for header display
      
//       setSearchResults(filtered);
//       setIsSearching(false);
//     }, 300);

//     return () => clearTimeout(searchTimeout);
//   }, [searchQuery]);

//   // Close search when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
//         setIsSearchOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   const getTypeIcon = (type: string) => {
//     switch (type) {
//       case 'product': return Package;
//       case 'color': return Palette;
//       case 'resource': return FileText;
//       case 'gallery': return Camera;
//       default: return Search;
//     }
//   };

//   const getTypeColor = (type: string) => {
//     switch (type) {
//       case 'product': return 'bg-blue-100 text-blue-800';
//       case 'color': return 'bg-purple-100 text-purple-800';
//       case 'resource': return 'bg-green-100 text-green-800';
//       case 'gallery': return 'bg-orange-100 text-orange-800';
//       default: return 'bg-gray-100 text-gray-800';
//     }
//   };

//   const handleResultClick = () => {
//     setIsSearchOpen(false);
//     setSearchQuery('');
//   };

//   return (
//     <div ref={searchRef} className="relative">
//       {/* Search Input */}
//       <div className="relative">
//         <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
//         <input
//           type="text"
//           placeholder="Search products, colors..."
//           value={searchQuery}
//           onChange={(e) => {
//             setSearchQuery(e.target.value);
//             setIsSearchOpen(true);
//           }}
//           onFocus={() => setIsSearchOpen(true)}
//           className="w-72 pl-10 pr-10 py-2.5 text-sm bg-white border border-gray-300 rounded-lg placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-sunset-orange focus:border-sunset-orange shadow-sm hover:shadow-md transition-all duration-200"
//         />
//         {searchQuery && (
//           <button
//             onClick={() => {
//               setSearchQuery('');
//               setIsSearchOpen(false);
//             }}
//             className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
//           >
//             <X className="h-4 w-4" />
//           </button>
//         )}
//       </div>

//       {/* Search Results Dropdown */}
//       <AnimatePresence>
//         {isSearchOpen && (searchQuery.length > 0 || searchResults.length > 0) && (
//           <motion.div
//             initial={{ opacity: 0, y: -10, scale: 0.95 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             exit={{ opacity: 0, y: -10, scale: 0.95 }}
//             transition={{ duration: 0.2 }}
//             className="absolute top-full left-0 mt-2 w-full bg-white shadow-2xl border border-gray-200 rounded-xl z-50 max-h-96 overflow-hidden"
//           >
//             {isSearching ? (
//               <div className="p-4 text-center">
//                 <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-sunset-orange mx-auto mb-2"></div>
//                 <p className="text-sm text-gray-500">Searching...</p>
//               </div>
//             ) : searchResults.length > 0 ? (
//               <div className="py-2">
//                 <div className="px-4 py-2 border-b border-gray-100 bg-gray-50">
//                   <p className="text-xs text-gray-600 font-semibold uppercase tracking-wide">
//                     {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} found
//                   </p>
//                 </div>
//                 <div className="max-h-80 overflow-y-auto">
//                   {searchResults.map((result) => {
//                     const TypeIcon = getTypeIcon(result.type);
//                     return (
//                       <Link
//                         key={result.id}
//                         href={result.url}
//                         onClick={handleResultClick}
//                         className="flex items-center space-x-3 px-4 py-3 hover:bg-sunset-orange/5 transition-colors group border-b border-gray-50 last:border-b-0"
//                       >
//                         <div className={`p-2 rounded-lg ${getTypeColor(result.type)}`}>
//                           <TypeIcon className="h-4 w-4" />
//                         </div>
//                         <div className="flex-1 min-w-0">
//                           <h4 className="text-sm font-semibold text-gray-900 group-hover:text-sunset-orange transition-colors mb-1">
//                             {result.title}
//                           </h4>
//                           <p className="text-xs text-gray-500 line-clamp-1">
//                             {result.category && <span className="font-medium">{result.category} • </span>}
//                             {result.description.slice(0, 60)}...
//                           </p>
//                         </div>
//                       </Link>
//                     );
//                   })}
//                 </div>
//                 <div className="px-4 py-3 border-t border-gray-200 bg-gray-50">
//                   <Link
//                     href={`/search?q=${encodeURIComponent(searchQuery)}`}
//                     onClick={handleResultClick}
//                     className="text-sm text-sunset-orange hover:text-sunset-red font-semibold flex items-center justify-center space-x-2 py-1"
//                   >
//                     <Search className="h-4 w-4" />
//                     <span>View all search results</span>
//                   </Link>
//                 </div>
//               </div>
//             ) : searchQuery.length > 0 ? (
//               <div className="p-6 text-center">
//                 <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
//                   <Search className="h-6 w-6 text-gray-400" />
//                 </div>
//                 <p className="text-sm text-gray-600 mb-2 font-medium">No results found for &quot;{searchQuery}&quot;</p>
//                 <p className="text-xs text-gray-500 mb-3">Try different keywords or browse our categories</p>
//                 <Link
//                   href="/search"
//                   onClick={handleResultClick}
//                   className="inline-flex items-center text-sm text-sunset-orange hover:text-sunset-red font-medium"
//                 >
//                   Browse all products →
//                 </Link>
//               </div>
//             ) : null}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default HeaderSearchBar;


'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Search, X, Package, Palette, FileText, Camera } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  // products, 
  classicColors, 
  GalleryImages, 
  RoofflashItem, 
  WallflashItem, 
  Wall118flashItem, 
  Roof118flashItem,
  navigationItems 
} from '@/data'; // Adjust import path as needed

interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: 'product' | 'color' | 'resource' | 'gallery' | 'flashing';
  url: string;
  image?: string;
  category?: string;
}

const HeaderSearchBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Generate search data from your data files
  const generateSearchData = (): SearchResult[] => {
    const searchData: SearchResult[] = [];

    // Add products
    // products.forEach(product => {
    //   searchData.push({
    //     id: product.id,
    //     title: product.name,
    //     description: product.description,
    //     type: 'product',
    //     url: `/products/${product.category}/${product.id}`,
    //     image: product.imageUrl,
    //     category: product.category.charAt(0).toUpperCase() + product.category.slice(1)
    //   });
    // });

    // Add colors
    classicColors.forEach(color => {
      let colorUrl = '';
      switch(color.category) {
        case 'classic':
          colorUrl = '/colours/classic';
          break;
        case 'printed':
          colorUrl = '/colours/printed';
          break;
        case 'signature':
          colorUrl = '/colours/signature';
          break;
        case 'tex':
          colorUrl = '/colours/tex';
          break;
        default:
          colorUrl = '/colours';
      }

      const categoryName = color.category ? color.category.charAt(0).toUpperCase() + color.category.slice(1) : 'Color';
      searchData.push({
        id: color.id || `color-${color.name}`,
        title: color.name.charAt(0).toUpperCase() + color.name.slice(1),
        description: `${categoryName} color option for metal roofing`,
        type: 'color',
        url: `${colorUrl}#${color.id}`,
        image: color.image,
        category: `${categoryName} Colors`
      });
    });

    // Add gallery images
    GalleryImages.forEach(image => {
      searchData.push({
        id: image.id,
        title: image.title || image.alt || 'Gallery Image',
        description: image.alt,
        type: 'gallery',
        url: `/gallery#${image.id}`,
        image: image.src,
        category: 'Gallery'
      });
    });

    // Add roof flashings
    RoofflashItem.forEach(item => {
      searchData.push({
        id: item.id,
        title: item.title,
        description: item.description || 'Professional roofing flashing for weather protection',
        type: 'flashing',
        url: '/products/flashings/roof',
        image: item.images[0]?.src,
        category: 'Roof Flashings'
      });
    });

    // Add wall flashings
    WallflashItem.forEach(item => {
      searchData.push({
        id: item.id,
        title: item.title,
        description: item.description || 'Professional wall flashing for weather sealing',
        type: 'flashing',
        url: '/products/flashings/wall',
        image: item.images[0]?.src,
        category: 'Wall Flashings'
      });
    });

    // Add 1⅛ wall flashings
    Wall118flashItem.forEach(item => {
      searchData.push({
        id: `wall118-${item.id}`,
        title: item.title,
        description: item.description || '1⅛ wall flashing for specific applications',
        type: 'flashing',
        url: '/products/flashings/wall118',
        image: item.images[0]?.src,
        category: '1⅛ Wall Flashings'
      });
    });

    // Add 1⅛ roof flashings
    Roof118flashItem.forEach(item => {
      searchData.push({
        id: `roof118-${item.id}`,
        title: item.title,
        description: item.description || '1ⅸ roof flashing for specific applications',
        type: 'flashing',
        url: '/products/flashings/roof118',
        image: item.images[0]?.src,
        category: '1⅛ Roof Flashings'
      });
    });

    // Add navigation items as resources
    const addNavigationItems = (items: Array<{ href?: string; label: string; children?: Array<{ href?: string; label: string }> }>, parentCategory = '') => {
      items.forEach(item => {
        if (item.href && item.href !== '#' && !item.children) {
          searchData.push({
            id: `nav-${item.href.replace(/\//g, '-')}`,
            title: item.label,
            description: `Navigate to ${item.label} section`,
            type: 'resource',
            url: item.href,
            category: parentCategory || 'Navigation'
          });
        }
        if (item.children) {
          addNavigationItems(item.children, item.label);
        }
      });
    };

    addNavigationItems(navigationItems);

    return searchData;
  };

  useEffect(() => {
    if (searchQuery.trim().length === 0) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);
    
    const searchTimeout = setTimeout(() => {
      const searchData = generateSearchData();
      const filtered = searchData.filter(item => {
        const matchesQuery = 
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (item.category && item.category.toLowerCase().includes(searchQuery.toLowerCase()));
        
        return matchesQuery;
      }).slice(0, 6); // Limit to 6 results for header display
      
      setSearchResults(filtered);
      setIsSearching(false);
    }, 300);

    return () => clearTimeout(searchTimeout);
  }, [searchQuery]);

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'product': return Package;
      case 'color': return Palette;
      case 'resource': return FileText;
      case 'gallery': return Camera;
      case 'flashing': return Package;
      default: return Search;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'product': return 'bg-blue-100 text-blue-800';
      case 'color': return 'bg-purple-100 text-purple-800';
      case 'resource': return 'bg-green-100 text-green-800';
      case 'gallery': return 'bg-orange-100 text-orange-800';
      case 'flashing': return 'bg-indigo-100 text-indigo-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleResultClick = () => {
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  return (
    <div ref={searchRef} className="relative">
      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
        <input
          type="text"
          placeholder="Search products, colors, flashings..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setIsSearchOpen(true);
          }}
          onFocus={() => setIsSearchOpen(true)}
          className="w-72 pl-10 pr-10 py-2.5 text-sm bg-white border border-gray-300 rounded-lg placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-sunset-orange focus:border-sunset-orange shadow-sm hover:shadow-md transition-all duration-200"
        />
        {searchQuery && (
          <button
            onClick={() => {
              setSearchQuery('');
              setIsSearchOpen(false);
            }}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Search Results Dropdown */}
      <AnimatePresence>
        {isSearchOpen && (searchQuery.length > 0 || searchResults.length > 0) && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 w-full bg-white shadow-2xl border border-gray-200 rounded-xl z-50 max-h-96 overflow-hidden"
          >
            {isSearching ? (
              <div className="p-4 text-center">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-sunset-orange mx-auto mb-2"></div>
                <p className="text-sm text-gray-500">Searching...</p>
              </div>
            ) : searchResults.length > 0 ? (
              <div className="py-2">
                <div className="px-4 py-2 border-b border-gray-100 bg-gray-50">
                  <p className="text-xs text-gray-600 font-semibold uppercase tracking-wide">
                    {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} found
                  </p>
                </div>
                <div className="max-h-80 overflow-y-auto">
                  {searchResults.map((result) => {
                    const TypeIcon = getTypeIcon(result.type);
                    return (
                      <Link
                        key={result.id}
                        href={result.url}
                        onClick={handleResultClick}
                        className="flex items-center space-x-3 px-4 py-3 hover:bg-sunset-orange/5 transition-colors group border-b border-gray-50 last:border-b-0"
                      >
                        <div className={`p-2 rounded-lg ${getTypeColor(result.type)}`}>
                          <TypeIcon className="h-4 w-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-semibold text-gray-900 group-hover:text-sunset-orange transition-colors mb-1">
                            {result.title}
                          </h4>
                          <p className="text-xs text-gray-500 line-clamp-1">
                            {result.category && <span className="font-medium">{result.category} • </span>}
                            {result.description.length > 60 ? `${result.description.slice(0, 60)}...` : result.description}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
                <div className="px-4 py-3 border-t border-gray-200 bg-gray-50">
                  <Link
                    href={`/search?q=${encodeURIComponent(searchQuery)}`}
                    onClick={handleResultClick}
                    className="text-sm text-sunset-orange hover:text-sunset-red font-semibold flex items-center justify-center space-x-2 py-1"
                  >
                    <Search className="h-4 w-4" />
                    <span>View all search results</span>
                  </Link>
                </div>
              </div>
            ) : searchQuery.length > 0 ? (
              <div className="p-6 text-center">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Search className="h-6 w-6 text-gray-400" />
                </div>
                <p className="text-sm text-gray-600 mb-2 font-medium">No results found for &quot;{searchQuery}&quot;</p>
                <p className="text-xs text-gray-500 mb-3">Try different keywords or browse our categories</p>
                <Link
                  href="/search"
                  onClick={handleResultClick}
                  className="inline-flex items-center text-sm text-sunset-orange hover:text-sunset-red font-medium"
                >
                  Browse all products →
                </Link>
              </div>
            ) : null}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HeaderSearchBar;