"use client";

import Image from "next/image";
import { GalleryImages } from "@/data/index";
import { Breadcrumbs1 } from "@/components/ui/Breadcrumb";

const images = GalleryImages;

export default function GalleryPage() {
  return (
    <div className="min-h-screen  bg-[#8D9E76]">
      {/* Breadcrumb */}
      <Breadcrumbs1
        crumbs={{
          subpage1: "gallery",
        }}
      />

      {/* Page Header */}
      <div className="bg-gradient-to-r from-metal-dark via-forest-green to-sunset-orange py-16 bg-[url('/image.png')] bg-cover bg-center bg-no-repeat">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Project Gallery
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Explore our portfolio of exceptional metal roofing installations
              across Canada. From residential homes to commercial complexes and
              agricultural facilities.
            </p>
          </div>
        </div>
      </div>

      <div className="border-b border-gray-200"></div>

      {/* Image Grid */}
      <section className="bg-[#8D9E76] py12">
      <div className="max-w-[80vw] mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {images.map((image) => (
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-lg lg:text-2xl">
                      {image.title}
                    </h3>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      </section>

      {/* Video Section */}
      <section className="bg-[#8D9E76] py-6">
        <div className="max-w-[80vw] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative aspect-video overflow-hidden rounded-lg shadow-lg">
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              controls
            >
              <source src="/videos/Untitled 1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
    </div>
  );
}