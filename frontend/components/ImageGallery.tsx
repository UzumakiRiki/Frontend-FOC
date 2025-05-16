export default function ImageGallery({ imageUrl }: { imageUrl: string | null }) {
  if (!imageUrl) return null;

  return (
    <div>
      <h3>Generated Image</h3>
      <img src={imageUrl} alt="Generated Result" style={{ maxWidth: '100%', marginTop: '1rem' }} />
    </div>
  );
}
