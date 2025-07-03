'use client';

import React, { useEffect, useRef, useState } from 'react';

/**
 * ModelViewer3D Component with Enhanced Camera Controls
 * 
 * Camera Control Examples:
 * 
 * Basic Usage:
 * <ModelViewer3D src="/model.glb" alt="3D Model" />
 * 
 * Custom Camera Position (close-up view):
 * <ModelViewer3D 
 *   src="/model.glb" 
 *   alt="3D Model"
 *   cameraOrbit="0deg 90deg 5m"
 *   minCameraOrbit="auto auto 2m"
 *   maxCameraOrbit="auto auto 10m"
 * />
 * 
 * Wide angle view:
 * <ModelViewer3D 
 *   src="/model.glb" 
 *   alt="3D Model"
 *   cameraOrbit="45deg 60deg 20m"
 *   fieldOfView="45deg"
 * />
 * 
 * Top-down view:
 * <ModelViewer3D 
 *   src="/model.glb" 
 *   alt="3D Model"
 *   cameraOrbit="0deg 0deg 10m"
 * />
 * 
 * Side view with restricted rotation:
 * <ModelViewer3D 
 *   src="/model.glb" 
 *   alt="3D Model"
 *   cameraOrbit="90deg 90deg 8m"
 *   minCameraOrbit="85deg 85deg auto"
 *   maxCameraOrbit="95deg 95deg auto"
 * />
 * 
 * Slow auto-rotation:
 * <ModelViewer3D 
 *   src="/model.glb" 
 *   alt="3D Model"
 *   autoRotateDelay={1000}
 *   rotationPerSecond="10deg"
 * />
 */

interface ModelViewer3DProps {
  src: string;
  alt: string;
  poster?: string;
  autoRotate?: boolean;
  cameraControls?: boolean;
  className?: string;
  width?: string;
  height?: string;
  // Camera control props
  cameraOrbit?: string;
  minCameraOrbit?: string;
  maxCameraOrbit?: string;
  cameraTarget?: string;
  fieldOfView?: string;
  minFieldOfView?: string;
  maxFieldOfView?: string;
  // Additional control props
  autoRotateDelay?: number;
  rotationPerSecond?: string;
  interactionPrompt?: 'auto' | 'when-focused' | 'none';
  interactionPromptThreshold?: number;
  // Lighting control props
  environmentImage?: string;
  shadowIntensity?: string;
  shadowSoftness?: string;
  exposure?: string;
  skyboxImage?: string;
  tone?: 'commerce' | 'neutral' | 'auto';
}

