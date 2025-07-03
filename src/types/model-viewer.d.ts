// Type declarations for @google/model-viewer
import React from 'react';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        src?: string;
        alt?: string;
        poster?: string;
        'auto-rotate'?: boolean;
        'camera-controls'?: boolean;
        loading?: string;
        reveal?: string;
        'environment-image'?: string;
        'shadow-intensity'?: string;
        'camera-orbit'?: string;
        'min-camera-orbit'?: string;
        'max-camera-orbit'?: string;
        'interpolation-decay'?: string;
      };
    }
  }
}
