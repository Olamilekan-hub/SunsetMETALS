"use client";

import Link from "next/link";
import Image from "next/image";
import { images } from "@/data";
import { Breadcrumbs1 } from "@/components/ui/Breadcrumb";

export default function Colours() {
  return (
    <main className="w-full">
      {/* Breadcrumb */}
      <Breadcrumbs1
        crumbs={{
          subpage1: "colors",
        }}
      />

      {/* Page Header */}
      <section className="relative bg-[url('/image.png')] bg-cover bg-center bg-no-repeat py-12 lg:py-32 after:absolute after:inset-0 after:bg-black after:opacity-30">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-2xl lg:text-5xl font-bold mb-6">
              Metal Roofing Colors
            </h1>
            <p className="text-xl text-forest-100 leading-relaxed">
              Choose from our extensive palette of premium colors featuring
              advanced coating technology for lasting beauty and protection.
            </p>
          </div>
        </div>
      </section>

      {/* Color Grid */}
      <section className="py-20 relative bg-[#8D9E76] bg-cover bg-center bg-no-repeat border-y border-gray-100">
        <div className=" mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Available Colors
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Browse our complete color selection. Click on any color to view
              detailed information and technical specifications.
            </p>
          </div>

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
                      // style={{
                      //   filter: 'contrast(1.2) brightness(1.1) saturate(1.2)',
                      //   imageRendering: 'auto',
                      // }}
                    />
                    {image.title && (
                      <div className="text-center text-[#ff7a1a] absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-75 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-[#ff7a1a] t font-semibold text-3xl md:text-5xl">
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
        </div>
      </section>

      {/* Color Information */}
      <section className="py-20  bg-[#8D9E76] border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-50 mb-8 text-center">
              Color Technology
            </h2>
            <div className="bg-[#3A4A35] shadow p-8 rounded-xl shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-100 mb-4">
                    PVDF Coating System
                  </h3>
                  <ul className="space-y-3 text-gray-100">
                    <li>• Superior fade resistance</li>
                    <li>• Excellent weatherability</li>
                    <li>• Enhanced corrosion protection</li>
                    <li>• Easy maintenance and cleaning</li>
                    <li>• 25-year color warranty available</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-100 mb-4">
                    Application Process
                  </h3>
                  <ul className="space-y-3 text-gray-100">
                    <li>• Multi-coat application system</li>
                    <li>• Consistent color distribution</li>
                    <li>• Quality control testing</li>
                    <li>• Environmental compliance</li>
                    <li>• Industry-leading adhesion</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-16 bg-[#8D9E76]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-amber-50 border border-amber-200 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-amber-800 mb-4">
              Important Color Notice
            </h3>
            <p className="text-amber-700 mb-4">
              Colors shown on screen may vary from actual product colors due to
              monitor settings and display variations. We strongly recommend
              ordering physical color samples before making final color
              selections.
            </p>
            <p className="text-amber-700">
              All colors are subject to normal weathering and may show
              variations when exposed to different environmental conditions.
              Metallic colors may show directional variation depending on
              viewing angle.
            </p>
          </div>
        </div>
      </section>

      <div className="border-b border-gray-100"></div>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sunset-500 to-sunset-600 bg-[#8D9E76]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Choose Your Colors?
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
            Contact us to request color samples or discuss custom color options
            for your metal roofing project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="inline-flex items-center px-8 py-4 bg-[#FF8A33] text-white rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Request Color Samples
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-sunset-600 transition-colors font-semibold"
            >
              Contact Color Expert
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
