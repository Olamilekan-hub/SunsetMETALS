"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone, Mail, ChevronRight } from "lucide-react";
import { navigationItems, companyInfo } from "@/data";
import { NavigationItem } from "@/types";
import Image from "next/image";
import HeaderSearchBar from "../ui/HeaderSearchBar";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const openTimeout = useRef<NodeJS.Timeout | null>(null);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);
  const subOpenTimeout = useRef<NodeJS.Timeout | null>(null);
  const subCloseTimeout = useRef<NodeJS.Timeout | null>(null);
  
  // Handle scroll effect for glass morphism
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  // Clear all timeouts
  const clearAllTimeouts = () => {
    if (openTimeout.current) clearTimeout(openTimeout.current);
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    if (subOpenTimeout.current) clearTimeout(subOpenTimeout.current);
    if (subCloseTimeout.current) clearTimeout(subCloseTimeout.current);
  };

  // Handle main dropdown mouse enter
  const handleMainDropdownEnter = (label: string, hasChildren: boolean) => {
    if (!hasChildren) return;
    
    clearAllTimeouts();
    
    // Small delay to open dropdown to prevent accidental triggers
    openTimeout.current = setTimeout(() => {
      setActiveDropdown(label);
      setActiveSubDropdown(null);
    }, 150);
  };

  // Handle main dropdown mouse leave
  const handleMainDropdownLeave = () => {
    clearAllTimeouts();
    
    // Longer delay to close, giving user time to move to dropdown
    closeTimeout.current = setTimeout(() => {
      setActiveDropdown(null);
      setActiveSubDropdown(null);
    }, 300);
  };

  // Handle sub dropdown mouse enter
  const handleSubDropdownEnter = (label: string) => {
    clearAllTimeouts();
    
    subOpenTimeout.current = setTimeout(() => {
      setActiveSubDropdown(label);
    }, 100);
  };

  // Handle sub dropdown mouse leave
  const handleSubDropdownLeave = () => {
    clearAllTimeouts();
    
    subCloseTimeout.current = setTimeout(() => {
      setActiveSubDropdown(null);
    }, 200);
  };

  // Handle dropdown area mouse enter (keep dropdown open)
  const handleDropdownAreaEnter = () => {
    clearAllTimeouts();
  };

  const renderNavigationItem = (item: NavigationItem, level: number = 0) => {
    const hasChildren = item.children && item.children.length > 0;

    return (
      <div
        key={item.label}
        className={`relative ${level === 0 ? "group" : ""}`}
        onMouseEnter={() => {
          if (level === 0) {
            handleMainDropdownEnter(item.label, hasChildren);
          }
        }}
        onMouseLeave={() => {
          if (level === 0) {
            handleMainDropdownLeave();
          }
        }}
      >
        <Link
          href={item.href}
          className={`
            flex items-center gap-2 px-4 py-3 text-gray-700 hover:text-sunset-orange transition-all duration-300
            ${level === 0 ? "font-semibold text-base" : "text-sm font-medium"}
            ${level > 0 ? "pl-6" : ""}
            hover:bg-gray-50/50 rounded-md
          `}
        >
          {item.label}
          {hasChildren && (
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                activeDropdown === item.label ? "rotate-180" : ""
              }`}
            />
          )}
        </Link>

        {/* First level dropdown */}
        {hasChildren && level === 0 && activeDropdown === item.label && (
          <div
            className={`
              absolute left-0 top-full mt-1 bg-white/95 backdrop-blur-md shadow-xl border border-gray-200/50 rounded-xl z-50 min-w-56
              opacity-100 visible transform translate-y-0
              transition-all duration-200 ease-out
            `}
            onMouseEnter={handleDropdownAreaEnter}
            onMouseLeave={handleMainDropdownLeave}
          >
            {item.children?.map((child) => (
              <div
                key={child.label}
                className="relative"
                onMouseEnter={() => {
                  if (child.children) {
                    handleSubDropdownEnter(child.label);
                  }
                }}
                onMouseLeave={() => {
                  if (child.children) {
                    handleSubDropdownLeave();
                  }
                }}
              >
                <Link
                  href={child.href}
                  className="flex items-center justify-between px-4 py-3 text-sm font-medium text-gray-700 hover:bg-sunset-orange/10 hover:text-sunset-orange transition-all duration-200 first:rounded-t-xl last:rounded-b-xl"
                >
                  <span>{child.label}</span>
                  {child.children && (
                    <ChevronRight className="w-4 h-4 opacity-50" />
                  )}
                </Link>

                {/* Grandchild dropdown */}
                {child.children && activeSubDropdown === child.label && (
                  <div
                    className="absolute left-full top-0 ml-1 bg-white/95 backdrop-blur-md shadow-xl border border-gray-200/50 rounded-xl min-w-48 z-60"
                    onMouseEnter={handleDropdownAreaEnter}
                    onMouseLeave={handleSubDropdownLeave}
                  >
                    {child.children.map((grandchild) => (
                      <Link
                        key={grandchild.label}
                        href={grandchild.href}
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-sunset-orange/10 hover:text-sunset-orange transition-all duration-200 first:rounded-t-xl last:rounded-b-xl"
                      >
                        {grandchild.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-dark-green text-white py-3 px-4 relative z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 hover:text-sunset-orange transition-colors cursor-pointer">
              <Phone className="w-4 h-4" />
              <span>{companyInfo.contact.phone}</span>
            </div>
            <div className="flex items-center gap-2 hover:text-sunset-orange transition-colors cursor-pointer">
              <Mail className="w-4 h-4" />
              <span>{companyInfo.contact.email}</span>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-6">
            <span className="text-sunset-orange font-semibold tracking-wide">
              Proudly Canadian Made - Alberta
            </span>
            <HeaderSearchBar />
          </div>
          <div className="hidden md:block lg:hidden">
            <span className="text-sunset-orange font-semibold tracking-wide">
              Proudly Canadian Made - Alberta
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`
        sticky top-0 z-40 py-4 transition-all duration-300
        ${
          isScrolled
            ? "bg-gray-200 backdrop-blur-md shadow-lg border-b border-gray-200"
            : "bg-gray-200 shadow-md"
        }
      `}
      >
        <div className="xl:max-w-[75%] lg:max-w-[95%] md:max-w-[75%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link
              href="/"
              className={`flex items-center gap-3 transition-all duration-300 ${isScrolled ? "hover:scale-105" : "hover:opacity-90"}`}
            >
              <div className={`transition-all duration-300 ${isScrolled ? "lg:w-28 w-20 scale-110" : "lg:w-24 w-18"} pl-2`}>
                <Image
                  src="/logo_for_sm_1.png"
                  alt="SunSet Metal Forming Logo"
                  width={600}
                  height={600}
                  className="object-contain"
                />
              </div>
              <div
                className={`
                flex flex-col items-center text-center gap-1 transition-all duration-300
                ${
                  isScrolled
                    ? "transform scale-110"
                    : "transform scale-100"
                }
              `}
              >
                <div className={`transition-all duration-300 ${isScrolled ? "w-72 lg:w-96" : "w-60 lg:w-80"}`}>
                  <Image
                    src="/New_Project_3.png"
                    alt="SunSet Metal Forming"
                    width={3000}
                    height={800}
                    className="object-contain"
                  />
                </div>
                <em className={`transition-all duration-300 text-gray-600 font-medium tracking-wide ${isScrolled ? "text-sm lg:text-base" : "text-xs lg:text-sm"}`}>
                  {companyInfo.tagline}
                </em>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2">
              {navigationItems.map((item) => renderNavigationItem(item))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-3 rounded-lg text-gray-700 hover:text-sunset-orange hover:bg-gray-100 focus:outline-none transition-all duration-200"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200/50 shadow-lg">
            <nav className="px-4 py-6 space-y-1 max-h-96 overflow-y-auto">
              {navigationItems.map((item) => (
                <div
                  key={item.label}
                  className="border-b border-gray-100 last:border-b-0"
                >
                  <button
                    onClick={() => handleDropdownToggle(item.label)}
                    className="flex items-center justify-between w-full text-left py-3 px-2 text-gray-700 hover:text-sunset-orange hover:bg-gray-50 rounded-lg transition-all duration-200"
                  >
                    <span className="font-medium">{item.label}</span>
                    {item.children && (
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>

                  {item.children && activeDropdown === item.label && (
                    <div className="pl-4 pb-2 space-y-1">
                      {item.children.map((child) => (
                        <div key={child.label}>
                          <Link
                            href={child.href}
                            className="block py-2 px-3 text-sm text-gray-600 hover:text-sunset-orange hover:bg-gray-50 rounded-md transition-all duration-200"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {child.label}
                          </Link>
                          {child.children && (
                            <div className="pl-4 space-y-1">
                              {child.children.map((grandchild) => (
                                <Link
                                  key={grandchild.label}
                                  href={grandchild.href}
                                  className="block py-1 px-3 text-xs text-gray-500 hover:text-sunset-orange hover:bg-gray-50 rounded-md transition-all duration-200"
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  {grandchild.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="pt-4 mt-4 border-t border-gray-200">
                <Link
                  href="/quote"
                  className="block w-full bg-gradient-to-r from-sunset-orange to-sunset-red text-white text-center py-3 rounded-lg font-semibold shadow-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Quote
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;