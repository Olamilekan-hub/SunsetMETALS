import DynamicProductPage from '../../../../components/sections/DynamicFlashing';
import { Wall118FlashingProducts, Wall118flashItem } from '@/data/index';

export default function WallFlashings() {

  const productData = Wall118FlashingProducts

  const flashItems = Wall118flashItem

const crumbs = {
  subpage1: "products",
  subpage2: "flashings",
  subpage3: "1 ⅛ Wall Flashings"
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