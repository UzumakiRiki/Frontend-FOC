type Props = {
  imageUrl: string | null;
};

export default function ImageGallery({ imageUrl }: Props) {
  if (!imageUrl) return null;

  return (
    <div style={{ marginTop: '2rem', textAlign: 'center' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
        Generated Image
      </h2>
      <img
        src={imageUrl}
        alt="Generated Result"
        style={{
          maxWidth: '100%',
          height: 'auto',
          border: '2px solid #444',
          borderRadius: '12px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
        }}
      />
    </div>
  );
}
