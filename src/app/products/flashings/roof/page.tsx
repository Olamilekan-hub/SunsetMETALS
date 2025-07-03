import DynamicProductPage from '../../../../components/sections/DynamicFlashing';
import { RoofFlashingProducts, RoofflashItem } from '@/data/index';

export default function RoofFlashings() {

  const flashItems = RoofflashItem

  const crumbs = {
  subpage1: "products",
  subpage2: "flashings",
  subpage3: "⅞ Roof Flashings"
};


  return (
    <DynamicProductPage
      productData={RoofFlashingProducts}
      flashItems={flashItems}
      crumbs={crumbs}
      showDownloadButton={true}
    />
  );
}