import Head from 'next/head';
import { useState } from 'react';
import UploadForm from '../components/UploadForm';
import ImageGallery from '../components/ImageGallery';

export default function Home() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleGenerate = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);

    const res = await fetch(`${process.env.NEXT_PUBLIC_GENERATE_API_URL}/generate`, {
      method: 'POST',
      body: formData
    });

    const data = await res.json();
    setImageUrl(data.image_url || null);
  };

  return (
    <>
      <Head>
        <title>Freedom of CreAItion</title>
      </Head>
      <main style={{ textAlign: 'center', padding: '4rem' }}>
        <h1>Freedom of CreAItion</h1>
        <UploadForm onGenerate={handleGenerate} />
        <ImageGallery imageUrl={imageUrl} />
      </main>
    </>
  );
}
