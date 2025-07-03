import { GalleryImage, Product, ColorOption, NavigationItem, ProductDataType, Products } from '@/types';

export const products: Product[] = [
  {
    id: 'snap-lock',
    name: 'Snap Lock Panel',
    category: 'profiles',
    description: 'High-quality snap lock metal roofing panels available in multiple gauges. Perfect for residential and commercial applications.',
    specifications: {
      gauges: [26, 24, 22],
      measurements: '1" Snap-Lock 12-24"',
    },
    imageUrl: '/images/products/snap-lock.jpg',
    modelUrl: '/models/snap-lock.glb',
    technicalDrawing: '/images/technical/snap-lock-drawing.png',
  },
  {
    id: 'standing-seam',
    name: 'Standing Seam Panel',
    category: 'profiles',
    description: 'Premium standing seam metal roofing system offering superior weather protection and modern aesthetics.',
    specifications: {
      gauges: [26, 24, 22],
      measurements: '2" Standing Seam 12-24"',
    },
    imageUrl: '/images/products/standing-seam.jpg',
    modelUrl: '/models/standing-seam.glb',
    technicalDrawing: '/images/technical/standing-seam-drawing.png',
  },
  {
    id: 'trapezoid',
    name: 'Trapezoid Panel',
    category: 'profiles',
    description: 'Durable trapezoid profile panels ideal for agricultural and industrial buildings.',
    specifications: {
      gauges: [26, 24, 22],
    },
    imageUrl: '/images/products/trapezoid.jpg',
    modelUrl: '/models/trapezoid.glb',
  },
  {
    id: 'ridge-cap',
    name: 'Ridge Cap',
    category: 'flashings',
    description: 'Custom ridge cap flashing for professional roof finishing.',
    specifications: {
      bends: 9,
      girth: 10,
    },
    imageUrl: '/images/products/ridge-cap.jpg',
    modelUrl: '/models/ridge-cap.glb',
    technicalDrawing: '/images/technical/ridge-cap-sf01.png',
  },
  {
    id: 'gable-flashing',
    name: 'Gable Flashing',
    category: 'flashings',
    description: 'Professional gable flashing for corner applications and weather sealing.',
    specifications: {
      bends: 8,
      girth: 12.5,
    },
    imageUrl: '/images/products/gable-flashing.jpg',
    modelUrl: '/models/gable-flashing.glb',
    technicalDrawing: '/images/technical/gable-flashing-sf02.png',
  },
  {
    id: 'large-eave',
    name: 'Large Eave',
    category: 'flashings',
    description: 'Large eave flashing for comprehensive roof edge protection.',
    specifications: {
      bends: 4,
      girth: 8,
    },
    imageUrl: '/images/products/large-eave.jpg',
    modelUrl: '/models/large-eave.glb',
  },
];

