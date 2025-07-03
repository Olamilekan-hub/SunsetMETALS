'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Users, Award, Calendar, MapPin, Shield, Wrench, Heart, TrendingUp } from 'lucide-react';

const stats = [
  { icon: Calendar, label: 'Years in Business', value: '25+' },
  { icon: Users, label: 'Projects Completed', value: '5,000+' },
  { icon: MapPin, label: 'Cities Served', value: '150+' },
  { icon: Award, label: 'Industry Awards', value: '12' },
];

const values = [
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'We use only the highest quality materials and maintain strict quality control standards on every project.'
  },
  {
    icon: Wrench,
    title: 'Expert Craftsmanship',
    description: 'Our certified installers bring decades of experience and continuous training to ensure perfect installations.'
  },
  {
    icon: Heart,
    title: 'Customer First',
    description: 'Your satisfaction is our priority. We build lasting relationships through honest communication and reliable service.'
  },
  {
    icon: TrendingUp,
    title: 'Innovation',
    description: 'We stay ahead of industry trends, incorporating the latest technologies and sustainable practices.'
  },
];

const team = [
  {
    name: 'Michael Chen',
    position: 'Founder & CEO',
    image: '/images/team/michael-chen.jpg',
    bio: 'With over 25 years in the metal roofing industry, Michael founded SunSet Metal Forming with a vision to revolutionize Canadian roofing standards.'
  },
  {
    name: 'Sarah Thompson',
    position: 'Operations Director',
    image: '/images/team/sarah-thompson.jpg',
    bio: 'Sarah ensures every project runs smoothly from initial consultation to final installation, maintaining our high standards of quality and service.'
  },
  {
    name: 'David Rodriguez',
    position: 'Lead Installation Specialist',
    image: '/images/team/david-rodriguez.jpg',
    bio: 'David leads our installation teams with 15+ years of hands-on experience and expertise in complex commercial projects.'
  },
];

const certifications = [
  { name: 'CRA Certified', image: '/images/certifications/cra-certified.jpg' },
  { name: 'IIC Membership', image: '/images/certifications/iic-member.jpg' },
  { name: 'WSIB Compliant', image: '/images/certifications/wsib.jpg' },
  { name: 'CSA Approved', image: '/images/certifications/csa.jpg' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sunset-orange/5 to-metal-light">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-metal-dark via-forest-green to-sunset-orange py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              About SunSet Metal Forming
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-200 max-w-3xl mx-auto"
            >
              Pioneering excellence in Canadian metal roofing for over 25 years
            </motion.p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Company Story */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-metal-dark mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Founded in 1999, SunSet Metal Forming began as a small family business with a big vision: 
                  to provide Canadian homeowners and businesses with the finest metal roofing solutions available. 
                  What started in a modest workshop in Toronto has grown into one of Canada&apos;s most trusted 
                  metal roofing specialists.
                </p>
                <p>
                  Our founder, Michael Chen, immigrated to Canada with extensive experience in metallurgy and 
                  a passion for craftsmanship. Recognizing the need for durable, beautiful roofing solutions 
                  that could withstand Canada&apos;s harsh climate, he set out to create a company that would set 
                  new standards in the industry.
                </p>
                <p>
                  Today, we&apos;ve completed over 5,000 projects across Canada, from coast to coast. Our commitment 
                  to quality, innovation, and customer satisfaction has earned us recognition as industry leaders 
                  and the trust of homeowners, contractors, and architects nationwide.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-lg overflow-hidden shadow-xl"
            >
              <Image
                src="/images/about/company-story.jpg"
                alt="SunSet Metal Forming facility"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-sunset-orange to-forest-green rounded-full mb-4">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-metal-dark mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Values */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-metal-dark mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do, from selecting materials to training our team.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-sunset-orange to-forest-green rounded-lg mb-4">
                  <value.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-metal-dark mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-metal-dark mb-4">Leadership Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the experienced professionals who lead SunSet Metal Forming to new heights.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-metal-dark mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sunset-orange font-medium mb-3">
                    {member.position}
                  </p>
                  <p className="text-gray-600">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-metal-dark mb-4">Certifications & Memberships</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence is recognized by leading industry organizations.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="relative h-20 mb-4">
                  <Image
                    src={cert.image}
                    alt={cert.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="font-medium text-metal-dark">{cert.name}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-forest-green to-sunset-orange rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Experience the SunSet Difference
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
              Join thousands of satisfied customers who have chosen SunSet Metal Forming 
              for their roofing needs. Quality, reliability, and excellence - that&apos;s our promise.
            </p>
            <div className="space-x-4">
              <button className="bg-white text-forest-green px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Started Today
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-forest-green transition-colors">
                View Our Work
              </button>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
