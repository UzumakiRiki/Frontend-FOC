// components/ImageGallery.tsx

import React from 'react';

interface ImageGalleryProps {
  imageUrl: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ imageUrl }) => {
  if (!imageUrl) return null;

  return (
    <div style={{ marginTop: '20px', textAlign: 'center' }}>
      <h2>Generated Image</h2>
      <img
        src={imageUrl}
        alt="Generated Result"
        style={{
          maxWidth: '90%',
          height: 'auto',
          border: '2px solid #333',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
        }}
      />
    </div>
  );
};

export default ImageGallery;
