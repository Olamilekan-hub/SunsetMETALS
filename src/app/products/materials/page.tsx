import DynamicProductPage from '../../../components/sections/DynamicFlashing';

export default function WallFlashings() {

  const productData = {
    title: 'Extra Materials',
    description: 'Premium architectural metal roofing with concealed fasteners and superior weather protection.',
    image: '/image.png',
    heroImage: '/image.png', 
    downloadText: 'Extra Materials Guide'
  };

  const flashItems = [
    {
      id: 'valley-flashing',
      title: 'Valley Flashing',
      description: 'Valley flashing directs water away from the intersection of two roof planes.',
       images: [
        {
          src: '/Ridge-cap-watermarked-1.jpg',
          alt: 'Ridge Cap Photo',
          width: 450,
          height: 200
        },
      ]
    },
    {
      id: 'ridge-cap',
      title: 'Ridge Cap',
      description: 'Ridge cap flashing is primarily used at the ridge of the roof to close off the gap where two upward slopes meet.',
      images: [
        {
          src: '/Ridge-cap-watermarked-1.jpg',
          alt: 'Ridge Cap Photo',
          width: 450,
          height: 200
        },
      ]
    },
    {
      id: 'step-flashing',
      title: 'Step Flashing',
      description: 'Step flashing protects the intersection between a roof and vertical surfaces like walls or chimneys.',
       images: [
        {
          src: '/Ridge-cap-watermarked-1.jpg',
          alt: 'Ridge Cap Photo',
          width: 450,
          height: 200
        },
      ]
    }
  ];

  const crumbs = {
  subpage1: "products",
  subpage2: "Extra Materials"
};

  return (
    <DynamicProductPage
      productData={productData}
      flashItems={flashItems}
      crumbs={crumbs}
      showDownloadButton={true}
    />
  );
}