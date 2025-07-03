export interface Product {
  id: string;
  name: string;
  category: 'profiles' | 'flashings' | 'materials' | 'accessories';
  description: string;
  specifications: {
    gauges?: number[];
    bends?: number;
    girth?: number;
    measurements?: string;
  };
  imageUrl: string;
  modelUrl?: string;
  technicalDrawing?: string;
}

export interface ColorOption {
  id?: string;
  name: string;
  image?: string;
  category?: 'classic' | 'printed' | 'signature' | 'tex';
  description?: string;
  hexCode?: string;
}

export interface ProjectGalleryItem {
  id: string;
  title: string;
  category: 'residential' | 'agricultural' | 'commercial';
  imageUrl: string;
  description: string;
  location?: string;
}

export interface QuoteRequest {
  contactInfo: {
    name: string;
    email: string;
    phone: string;
  };
  projectDetails: {
    type: 'residential' | 'agricultural' | 'commercial';
    squareFootage: string;
    timeline: string;
    location: string;
  };
  materialPreferences: {
    profileType: string;
    color: string;
  };
  additionalComments: string;
  files?: File[];
}

export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}

export interface VideoHeroProps {
  videoSrc?: string;
  youtubeId?: string;
  fallbackImage?: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  locationBadge?: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title?: string;
}

export interface FlashImage {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
}

export interface FlashItemType {
  id?: string | number;
  title: string;
  description: string;
  images?: FlashImage[];
}

export interface Breadcrumb {
  label: string;
  href?: string;
}

export interface ProductDataType {
  heroImage?: string;
  image: string;
  imageWidth?: number;
  imageHeight?: number;
  title?: string;
  profile?: string;
  subtitle?: string;
  description?: string;
  about?: string;
  downloadText?: string;
}

export interface Products {
  id: string;
  src: string;
  alt: string;
  title?: string;
  href: string | URL;
}

export interface ColorGridProps {
  colors: ColorOption[];
  categories?: string[]; // Add categories filter
  title?: string;
  columns?: number;
  showDisclaimer?: boolean;
  className?: string;
}

export interface Crumb {
  subpage1: string;
  subpage2?: string;
  subpage3?: string;
}

export interface BreadcrumbProps {
  crumbs: Crumb;
}
