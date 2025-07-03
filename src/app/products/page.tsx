"use client";

import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs1 } from "@/components/ui/Breadcrumb";
import { ArrowRight } from "lucide-react";

interface Product {
  id: string;
  src: string;
  alt: string;
  title?: string;
  href: string | URL;
}

const images: Product[] = [
  {
    id: "1",
    src: "/download1.jpeg",
    alt: "Snaplock",
    title: "Snaplock",
    href: "/products/profiles/snaplock",
  },
  {
    id: "2",
    src: "/download2.jpeg",
    alt: "Standing Seam",
    title: "Standing Seam",
    href: "/products/profiles/standing-seam",
  },
  {
    id: "3",
    src: "/download3.jpeg",
    alt: "Trapezoid",
    title: "Trapezoid",
    href: "/products/profiles/trapezoid",
  },
  {
    id: "4",
    src: "/download4.jpeg",
    alt: "Roof Flashings",
    title: "Roof Flashings",
    href: "/products/flashings/roof",
  },
  {
    id: "5",
    src: "/download5.jpeg",
    alt: "1 ⅛ Roof Flashings",
    title: "1 ⅛ Roof Flashings",
    href: "/products/flashings/roof118",
  },
  {
    id: "6",
    src: "/download6.jpeg",
    alt: "⅞ Roof Flashings",
    title: "⅞ Roof Flashings",
    href: "/products/flashings/roof78",
  },
  {
    id: "7",
    src: "/download7.jpeg",
    alt: "Wall Flashings",
    title: "Wall Flashings",
    href: "/products/flashings/wall",
  },
  {
    id: "8",
    src: "/download8.jpeg",
    alt: "1 ⅛ Wall Flashings",
    title: "1 ⅛ Wall Flashings",
    href: "/products/flashings/wall118",
  },
  {
    id: "9",
    src: "/download9.jpeg",
    alt: "Custom Flashing Info",
    title: "Custom Flashing Info",
    href: "/products/flashings/custom",
  },
  {
    id: "10",
    src: "/download10.jpeg",
    alt: "Extra Materials",
    title: "Extra Materials",
    href: "/products/materials",
  },
  {
    id: "11",
    src: "/download11.jpeg",
    alt: "Clips/Closures",
    title: "Clips/Closures",
    href: "/products/accessories",
  },
  {
    id: "12",
    src: "/download1.jpeg",
    alt: "⅞ Wall Flashings",
    title: "⅞ Wall Flashings",
    href: "/products/flashings/wall78",
  },
];

export default function Products() {
  return (
    <main className="w-full">
      {/* Breadcrumb */}
      <Breadcrumbs1
        crumbs={{
          subpage1: "products",
        }}
      />

      {/* Page Header */}
      <section className="relative bg-[url('/image.png')] bg-cover bg-center bg-no-repeat py-12 lg:py-32 after:absolute after:inset-0 after:bg-black after:opacity-40">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-2xl lg:text-5xl font-bold mb-6">
              Metal Roofing Products
            </h1>
            <p className="text-sm lg:text-xl text-sunset-100 leading-relaxed">
              Explore our comprehensive range of premium metal roofing systems,
              engineered for the Canadian climate with superior durability and
              style.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-gray-100 bg-[#8D9E76]">
        <div className="max-w-[95vw]  lg:max-w-[80vw] mx-auto px-2 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6">
            {images.map((image) => (
              <Link
                href={image.href}
                key={image.id}
                className="hover:text-sunset-600 transition-colors"
              >
                <div
                  key={image.id}
                  className="group relative aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {image.title && (
                    <div className="text-right absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-75 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white font-semibold text-3xl md:text-5xl">
                          {image.title}
                        </h3>
                      </div>
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-[#8D9E76]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-100 mb-12 text-center">
              Product Categories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className=" p-8 rounded-xl shadow-lg rounded-xl bg-[#3A4A35] shadow-md shadow-[#3A4A35]">
                <h3 className="text-2xl font-bold text-gray-100 mb-4">
                  Roofing Profiles
                </h3>
                <p className="text-gray-200 mb-6">
                  Our metal roofing profiles include snap lock panels, standing
                  seam systems, and trapezoid panels designed for various
                  architectural requirements.
                </p>
                <ul className="space-y-2 text-gray-200">
                  <li>• Snap Lock Panels</li>
                  <li>• Standing Seam Systems</li>
                  <li>• Trapezoid Profiles</li>
                  <li>• Custom Profiles Available</li>
                </ul>
              </div>
              <div className="rounded-xl bg-[#3A4A35] shadow-md shadow-[#3A4A35] p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-100 mb-4">
                  Flashings & Accessories
                </h3>
                <p className="text-gray-200 mb-6">
                  Complete your roofing system with our precision-formed
                  flashings and accessories for professional installation and
                  weatherproofing.
                </p>
                <ul className="space-y-2 text-gray-200">
                  <li>• Ridge Caps</li>
                  <li>• Gutter Systems</li>
                  <li>• Snow Guards</li>
                  <li>• Ventilation Components</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-y border-gray-100 py-20 bg-[#8D9E76]">
        <div className="container mx-auto px-4 text-center flex flex-col items-center">
          <h2 className="text-4xl font-bold text-gray-100 mb-6">
            Need Help Choosing?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Our metal roofing experts are here to help you select the perfect
            products for your project requirements and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="inline-flex items-center px-8 py-4 text-white bg-[#FF7A1A]  rounded-lg hover:bg-bg-[#FF7A1A]/10  transition-colors font-semibold"
            >
              Get Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg  transition-colors font-semibold"
            >
              Contact Expert
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
