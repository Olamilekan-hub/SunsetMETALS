"use client";

import VideoHero from "@/components/sections/VideoHero";
import { ArrowRight, Award, Shield, Truck, Clock } from "lucide-react";
import Link from "next/link";
import Quote from "./quote/page";

export default function Home() {
  return (
    <main className="relative !bg-white/0">
      {/* Fixed Video Background */}
      <VideoHero
        // videoSrc="https://www.youtube.com/watch?v=gCiek_aMhcE"
        videoSrc="/videos/Untitled 1.mp4"
        fallbackImage="/image.png"
        title="sunset metal forming"
        subtitle="We form the panel on site or pickup."
        ctaText="GET QUOTE"
        ctaLink="/quote"
        locationBadge="Serving Alberta & Beyond"
      />

      {/* Scrollable Content Container */}
      <div className="relative z-10 max-w-[75%] mx-auto !bg-white/0">
        {/* Hero Spacer - Takes up the initial viewport height */}
        <div className="!bg-white/0" />

        {/* Company Introduction */}
        <section className="relative">
          <div className="mx-auto">
            <div className="mx-auto text-center bg-[#8D9E76] p-6 md:p-14">
              <h2 className="text-2xl lg:text-4xl font-bold text-gray-100 mb-6">
                Canada&apos;s Trusted Metal Roofing Experts
              </h2>
              <p className="text-sm md:text-lg lg:text-xl text-gray-200 mb-8 leading-relaxed">
                For over {new Date().getFullYear() - 1995} years, SunSet Metal
                Forming has been at the forefront of metal roofing innovation.
                From our Lamont County, Alberta headquarters, we serve
                contractors and builders across Canada with premium metal
                roofing solutions engineered to withstand our demanding climate.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 px-2 pt-4">
                <div className="text-center rounded-xl bg-[#3A4A35] shadow-md shadow-[#3A4A35] p-3">
                  <Award className="h-8 w-8 md:h-12 md:w-12 text-white mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-100">
                    Premium Quality
                  </h3>
                  <p className="text-gray-100 text-sm">
                    Industry-leading materials
                  </p>
                </div>
                <div className="text-center rounded-xl bg-[#3A4A35] shadow-md shadow-[#3A4A35] p-3">
                  <Shield className="h-8 w-8 md:h-12 md:w-12 text-white mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-100">
                    Weather Resistant
                  </h3>
                  <p className="text-gray-100 text-sm">
                    Built for Canadian climate
                  </p>
                </div>
                <div className="text-center rounded-xl bg-[#3A4A35] shadow-md shadow-[#3A4A35] p-3">
                  <Truck className="h-8 w-8 md:h-12 md:w-12 text-white mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-100">Fast Delivery</h3>
                  <p className="text-gray-100 text-sm">
                    Quick turnaround times
                  </p>
                </div>
                <div className="text-center rounded-xl bg-[#3A4A35] shadow-md shadow-[#3A4A35] p-3">
                  <Clock className="h-8 w-8 md:-12 wmd:-12 text-white mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-100">
                    Expert Support
                  </h3>
                  <p className="text-gray-100 text-sm">Technical assistance</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-white relative">
          <Quote />
        </div>

        {/* Why Choose SunSet */}
        <section className="py-20 bg-[#8D9E76] relative">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-100 mb-6">
                  Why Choose SunSet Metal Forming?
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-[#3A4A35] shadow-md shadow-[#3A4A35] p-8 rounded-xl shadow-lg text-center">
                  <div className="h-16 w-16 bg-sunset-orange/10 rounded-lg flex items-center justify-center mb-6 text-center w-full mx-auto">
                    <Award className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-100 mb-4">
                    Premium Materials
                  </h3>
                  <p className="text-gray-200">
                    We use only the highest quality galvanized steel and
                    aluminum, with advanced coating systems for maximum
                    durability and longevity.
                  </p>
                </div>
                <div className="bg-[#3A4A35] shadow-md shadow-[#3A4A35] p-8 rounded-xl shadow-lg text-center">
                  <div className="h-16 w-16 bg-dark-green/10 rounded-lg flex items-center justify-center mb-6 text-center w-full mx-auto">
                    <Shield className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-100 mb-4">
                    Weather Protection
                  </h3>
                  <p className="text-gray-200">
                    Our metal roofing systems are engineered to withstand
                    extreme Canadian weather conditions, from heavy snow loads
                    to ice storms.
                  </p>
                </div>
                <div className="bg-[#3A4A35] shadow-md shadow-[#3A4A35] p-8 rounded-xl shadow-lg text-center">
                  <div className="h-16 w-16 bg-metal-gray/10 rounded-lg flex items-center justify-center mb-6 text-center w-full mx-auto">
                    <Truck className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-100 mb-4">
                    Fast Turnaround
                  </h3>
                  <p className="text-gray-200">
                    Quick production and delivery times ensure your projects
                    stay on schedule. Most orders ship within 2-3 business days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="border-b border-gray-100"></div>

        {/* CTA Section */}
        <section className="py-20 bg-[#8D9E76] relative">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Contact our experts today for personalized recommendations and
              competitive pricing on all your metal roofing needs.
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
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
