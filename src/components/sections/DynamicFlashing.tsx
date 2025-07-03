  'use client';

  import Image from 'next/image';

  import { 

    Download,
  } from 'lucide-react';
  import { FlashItemType, ProductDataType, Breadcrumb, } from '@/types/index';
  import Breadcrumbs from '@/components/ui/Breadcrumb';

  const FlashItem = ({ item, index = 0 }: { item: FlashItemType; index?: number }) => {
    
    return (
      <section className="bg-[#8D9E76] pt-12 pb-6 bg-cover bg-center bg-no-repeat w-full ">
        {index > 0 && <div className="border-6 border-gray-200 my-6"></div>}
        
        <div className={`flex flex-col items-center justify-between lg:flex-row -gap8 md:gap- md:py-10 lg:py-20 px-5 md:px-25 lg:px-60 text-white w-full`}>
          
          {/* Text Section */}
          <div className="flex flex-col w-full pr- ">
            <h2 className='text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 uppercase'>
              {item.title}
            </h2>
            <p className="text-sm md:text-md lg:text-lg text-sunset-800 leading-relaxed">
              {item.description}
            </p>
          </div>

          {/* Images Section */}
              {item.images && item.images.map((image, imgIndex) => (
              <div key={imgIndex} className="w-full">
                  <Image 
                  src={image.src} 
                  alt={image.alt || `${item.title} image ${imgIndex + 1}`} 
                  width={500} 
                  height={image.height || 200} 
                  className="shadow-lg object-cover rounded-lg bg-[#3A4A35]/40"
                  priority={imgIndex === 0}
                  style={{
                    // backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    }}
                  />
              </div>
              ))}
        </div>
      </section>
    );
  };

  type DynamicProductPageProps = {
    productData: ProductDataType;
    flashItems?: FlashItemType[];
    breadcrumbs?: Breadcrumb[];
    customColors?: Record<string, string>;
    showDownloadButton?: boolean;
    crumbs: { subpage1: string; subpage2?: string; subpage3?: string };
  };

  export default function DynamicProductPage({ 
    productData,
    flashItems = [],
    customColors = {},
    showDownloadButton = true,
    crumbs
  }: DynamicProductPageProps)  {
    
    const colors = {
      primary: '#8D9E76',
      primaryHover: '#7A8B66',
      accent: '#4A5A42',
      text: 'text-sunset-800',
      ...customColors
    };

    return (
      <div className="min-h-screen">

        {/* Dynamic Breadcrumb */}
        <Breadcrumbs crumbs={crumbs} />

        {/* Custom Flashing Contact Section */}
        <div className="bg-[#3A4A35] py-4 flex flex-col items-center justify-center">
          <em className='text-center text-[#f7931e] '>Contact for custom flashings please provide drawings.</em>
        </div>

        {/* Hero Section */}
        <section 
          className="relative bg-cover bg-center bg-no-repeat py-12 lg:py-20 after:absolute after:inset-0 after:bg-black after:opacity-40"
          style={{
            backgroundImage: `url('${productData.heroImage || productData.image}')`
          }}
        >
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-2xl lg:text-5xl font-bold my-6">
                {productData.title || productData.profile}
              </h1>
              {productData.subtitle && (
                <p className="text-lg lg:text-xl mt-4 text-gray-200">
                  {productData.subtitle}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Product Details Section */}
        <section className="py-5 md:py-10 lg:py-20 px-5 md:px-15 lg:px-40 flex flex-col items-center justify-between lg:flex-row gap-8 md:gap-18 bg-[#8D9E76] border-b-8 border-white">

          {/* Image Section */}
          <div 
            className="border-b-8 border-l-6 rounded-lg shadow-[#3A4A35] shadow-md max-w-5xl max-h-3xl lg:w-[50%] p-4 md:p-6 lg:p-8 order-2 md:order-1"
            style={{ borderColor: colors.primary }}
          >
            <Image 
              src={productData.image} 
              alt={productData.title || productData.profile || 'Product image'} 
              width={productData.imageWidth || 600} 
              height={productData.imageHeight || 200} 
              className="rounded-lg shadow-lg object-fill max-h-[400px] w-full bg-white"
              priority
            />
          </div>

          {/* Text Section */}
          <div className="lg:w-[50%] order-1 md:order-2">
            <h2 className='text-3xl md:text-4xl lg:text-6xl font-bold text-gray-100 mb-4'>
              {productData.title || productData.profile}
            </h2>
            <p className={`text-sm md:text-md lg:text-lg text-white leading-relaxed`}>
              {productData.description || productData.about}
            </p>

            {/* Download Button */}
            {showDownloadButton && (
              <button 
                className="z-10 flex items-center justify-between gap-1 text-white font-bold text-[0.8rem] md:text-[1rem] py-2 md:py-4 px-4 md:px-6 rounded-lg mt-6 uppercase bg-[#3A4A35] hover:bg-[#3A4A35]/60"
              >
                <Download className="text-white font-bold mr-3" />
                {productData.downloadText || `${productData.title || productData.profile} guide`}
              </button>
            )}
          </div>  
        </section>

        {/* Dynamic Flash Items */}
        {flashItems.map((item, index) => (
          <FlashItem 
            key={item.id || index} 
            item={item} 
            index={index}
          />
        ))}
        <div className="border-18 border-gray-200"></div>

      </div>
    );
  }

  export { FlashItem };