"use client";

import Link from "next/link";
import ColorGrid from "@/components/ui/ColorGrid";
import { classicColors } from "@/data";
import { Breadcrumbs2 } from "@/components/ui/Breadcrumb";

export default function Products() {
  return (
    <main className="w-full">
      {/* Breadcrumb */}
      <Breadcrumbs2
        crumbs={{
          subpage1: "colours",
          subpage2: "Signature Colours",
        }}
      />
      
      {/* Page Header */}
      <section className="relative bg-[url('/image.png')] bg-cover bg-center bg-no-repeat py-12 lg:py-32 after:absolute after:inset-0 after:bg-black after:opacity-40">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6">
              Signature Colours
            </h1>
          </div>
        </div>
      </section>

      <section className="px-2 md:px-15 lg:px-30 py-6 md:py-10 lg:py-20 bg-[#8D9E76] border-y border-gray-100">
        <div className="mx-auto px-4">
          <ColorGrid colors={classicColors} categories={["signature"]} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#3A4A35]">
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
              className="inline-flex items-center px-8 py-4 bg-sunset-500 bg-gray-100/50 text-gray-200 rounded-lg hover:bg-sunset-600 transition-colors font-semibold"
            >
              Get Free Quote
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-gray-100 text-gray-200 rounded-lg hover:bg-sunset-50 transition-colors font-semibold"
            >
              Contact Expert
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
