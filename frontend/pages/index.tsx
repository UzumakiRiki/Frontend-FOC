import Head from 'next/head';
import { useState } from 'react';
import UploadForm from '../components/UploadForm';
import ImageGallery from '../components/ImageGallery';

const API_URL = process.env.NEXT_PUBLIC_GENERATE_API_URL || "https://freedom-of-creaition.onrender.com";

export default function Home() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async (file: File) => {
    setImageUrl(null);
    setError(null);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch(`${API_URL}/generate`, {
        method: 'POST',
        body: formData
      });

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }

      const data = await res.json();
      console.log('Response from backend:', data);

      // Prepend backend base URL to relative image path
      setImageUrl(`${API_URL}${data.image_url}`);
    } catch (err: any) {
      console.error('Upload failed:', err);
      setError('Something went wrong. Try again!');
    }
  };

  return (
    <>
      <Head>
        <title>Freedom of CreAItion</title>
      </Head>
      <main style={{ textAlign: 'center', padding: '4rem' }}>
        <h1>Freedom of CreAItion</h1>
        <UploadForm onGenerate={handleGenerate} />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <ImageGallery imageUrl={imageUrl} />
      </main>
    </>
  );
}
