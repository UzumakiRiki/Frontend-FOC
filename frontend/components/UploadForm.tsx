import { useState } from 'react';

export default function UploadForm({ onGenerate }: { onGenerate: (file: File) => void }) {
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (file) onGenerate(file);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
      <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files?.[0] || null)} />
      <button type="submit" disabled={!file}>Generate Image</button>
    </form>
  );
}
