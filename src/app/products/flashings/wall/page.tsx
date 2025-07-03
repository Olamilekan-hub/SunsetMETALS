'use client';
import DynamicProductPage from '../../../../components/sections/DynamicFlashing';
import { WallflashItem, WallFlashingProducts } from '@/data/index';

export default function WallFlashings() {
  
  const productData = WallFlashingProducts

  const flashItems = WallflashItem
  
  const crumbs = {
    subpage1: "products",
    subpage2: "flashings",
    subpage3: "Wall Flashings"
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