const ModelViewer3D: React.FC<ModelViewer3DProps> = ({
  src,
  alt,
  poster,
  autoRotate = true,
  cameraControls = true,
  className = '',
  width = '100%',
  height = '400px',
  // Camera control defaults
  cameraOrbit = '45deg 75deg 15m',
  minCameraOrbit = 'auto auto 3m',
  maxCameraOrbit = 'auto auto 18m',
  cameraTarget = 'auto auto auto',
  fieldOfView = 'auto',
  minFieldOfView = 'auto',
  maxFieldOfView = 'auto',
  // Additional control defaults
  autoRotateDelay = 3000,
  rotationPerSecond = '30deg',
  interactionPrompt = 'auto',
  interactionPromptThreshold = 3000,
  // Lighting defaults for cinematic look
  environmentImage = '/models/cinematic.hdr',
  shadowIntensity = '0.8',
  shadowSoftness = '0.5',
  exposure = '1.2',
  skyboxImage,
  tone = 'commerce',
}) => {
  const modelViewerRef = useRef<HTMLElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isLibraryLoaded, setIsLibraryLoaded] = useState(false);

  useEffect(() => {
    // Check if model-viewer is already defined to avoid re-registration
    if (!customElements.get('model-viewer')) {
      // Dynamically import model-viewer for client-side only
      import('@google/model-viewer').then(() => {
        console.log('Model viewer library loaded successfully');
        setIsLibraryLoaded(true);
      }).catch((error) => {
        console.error('Failed to load model-viewer:', error);
        setHasError(true);
      });
    } else {
      setIsLibraryLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (isLibraryLoaded && modelViewerRef.current) {
      const modelViewer = modelViewerRef.current as HTMLElement & {
        addEventListener: (event: string, handler: (event: Event) => void) => void;
        removeEventListener: (event: string, handler: (event: Event) => void) => void;
      };
      
      const handleLoad = () => {
        console.log('3D model loaded successfully');
        setIsLoaded(true);
        setHasError(false);
      };
      
      const handleError = (event: Event) => {
        console.error('Failed to load 3D model:', event);
        console.error('Model src:', src);
        setHasError(true);
        setIsLoaded(false);
      };

      const handleProgress = (event: Event & { detail?: { totalProgress?: number } }) => {
        const progress = (event.detail?.totalProgress || 0) * 100;
        console.log('Loading progress:', progress + '%');
      };
      
      // Add additional debugging
      console.log('Setting up model viewer for:', src);
      console.log('Model viewer element:', modelViewer);
      
      modelViewer.addEventListener('load', handleLoad);
      modelViewer.addEventListener('error', handleError);
      modelViewer.addEventListener('progress', handleProgress);
      
      // Test if the model file is accessible
      fetch(src)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
          }
          console.log('Model file is accessible, size:', response.headers.get('content-length'));
        })
        .catch(error => {
          console.error('Model file not accessible:', error);
          setHasError(true);
        });
      
      return () => {
        modelViewer.removeEventListener('load', handleLoad);
        modelViewer.removeEventListener('error', handleError);
        modelViewer.removeEventListener('progress', handleProgress);
      };
    }
  }, [isLibraryLoaded, src]);

  return (
    <div className={`model-viewer-container ${className}`} style={{ width, height }}>
      {!isLibraryLoaded && !hasError && (
        <div className="flex items-center justify-center h-full bg-gray-100 rounded-lg">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-sunset-orange mx-auto mb-2"></div>
            <p className="text-gray-600">Loading 3D Viewer...</p>
          </div>
        </div>
      )}
      
      {hasError && (
        <div className="flex items-center justify-center h-full bg-gray-100 rounded-lg">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-2xl">!</span>
            </div>
            <p className="text-gray-600">Failed to load 3D model</p>
            <p className="text-sm text-gray-500 mt-2">Please check your internet connection</p>
          </div>
        </div>
      )}

      {isLibraryLoaded && !hasError && (
        <model-viewer
          ref={modelViewerRef}
          src={src}
          alt={alt}
          poster={poster}
          auto-rotate={autoRotate}
          camera-controls={cameraControls}
          camera-orbit={cameraOrbit}
          min-camera-orbit={minCameraOrbit}
          max-camera-orbit={maxCameraOrbit}
          camera-target={cameraTarget}
          field-of-view={fieldOfView}
          min-field-of-view={minFieldOfView}
          max-field-of-view={maxFieldOfView}
          auto-rotate-delay={autoRotateDelay}
          rotation-per-second={rotationPerSecond}
          interaction-prompt={interactionPrompt}
          interaction-prompt-threshold={interactionPromptThreshold}
          environment-image={environmentImage}
          shadow-intensity={shadowIntensity}
          shadow-softness={shadowSoftness}
          {...(skyboxImage && { 'skybox-image': skyboxImage })}
          {...(tone && { 'tone-mapping': tone })}
          {...(exposure && { exposure: exposure })}
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'transparent',
          }}
          loading="lazy"
          reveal="auto"
          interpolation-decay="200"
        >
          {/* Loading indicator */}
          {!isLoaded && (
            <div slot="progress-bar" className="progress-bar">
              <div className="progress-bar-container">
                <div className="progress-bar-fill"></div>
              </div>
            </div>
          )}
          
          {/* Error fallback */}
          <div slot="poster" className="poster-container">
            <div className="flex items-center justify-center h-full bg-gray-100 rounded-lg">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-sunset-orange rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl">3D</span>
                </div>
                <p className="text-gray-600">Click to load 3D Model</p>
              </div>
            </div>
          </div>
        </model-viewer>
      )}

      <style jsx>{`
        .progress-bar {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          width: 200px;
          height: 4px;
          background: rgba(0, 0, 0, 0.1);
          border-radius: 2px;
          overflow: hidden;
        }
        
        .progress-bar-container {
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, #ff6b35, #f7931e);
          border-radius: 2px;
          transform: scaleX(0);
          transform-origin: left;
          animation: loading 2s ease-in-out infinite;
        }
        
        @keyframes loading {
          0% { transform: scaleX(0); }
          50% { transform: scaleX(0.7); }
          100% { transform: scaleX(1); }
        }
        
        .poster-container {
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  );
};

export default ModelViewer3D;
