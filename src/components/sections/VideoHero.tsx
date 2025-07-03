'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import { VideoHeroProps } from '@/types/index'; 

const VideoHero: React.FC<VideoHeroProps> = ({
  videoSrc,
  youtubeId,
  fallbackImage = '/images/hero-fallback.jpg',
  title,
  subtitle,
  ctaText,
  ctaLink,
  locationBadge,
}) => {
  const [videoError, setVideoError] = useState(false);
  const [showYouTube, setShowYouTube] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Handle YouTube video ID extraction from URL if needed
  const extractYouTubeId = (url: string): string | null => {
    const regex = /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  // Determine video source type
  const getVideoSource = () => {
    if (youtubeId) return { type: 'youtube', id: youtubeId };
    if (videoSrc) {
      const ytId = extractYouTubeId(videoSrc);
      if (ytId) return { type: 'youtube', id: ytId };
      return { type: 'direct', src: videoSrc };
    }
    return null;
  };

  const videoSource = getVideoSource();

  // Auto-trigger YouTube video on component mount
  useEffect(() => {
    if (videoSource?.type === 'youtube') {
      // Auto-start YouTube video after 2 seconds for better UX
      const timer = setTimeout(() => {
        setShowYouTube(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [videoSource]);

  // Handle scroll for fade effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    console.error('Video error:', e);
    setVideoError(true);
  };

  const handleVideoLoaded = () => {
    setVideoLoaded(true);
  };

  const handlePlayYouTube = () => {
    setShowYouTube(true);
  };

  // Calculate fade effect based on scroll position
  const fadeEnd = typeof window !== 'undefined' ? window.innerHeight * 0.8 : 800;
  const scrollProgress = Math.min(scrollY / fadeEnd, 1);
  const opacity = 1 - scrollProgress;
  const translateY = scrollY * 0.1;

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Media */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {videoSource?.type === 'youtube' && !showYouTube && (
          // YouTube Thumbnail with Enhanced Play Button
          <div className="relative w-full h-full">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ 
                backgroundImage: `url(https://img.youtube.com/vi/${videoSource.id}/maxresdefault.jpg)` 
              }}
            />
            {/* Loading indicator */}
            {/* <div className="absolute top-4 right-4 bg-black/50 text-white px-3 rounded-full text-sm backdrop-blur-sm">
              Video Loading...
            </div> */}
            
            <button
              onClick={handlePlayYouTube}
              className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/30 transition-all duration-500 group"
            >
              <div className="relative">
                {/* Pulsing rings */}
                <div className="absolute inset-0 w-24 h-24 bg-white/20 rounded-full animate-ping"></div>
                <div className="absolute inset-2 w-20 h-20 bg-white/30 rounded-full animate-ping animation-delay-300"></div>
              </div>
            </button>
          </div>
        )}

        {videoSource?.type === 'youtube' && showYouTube && (
          <div className="absolute inset-0 w-full h-screen">
            <iframe
              className="w-full h-screen object-cover scale-500 lg:scale-125 md:scale-200"
              src={`https://www.youtube.com/embed/${videoSource.id}?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playlist=${videoSource.id}&start=0&end=0&version=3&enablejsapi=1&origin=${typeof window !== 'undefined' ? window.location.origin : ''}`}
              allow="autoplay; encrypted-media; accelerometer; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ pointerEvents: 'none' }}
            />
          </div>
        )}

        {videoSource?.type === 'direct' && !videoError && (
          <div className="absolute inset-0 w-full h-full">
            {/* Loading indicator for video */}
            {!videoLoaded && (
              <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm z-10">
                Loading video...
              </div>
            )}
            
            <video
              className="w-full h-full object-cover absolute inset-0"
              autoPlay
              muted={true}
              loop
              playsInline
              preload="metadata"
              poster={fallbackImage}
              onError={handleVideoError}
              onLoadedData={handleVideoLoaded}
              onCanPlayThrough={(e) => {
                const video = e.target as HTMLVideoElement;
                // Ensure video is muted before trying to play
                video.muted = true;
                video.play().catch((error) => {
                  console.log('Autoplay failed:', error);
                  // If autoplay fails, we'll fall back to the poster image
                });
              }}
            >
              <source src={videoSource.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}

        {(videoError || !videoSource) && (
          // Fallback Image
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${fallbackImage})` }}
          />
        )}
        
        {/* Enhanced Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-sunset-orange/20 rounded-full animate-float" />
        <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-sunset-red/15 rounded-full animate-float-delayed" />
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-white/20 rounded-full animate-float-slow" />
        <div className="absolute bottom-1/4 right-1/3 w-5 h-5 bg-sunset-orange/15 rounded-full animate-float-fast" />
        
        {/* Additional decorative elements */}
        <div className="absolute top-1/2 left-1/6 w-2 h-16 bg-gradient-to-b from-sunset-orange/30 to-transparent rounded-full animate-pulse" />
        <div className="absolute top-3/4 right-1/6 w-2 h-12 bg-gradient-to-b from-sunset-red/30 to-transparent rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Hero Content */}
      <div 
        className="absolute inset-0 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto h-full flex items-center justify-center"
        style={{
          opacity: opacity,
          transform: `translateY(${translateY}px)`,
          transition: 'none' // Disable transition for smooth scroll effect
        }}
      >
        <div className="mt-">
          {/* Location Badge */}
          {locationBadge && (
            <div className="inline-flex items-center gap-2 bg-sunset-orange/90 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg animate-slide-down">
              <MapPin className="w-4 h-4" />
              {locationBadge}
            </div>
          )}

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-[7rem] font-black text-white mb-6 leading-tight animate-slide-up uppercase">
            <span className="block bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              {title.split(' ').slice(0, 2).join(' ')}
            </span>
            <span className="block text-sunset-orange mt-2">
              {title.split(' ').slice(2).join(' ')}
            </span>
          </h1>

          {/* Subtitle */}
          <em className="text-md lg:text-2xl font-semibold text-gray-200 space-y-8 max-w-4xl mx-auto leading-relaxed font-light animate-slide-up-delayed">
            {subtitle}
          </em>

          {/* CTA Buttons - Premium Design */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up-more-delayed mt-12">
            <Link
              href={ctaLink}
              className="button-shimmer group relative inline-flex items-center gap-4 bg-gradient-to-r from-sunset-orange via-sunset-red to-burnt-orange text-white px-4 md:px-12 py-3 md:py-6 rounded-lg md:rounded-2xl text-lg md:text-xl font-bold shadow-2xl hover:shadow-sunset-orange/40 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 overflow-hidden"
            >
              {/* Button Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent transform translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
              
              {/* Button Content */}
              <span className="relative z-10 text-xs lg:text-sm flex items-center gap-2">
                <span className="bg-white/30 p-1 rounded-lg md:rounded-2xl group-hover:bg-white/30 transition-colors duration-300">
                  📋
                </span>
                {ctaText}
              </span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
              
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-lg md:rounded-2xl border-2 border-white/30 group-hover:border-white/60 transition-colors duration-300" />
            </Link>
            
            <Link
              href="/gallery"
              className="group relative inline-flex items-center gap-4 bg-white/10 backdrop-blur-lg text-white border-2 border-white/40 px-4 md:px-12 py-3 md:py-6 rounded-xl md:rounded-2xl text-lg md:text-xl font-semibold hover:bg-white/20 hover:border-white/70 transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 overflow-hidden"
            >
              {/* Glass Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-600" />
              
              {/* Button Content */}
              <span className="relative z-10 text-xs lg:text-sm flex items-center gap-2">
                <span className="bg-white/30 p-1 rounded-full group-hover:bg-white/40 transition-colors duration-300">
                  🖼️
                </span>
                VIEW GALLERY
              </span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
              
              {/* Ripple Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent transform scale-0 group-hover:scale-100 transition-transform duration-600" />
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center cursor-pointer hover:border-white transition-colors">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
          </div>
        </div> */}
      </div>

      {/* Enhanced CSS Animations */}
      <style jsx>{`
        @keyframes slideDown {
          from { 
            opacity: 0; 
            transform: translateY(-30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes slideUp {
          from { 
            opacity: 0; 
            transform: translateY(50px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
            opacity: 0.7;
          }
          25% { 
            transform: translateY(-15px) rotate(90deg); 
            opacity: 1;
          }
          50% { 
            transform: translateY(-30px) rotate(180deg); 
            opacity: 0.7;
          }
          75% { 
            transform: translateY(-15px) rotate(270deg); 
            opacity: 1;
          }
        }
        
        .animate-slide-down {
          animation: slideDown 0.8s ease-out;
        }
        
        .animate-slide-up {
          animation: slideUp 1s ease-out 0.3s both;
        }
        
        .animate-slide-up-delayed {
          animation: slideUp 1s ease-out 0.6s both;
        }
        
        .animate-slide-up-more-delayed {
          animation: slideUp 1s ease-out 0.9s both;
        }
        
        .animate-slide-up-final {
          animation: slideUp 1s ease-out 1.2s both;
        }
        
        .animate-float {
          animation: float 20s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float 25s ease-in-out infinite 5s;
        }
        
        .animate-float-slow {
          animation: float 30s ease-in-out infinite 10s;
        }
        
        .animate-float-fast {
          animation: float 15s ease-in-out infinite 15s;
        }

        /* Enhance gradient text effect */
        .bg-clip-text {
          background-clip: text;
          -webkit-background-clip: text;
        }

        /* Animation delay utilities */
        .animation-delay-300 {
          animation-delay: 300ms;
        }

        /* Enhanced button effects */
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .button-shimmer::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default VideoHero;