export const navigationItems: NavigationItem[] = [
  {
    label: 'About Us',
    href: '/',
    children: [
      { label: 'Request a Quote', href: '/quote' },
      // { label: 'Location & Delivery', href: '/contact' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    label: 'Products',
    href: '/products',
    children: [
      {
        label: 'Profiles',
        href: '#',
        children: [
          { label: 'Snaplock', href: '/products/profiles/snaplock' },
          { label: 'Standing Seam', href: '/products/profiles/standing-seam' },
          { label: 'Trapezoid', href: '/products/profiles/trapezoid' },
        ],
      },
      {
        label: 'Flashings',
        href: '#',
        children: [
          { label: '⅞ Roof Flashings', href: '/products/flashings/roof' },
          { label: '1 ⅛ Roof Flashings', href: '/products/flashings/roof118' },
          { label: '⅞ Wall Flashings', href: '/products/flashings/wall' },
          { label: '1 ⅛ Wall Flashings', href: '/products/flashings/wall118' },
        ],
      },
      { label: 'Extra Materials', href: '/products/materials' },
      { label: 'Clips/Closures', href: '/products/accessories' },
    ],
  },
  {
    label: 'Colours',
    href: '/colours',
    children: [
      { label: 'Classic Colours', href: '/colours/classic' },
      { label: 'Printed Series', href: '/colours/printed' },
      { label: 'Signature Colours', href: '/colours/signature' },
      { label: 'Tex Series', href: '/colours/tex' },
      { label: 'Warranty Information', href: '/colours/warranty' },
    ],
  },
  { label: 'Gallery', href: '/gallery' },
  // { 
  //   label: 'Resources', 
  //   href: '/resources',
  //   children: [
  //     { label: 'Installation Guides', href: '/resources#installation' },
  //     { label: 'Maintenance Manual', href: '/resources#maintenance' },
  //     { label: 'Technical Data', href: '/resources#technical' },
  //     { label: 'Warranty Info', href: '/resources#warranty' },
  //   ],
  // },
  // { label: 'Search', href: '/search' },
  // { label: 'Request Quote', href: '/quote' },
  // { label: 'Contact', href: '/contact' },
];

export const companyInfo = {
  name: 'SunSet Metal Forming',
  tagline: 'We manufacture metal Roofing Material',
  contact: {
    name: 'Jonaton Wipf',
    phone: '780-554-7475',
    email: 'jonatonu@gmail.com',
    website: 'www.sunsetmetal.com',
    address: '174022 - Township Road 562, Lamont County, Alberta, Canada',
  },
  services: [
    'Custom metal forming',
    'Roof & Wall panels',
    'On-site metal rolling capability',
    'Residential Projects',
    'Agricultural Buildings',
    'Commercial Applications',
  ],
};

export const GalleryImages: GalleryImage[] = [
  {
    id: '1',
    src: '/Project1.jpg',
    alt: 'Project Image',
    title: 'Project Image',
  },
  {
    id: '2',
    src: '/Project2.jpg',
    alt: 'Project Image',
    title: 'Project Image',
  },
  {
    id: '3',
    src: '/Project3.jpg',
    alt: 'Project Image',
    title: 'Project Image',
  },
];

export const RoofFlashingProducts: ProductDataType = {
    title: '⅞ Roof Flashings',
    description: 'Premium architectural metal roofing with concealed fasteners and superior weather protection.',
    image: '/flashings/roof flashings/eve flashing small.png',
    heroImage: '/image.png', 
    downloadText: 'Roof Flashings Guide'
  };

export const WallFlashingProducts: ProductDataType = {
    title: '⅞ Wall Flashings',
    description: 'Premium architectural metal roofing with concealed fasteners and superior weather protection.',
    image: '/flashings/wall flashings/inside corner.png',
    heroImage: '/image.png', 
    downloadText: 'Wall Flashings Guide'
  };

export const Wall118FlashingProducts: ProductDataType = {
    title: '1 ⅛ Wall Flashings',
    description: 'Premium architectural metal roofing with concealed fasteners and superior weather protection.',
    image: '/flashings/1 1.8 wall flashings/corner.png',
    heroImage: '/image.png', 
    downloadText: '1 ⅛ Wall Flashings Guide'
  };

export const Roof118FlashingProducts: ProductDataType = {
    title: '1 ⅛ Roof Flashings',
    description: 'Premium architectural metal roofing with concealed fasteners and superior weather protection.',
    image: '/flashings/1 1.8 inch roof flashings/w valley flashing.png',
    heroImage: '/image.png', 
    downloadText: '1 ⅛ Roof Flashings Guide'
  };

// export const RoofFlashingProducts: ProductDataType = {
//     title: 'Wall Flashings',
//     description: 'Premium architectural metal roofing with concealed fasteners and superior weather protection.',
//     image: '/flashings/roof flashings/eve flashing small.png',
//     heroImage: '/image.png', 
//     downloadText: 'Wall Flashings Guide'
//   };

export const WallflashItem = [
    {
      id: 'Corner',
      title: 'Corner',
      description: "",
      // 'Valley flashing directs water away from the intersection of two roof planes.',
       images: [
        {
          src: '/flashings/wall flashings/corner.png',
          alt: 'Corner',
          width: 450,
          height: 200
        },
        {
          src: '/flashings/wall flashings/corner1.jpg',
          alt: 'Corner',
          width: 450,
          height: 200
        }
      ]
    },
    {
      id: 'drip flashing',
      title: 'Drip Flashing',
      description: "",
      // 'Valley flashing directs water away from the intersection of two roof planes.',
      images: [
        {
          src: '/flashings/wall flashings/drip flashing.png',
          alt: 'drip flashing',
          width: 450,
          height: 200
        },
        {
          src: '/flashings/wall flashings/drip flashing1.jpg',
          alt: 'drip flashing',
          width: 450,
          height: 200
        }
      ]
    },
    {
      id: 'Inside Corner',
      title: 'Inside Corner',
      description: "",
      // 'Valley flashing directs water away from the intersection of two roof planes.',
       images: [
        {
          src: '/flashings/wall flashings/inside corner.png',
          alt: 'Inside Corner',
          width: 450,
          height: 200
        },
        {
          src: '/flashings/wall flashings/inside corner1.jpg',
          alt: 'Inside Corner',
          width: 450,
          height: 200
        }
      ]
    },
    {
      id: 'J Trim',
      title: 'J Trim',
      description: "",
      // 'Valley flashing directs water away from the intersection of two roof planes.',
       images: [
        {
          src: '/flashings/wall flashings/j trim.png',
          alt: 'J Trim',
          width: 450,
          height: 200
        },
        {
          src: '/flashings/wall flashings/j trim1.jpg',
          alt: 'J Trim',
          width: 450,
          height: 200
        }
      ]
    },
  ];

export const RoofflashItem = [
    {
      id: 'eve flashing small',
      title: 'Eve Flashing Small',
      description: "",
      // 'Valley flashing directs water away from the intersection of two roof planes.',
       images: [
        {
          src: '/flashings/roof flashings/eve flashing small.png',
          alt: 'eve flashing small',
          width: 450,
          height: 200
        },
        {
          src: '/flashings/roof flashings/eve flashing small1.jpg',
          alt: 'eve flashing small',
          width: 450,
          height: 200
        }
      ]
    },
    {
      id: 'gable & facia',
      title: 'Gable & Facia Cap',
      description: "",
      // 'Valley flashing directs water away from the intersection of two roof planes.',
       images: [
        {
          src: '/flashings/roof flashings/gable & facia.png',
          alt: 'gable & facia',
          width: 450,
          height: 200
        },
        {
          src: '/flashings/roof flashings/gable & facia cap1.jpg',
          alt: 'gable & facia',
          width: 450,
          height: 200
        }
      ]
    },
    {
      id: 'gable cap',
      title: 'Gable Cap',
      description: "",
      // 'Valley flashing directs water away from the intersection of two roof planes.',
       images: [
        {
          src: '/flashings/roof flashings/gable.png',
          alt: 'gable Cap',
          width: 450,
          height: 200
        },
        {
          src: '/flashings/roof flashings/gable cap1.jpg',
          alt: 'gable & facia',
          width: 450,
          height: 200
        }
      ]
    },
    {
      id: 'ridge capping',
      title: 'Ridge Capping',
      description: "",
      // 'Valley flashing directs water away from the intersection of two roof planes.',
       images: [
        {
          src: '/flashings/roof flashings/ridge capping.png',
          alt: 'ridge capping',
          width: 450,
          height: 200
        },
        {
          src: '/flashings/roof flashings/ridge capping1.jpg',
          alt: 'ridge capping',
          width: 450,
          height: 200
        }
      ]
    },
    {
      id: 'single slope cap',
      title: 'Single Slope Cap',
      description: "",
      // 'Valley flashing directs water away from the intersection of two roof planes.',
       images: [
        {
          src: '/flashings/roof flashings/single slope.png',
          alt: 'single slope Cap',
          width: 450,
          height: 200
        },
        {
          src: '/flashings/roof flashings/single slope cap1.jpg',
          alt: 'single slope',
          width: 450,
          height: 200
        }
      ]
    },
    {
      id: 'valley flashing',
      title: 'valley flashing',
      description: "",
      // 'Valley flashing directs water away from the intersection of two roof planes.',
       images: [
        {
          src: '/flashings/roof flashings/valley flashing.png',
          alt: 'valley flashing',
          width: 450,
          height: 200
        },
        {
          src: '/flashings/roof flashings/valley flashing1.jpg',
          alt: 'valley flashing',
          width: 450,
          height: 200
        }
      ]
    },
    {
      id: 'w valley flashing',
      title: 'w valley flashing',
      description: "",
      // 'Valley flashing directs water away from the intersection of two roof planes.',
       images: [
        {
          src: '/flashings/roof flashings/w valley flashing.png',
          alt: 'w valley flashing',
          width: 450,
          height: 200
        },
        {
          src: '/flashings/roof flashings/w valley flashing1.jpg',
          alt: 'w valley flashing',
          width: 450,
          height: 200
        }
      ]
    },
  ];

export const Wall118flashItem = [
    {
      id: 'J Trim',
      title: 'J Trim',
      description: "",
      // 'Valley flashing directs water away from the intersection of two roof planes.',
       images: [
        {
          src: '/flashings/1 1.8 wall flashings/j trim.png',
          alt: 'J Trim',
          width: 450,
          height: 200
        },
        {
          src: '/flashings/1 1.8 wall flashings/1.1.8 j.jpg',
          alt: 'J Trim',
          width: 450,
          height: 200
        }
      ]
    },
    {
      id: 'Corner',
      title: 'Corner',
      description: "",
      // 'Valley flashing directs water away from the intersection of two roof planes.',
       images: [
        {
          src: '/flashings/1 1.8 wall flashings/corner.png',
          alt: 'Corner',
          width: 450,
          height: 200
        },
        {
          src: '/flashings/1 1.8 wall flashings/corner1.jpg',
          alt: 'Corner',
          width: 450,
          height: 200
        }
      ]
    },
    {
      id: 'drip flashing',
      title: 'Drip Flashing',
      description: "",
      // 'Valley flashing directs water away from the intersection of two roof planes.',
      images: [
        {
          src: '/flashings/1 1.8 wall flashings/drip flashing.png',
          alt: 'drip flashing',
          width: 450,
          height: 200
        },
        {
          src: '/flashings/1 1.8 wall flashings/flashings.jpg',
          alt: 'drip flashing',
          width: 450,
          height: 200
        }
      ]
    },
    {
      id: 'Inside Corner',
      title: 'Inside Corner',
      description: "",
      // 'Valley flashing directs water away from the intersection of two roof planes.',
       images: [
        {
          src: '/flashings/1 1.8 wall flashings/inside corner.png',
          alt: 'Inside Corner',
          width: 450,
          height: 200
        },
        {
          src: '/flashings/1 1.8 wall flashings/inside corner1.jpg',
          alt: 'Inside Corner',
          width: 450,
          height: 200
        }
      ]
    },
  ];

export const Roof118flashItem = [
    {
      id: 'eve flashing small',
      title: 'Eve Flashing Small',
      description: "",
      // 'Valley flashing directs water away from the intersection of two roof planes.',
       images: [
        {
          src: '/flashings/1 1.8 inch roof flashings/eve flashing small.png',
          alt: 'eve flashing small',
          width: 450,
          height: 200
        },
        {
          src: '/flashings/1 1.8 inch roof flashings/eve flashing small1.jpg',
          alt: 'eve flashing small',
          width: 450,
          height: 200
        }
      ]
    },
    {
      id: 'gable & facia',
      title: 'Gable & Facia Cap',
      description: "",
      // 'Valley flashing directs water away from the intersection of two roof planes.',
       images: [
        {
          src: '/flashings/1 1.8 inch roof flashings/gable & facia.png',
          alt: 'gable & facia',
          width: 450,
          height: 200
        },
        {
          src: '/flashings/1 1.8 inch roof flashings/gable cap & facia1.jpg',
          alt: 'gable & facia',
          width: 450,
          height: 200
        }
      ]
    },
    {
      id: 'gable cap',
      title: 'Gable Cap',
      description: "",
      // 'Valley flashing directs water away from the intersection of two roof planes.',
       images: [
        {
          src: '/flashings/1 1.8 inch roof flashings/gable.png',
          alt: 'gable Cap',
          width: 450,
          height: 200
        },
        {
          src: '/flashings/1 1.8 inch roof flashings/gable cap1.jpg',
          alt: 'gable & facia',
          width: 450,
          height: 200
        }
      ]
    },
    {
      id: 'ridge capping',
      title: 'Ridge Capping',
      description: "",
      // 'Valley flashing directs water away from the intersection of two roof planes.',
       images: [
        {
          src: '/flashings/1 1.8 inch roof flashings/ridge capping.png',
          alt: 'ridge capping',
          width: 450,
          height: 200
        },
        {
          src: '/flashings/1 1.8 inch roof flashings/ridge capping1.jpg',
          alt: 'ridge capping',
          width: 450,
          height: 200
        }
      ]
    },
    {
      id: 'single slope cap',
      title: 'Single Slope Cap',
      description: "",
      // 'Valley flashing directs water away from the intersection of two roof planes.',
       images: [
        {
          src: '/flashings/1 1.8 inch roof flashings/single slope.png',
          alt: 'single slope Cap',
          width: 450,
          height: 200
        },
        {
          src: '/flashings/1 1.8 inch roof flashings/single slope cap1.jpg',
          alt: 'single slope',
          width: 450,
          height: 200
        }
      ]
    },
    {
      id: 'valley flashing',
      title: 'valley flashing',
      description: "",
      // 'Valley flashing directs water away from the intersection of two roof planes.',
       images: [
        {
          src: '/flashings/1 1.8 inch roof flashings/valley flashing.png',
          alt: 'valley flashing',
          width: 450,
          height: 200
        },
        {
          src: '/flashings/1 1.8 inch roof flashings/valley flashing1.jpg',
          alt: 'valley flashing',
          width: 450,
          height: 200
        }
      ]
    },
    {
      id: 'w valley flashing',
      title: 'w valley flashing',
      description: "",
      // 'Valley flashing directs water away from the intersection of two roof planes.',
       images: [
        {
          src: '/flashings/1 1.8 inch roof flashings/w valley flashing.png',
          alt: 'w valley flashing',
          width: 450,
          height: 200
        },
        {
          src: '/flashings/1 1.8 inch roof flashings/w valley flashing1.jpg',
          alt: 'w valley flashing',
          width: 450,
          height: 200
        }
      ]
    },
  ];

export const relatedProducts =  [
  {
    name: 'Wall Flashings',
    image: '/flashings/wall flashings/corner1.jpg',
    href: '/products/flashings/wall',
  },
  {
    name: 'Roof Flashings', 
    image: '/flashings/roof flashings/eve flashing small1.jpg',
    href: '/products/flashings/roof',
  },
  {
    name: 'Extra Materials',
    image: '/flashings/wall flashings/j trim1.jpg',
    href: '/products/materials',
  }
];


export const images: Products[] = [
  {
    id: '1',
    src: '/download1.jpeg',
    alt: 'Classic Colours',
    title: 'Classic Colours',
    href: '/colours/classic',
  },
  {
    id: '2',
    src: '/download2.jpeg',
    alt: 'Printed Series',
    title: 'Printed Series',
    href: '/colours/printed',
  },
  {
    id: '3',
    src: '/download3.jpeg',
    alt: 'Signature Colours',
    title: 'Signature Colours',
    href: '/colours/signature',
  },
  {
    id: '4',
    src: '/download4.jpeg',
    alt: 'Tex Series',
    title: 'Tex Series',
    href: '/colours/tex',
  },
  {
    id: '5',
    src: '/download5.jpeg',
    alt: 'Warranty Information',
    title: 'Warranty Information',
    href: '/colours/warranty'
  },
];

export const classicColors: ColorOption[] = [
  {
    id: 'antique linen',
    name: 'antique linen',
    image: '/colors/classic colours/antique linen.png',
    category: 'classic',
  },
  {
    id: 'appliance white',
    name: 'appliance white',
    image: '/colors/classic colours/appliance white.png',
    category: 'classic',
  },
  {
    id: 'black',
    name: 'black',
    image: '/colors/classic colours/black.png',
    category: 'classic',
  },
  {
    id: 'bone white',
    name: 'bone white',
    image: '/colors/classic colours/bone white.png',
    category: 'classic',
  },
  {
    id: 'briarwood tan',
    name: 'briarwood tan',
    image: '/colors/classic colours/briarwood tan.png',
    category: 'classic',
  },
  {
    id: 'bright red',
    name: 'bright red',
    image: '/colors/classic colours/bright red.png',
    category: 'classic',
  },
  {
    id: 'bright white',
    name: 'bright white',
    image: '/colors/classic colours/bright white.png',
    category: 'classic',
  },
  {
    id: 'burgundy',
    name: 'burgundy',
    image: '/colors/classic colours/burgundy.png',
    category: 'classic',
  },
  {
    id: 'cambridge white',
    name: 'cambridge white',
    image: '/colors/classic colours/cambridge white.png',
    category: 'classic',
  },
  {
    id: 'cashmere',
    name: 'cashmere',
    image: '/colors/classic colours/cashmere.png',
    category: 'classic',
  },
  {
    id: 'charcoal',
    name: 'charcoal',
    image: '/colors/classic colours/charcoal.png',
    category: 'classic',
  },
  {
    id: 'coffee brown',
    name: 'coffee brown',
    image: '/colors/classic colours/coffee brown.png',
    category: 'classic',
  },
  {
    id: 'dark brown',
    name: 'dark brown',
    image: '/colors/classic colours/dark brown.png',
    category: 'classic',
  },
  {
    id: 'dark green',
    name: 'dark green',
    image: '/colors/classic colours/dark green.png',
    category: 'classic',
  },
  {
    id: 'deep water green',
    name: 'deep water green',
    image: '/colors/classic colours/deep water green.png',
    category: 'classic',
  },
  {
    id: 'forest green',
    name: 'forest green',
    image: '/colors/classic colours/forest green.png',
    category: 'classic',
  },
  {
    id: 'gold',
    name: 'gold',
    image: '/colors/classic colours/gold.png',
    category: 'classic',
  },
  {
    id: 'heron-blue',
    name: 'heron-blue',
    image: '/colors/classic colours/heron-blue.png',
    category: 'classic',
  },
  {
    id: 'iron ore',
    name: 'iron ore',
    image: '/colors/classic colours/iron ore.png',
    category: 'classic',
  },
  {
    id: 'labrador blue',
    name: 'labrador blue',
    image: '/colors/classic colours/labrador blue.png',
    category: 'classic',
  },
  {
    id: 'melchers green',
    name: 'melchers green',
    image: '/colors/classic colours/melchers green.png',
    category: 'classic',
  },
  {
    id: 'metro brown',
    name: 'metro brown',
    image: '/colors/classic colours/metro brown.png',
    category: 'classic',
  },
  {
    id: 'mist green',
    name: 'mist green',
    image: '/colors/classic colours/mist green.png',
    category: 'classic',
  },
  {
    id: 'pacific turquise',
    name: 'pacific turquise',
    image: '/colors/classic colours/pacific turquise.png',
    category: 'classic',
  },
  {
    id: 'pebblestone',
    name: 'pebblestone',
    image: '/colors/classic colours/pebblestone.png',
    category: 'classic',
  },
  {
    id: 'polar white',
    name: 'polar white',
    image: '/colors/classic colours/polar white.png',
    category: 'classic',
  },
  {
    id: 'regent grey',
    name: 'regent grey',
    image: '/colors/classic colours/regent grey.png',
    category: 'classic',
  },
  {
    id: 'royale blue',
    name: 'royale blue',
    image: '/colors/classic colours/royale blue.png',
    category: 'classic',
  },
  {
    id: 'sage green',
    name: 'sage green',
    image: '/colors/classic colours/sage green.png',
    category: 'classic',
  },
  {
    id: 'sapphire blue',
    name: 'sapphire blue',
    image: '/colors/classic colours/sapphire blue.png',
    category: 'classic',
  },
  {
    id: 'slate-blue',
    name: 'slate-blue',
    image: '/colors/classic colours/slate-blue.png',
    category: 'classic',
  },
  {
    id: 'spruce green',
    name: 'spruce green',
    image: '/colors/classic colours/spruce green.png',
    category: 'classic',
  },
  {
    id: 'stonegrey',
    name: 'stonegrey',
    image: '/colors/classic colours/stonegrey.png',
    category: 'classic',
  },
  {
    id: 'surf white',
    name: 'strf white',
    image: '/colors/classic colours/surf white.png',
    category: 'classic',
  },
  {
    id: 'tan',
    name: 'tan',
    image: '/colors/classic colours/tan.png',
    category: 'classic',
  },
  {
    id: 'tile red',
    name: 'tile red',
    image: '/colors/classic colours/tile red.png',
    category: 'classic',
  },
  {
    id: 'turquoise',
    name: 'turquoise',
    image: '/colors/classic colours/turquoise.png',
    category: 'classic',
  },
  {
    id: 'white-white',
    name: 'white-white',
    image: '/colors/classic colours/white-white.png',
    category: 'classic',
  },
  {
    id: 'wicker',
    name: 'wicker',
    image: '/colors/classic colours/wicker.png',
    category: 'classic',
  },
  //  Printed Series Colours
  {
    id: 'acorn',
    name: 'acorn',
    image: '/colors/printed series/acorn.jpg',
    category: 'printed',
  },
  {
    id: 'Aged-copper',
    name: 'Aged-copper',
    image: '/colors/printed series/Aged-copper.jpg',
    category: 'printed',
  },
  {
    id: 'Autumn',
    name: 'Autumn',
    image: '/colors/printed series/Autumn.jpg',
    category: 'printed',
  },
  {
    id: 'barnboard',
    name: 'barnboard',
    image: '/colors/printed series/barnboard.jpg',
    category: 'printed',
  },
  {
    id: 'birch',
    name: 'birch',
    image: '/colors/printed series/birch.jpg',
    category: 'printed',
  },
  {
    id: 'canyon',
    name: 'canyon',
    image: '/colors/printed series/canyon.jpg',
    category: 'printed',
  },
  {
    id: 'dark-zinc',
    name: 'dark-zinc',
    image: '/colors/printed series/dark-zinc.jpg',
    category: 'printed',
  },
  {
    id: 'durango',
    name: 'durango',
    image: '/colors/printed series/durango.jpg',
    category: 'printed',
  },
  {
    id: 'espresso',
    name: 'espresso',
    image: '/colors/printed series/espresso.jpg',
    category: 'printed',
  },
  {
    id: 'frontier',
    name: 'frontierard',
    image: '/colors/printed series/frontier.jpg',
    category: 'printed',
  },
  {
    id: 'gunstock',
    name: 'gunstock',
    image: '/colors/printed series/gunstock.jpg',
    category: 'printed',
  },
  {
    id: 'Homestead',
    name: 'Homestead',
    image: '/colors/printed series/Homestead.jpg',
    category: 'printed',
  },
  {
    id: 'Light zinc',
    name: 'Light zinc',
    image: '/colors/printed series/Light zinc.jpg',
    category: 'printed',
  },
  {
    id: 'ponderosa',
    name: 'ponderosa',
    image: '/colors/printed series/ponderosa.jpg',
    category: 'printed',
  },
  {
    id: 'Rustic-red',
    name: 'Rustic-red',
    image: '/colors/printed series/Rustic-red.jpg',
    category: 'printed',
  },
  {
    id: 'Saddle',
    name: 'Saddle',
    image: '/colors/printed series/Saddle.jpg',
    category: 'printed',
  },
  {
    id: 'ash wood',
    name: 'Polyester - ash wood',
    image: '/colors/printed series/polyester/ash wood.jpg',
    category: 'printed',
  },
  {
    id: 'concrete',
    name: 'Polyester - concrete',
    image: '/colors/printed series/polyester/concrete.jpg',
    category: 'printed',
  },
  {
    id: 'corten',
    name: 'Polyester - corten',
    image: '/colors/printed series/polyester/corten.jpg',
    category: 'printed',
  },
  {
    id: 'heritage',
    name: 'Polyester - heritage',
    image: '/colors/printed series/polyester/heritage.jpg',
    category: 'printed',
  },
  {
    id: 'knotty pine',
    name: 'Polyester - knotty pine',
    image: '/colors/printed series/polyester/knotty pine.jpg',
    category: 'printed',
  },
  {
    id: 'Light pine',
    name: 'Polyester - Light pine',
    image: '/colors/printed series/polyester/light pine.jpg',
    category: 'printed',
  },
  {
    id: 'mesquite',
    name: 'Polyester - mesquite',
    image: '/colors/printed series/polyester/mesquite.jpg',
    category: 'printed',
  },
  // Tex Series Colors
  {
    id: 'Burnished-Slate',
    name: 'Burnished-Slate',
    image: '/colors/Tex series/Burnished-Slate-1.png',
    category: 'tex',
  },
  {
    id: 'Dark-Brown',
    name: 'Dark-Brown',
    image: '/colors/Tex series/Dark-Brown.png',
    category: 'tex',
  },
  {
    id: 'Dark-Graphite',
    name: 'Dark-Graphite',
    image: '/colors/Tex series/Dark-Graphite.png',
    category: 'tex',
  },
  {
    id: 'Graphite',
    name: 'Graphite',
    image: '/colors/Tex series/Graphite.png',
    category: 'tex',
  },
  {
    id: 'Kona-Brown',
    name: 'Kona-Brown',
    image: '/colors/Tex series/Kona-Brown.png',
    category: 'tex',
  },
  {
    id: 'Onyx-Black',
    name: 'Onyx-Black',
    image: '/colors/Tex series/Onyx-Black.png',
    category: 'tex',
  },
  // Signature Colors
  {
    id: 'Black',
    name: 'Black',
    image: '/colors/signature Colours/black.png',
    category: 'signature',
  },
  {
    id: 'bronze',
    name: 'bronze',
    image: '/colors/signature Colours/bronze.png',
    category: 'signature',
  },
  {
    id: 'CHAMPAGNE-METALLIC',
    name: 'CHAMPAGNE-METALLIC',
    image: '/colors/signature Colours/CHAMPAGNE-METALLIC.png',
    category: 'signature',
  },
  {
    id: 'Colonial-red',
    name: 'Colonial-red',
    image: '/colors/signature Colours/Colonial-red.png',
    category: 'signature',
  },
  {
    id: 'copper-penny',
    name: 'copper-penny',
    image: '/colors/signature Colours/copper-penny.png',
    category: 'signature',
  },
  {
    id: 'dark-bronze',
    name: 'dark-bronze',
    image: '/colors/signature Colours/dark-bronze.png',
    category: 'signature',
  },
  {
    id: 'forest-green',
    name: 'forest-green',
    image: '/colors/signature Colours/forest-green.png',
    category: 'signature',
  },
  {
    id: 'hartford-green',
    name: 'hartford-green',
    image: '/colors/signature Colours/hartford-green.png',
    category: 'signature',
  },
  {
    id: 'hemlock-green',
    name: 'hemlock-green',
    image: '/colors/signature Colours/hemlock-green.png',
    category: 'signature',
  },
  {
    id: 'mocha',
    name: 'mocha',
    image: '/colors/signature Colours/mocha.png',
    category: 'signature',
  },
  {
    id: 'old-town-grey',
    name: 'old-town-grey',
    image: '/colors/signature Colours/old-town-grey.png',
    category: 'signature',
  },
  {
    id: 'old-zinc-grey',
    name: 'old-zinc-grey',
    image: '/colors/signature Colours/old-zinc-grey.png',
    category: 'signature',
  },
  {
    id: 'parchment',
    name: 'parchment',
    image: '/colors/signature Colours/parchment.png',
    category: 'signature',
  },
  {
    id: 'regal-blue',
    name: 'regal-blue',
    image: '/colors/signature Colours/regal-blue.png',
    category: 'signature',
  },
  {
    id: 'regal-white',
    name: 'regal-white',
    image: '/colors/signature Colours/regal-white.png',
    category: 'signature',
  },
  {
    id: 'retro-red',
    name: 'retro-red',
    image: '/colors/signature Colours/retro-red.png',
    category: 'signature',
  },
  {
    id: 'sierra-tan',
    name: 'sierra-tan',
    image: '/colors/signature Colours/sierra-tan.png',
    category: 'signature',
  },
  {
    id: 'silver-metallic',
    name: 'silver-metallic',
    image: '/colors/signature Colours/silver-metallic.png',
    category: 'signature',
  },
  {
    id: 'slate-grey',
    name: 'slate-grey',
    image: '/colors/signature Colours/slate-grey.png',
    category: 'signature',
  },
  {
    id: 'terra-cotta',
    name: 'terra-cotta',
    image: '/colors/signature Colours/terra-cotta.png',
    category: 'signature',
  },
  {
    id: 'twilight-blue',
    name: 'twilight-blue',
    image: '/colors/signature Colours/twilight-blue.png',
    category: 'signature',
  },
  {
    id: 'weathered-copper',
    name: 'weathered-copper',
    image: '/colors/signature Colours/weathered-copper.png',
    category: 'signature',
  },
  {
    id: 'weathered-zinc',
    name: 'weathered-zinc',
    image: '/colors/signature Colours/weathered-zinc.png',
    category: 'signature',
  },
];