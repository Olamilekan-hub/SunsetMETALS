import DynamicProductPage from '../../../../components/sections/DynamicFlashing';
import { Roof118FlashingProducts, Roof118flashItem } from '@/data/index';

export default function RoofFlashings() {

  const productData = Roof118FlashingProducts

  const flashItems = Roof118flashItem
  
  const crumbs = {
    subpage1: "products",
    subpage2: "flashings",
    subpage3: "1 ⅛ Roof Flashings"
  };
  
    return (
      <DynamicProductPage
        productData={productData}
        flashItems={flashItems}
        crumbs = {crumbs}
        showDownloadButton={true}
      />
    );
  }