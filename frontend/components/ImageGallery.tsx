type Props = {
  imageUrl: string | null;
};

export default function ImageGallery({ imageUrl }: Props) {
  if (!imageUrl) return null;

  return (
    <div style={{ marginTop: '2rem' }}>
      <h2>Generated Image</h2>
      <img
        src={imageUrl}
        alt="Generated Result"
        style={{ maxWidth: '100%', height: 'auto', border: '2px solid #333' }}
      />
    </div>
  );
}
