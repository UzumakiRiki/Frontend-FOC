import React from 'react';

interface ImageGalleryProps {
  imageUrl: string | null;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ imageUrl }) => {
  if (!imageUrl) return null;

  return (
    <div style={{ marginTop: '20px', textAlign: 'center' }}>
      <h2>Generated Image</h2>
      <img
        src={imageUrl}
        alt="Generated"
        style={{
          maxWidth: '512px',
          maxHeight: '512px',
          border: '2px solid #ccc',
          borderRadius: '8px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.alt = "Image failed to load.";
          target.style.display = "none";
        }}
      />
    </div>
  );
};

export default ImageGallery;
