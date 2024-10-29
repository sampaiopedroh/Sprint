import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import React, { useRef, useEffect } from 'react';

export const HomePage = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
      videoRef.current.loop = true;
    }
  }, []);

  return (
    <div className="bg-gray-100">
      <Header />

      <div className="relative mt-[${headerHeight}px]"> 
        <video
          ref={videoRef}
          src="https://insights.techmahindra.com/videos/techm_banner2.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full min-h-[calc(100vh-${headerHeight}px)] object-cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-6xl md:text-8xl">
          TECH MAHINDRA
        </div>
      </div>

      <div className="relative mt-[calc(100vh-${headerHeight}px)]">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <img
              src="https://www.grandepremio.com.br/cdn-cgi/image/width=1200,height=675,fit=contain,gravity=0.5x0.5,quality=75,format=webp/wp-content/uploads/2024/10/imagem_2024-10-22_132225940.png"
              alt="Imagem 1"
              className="w-full h-auto rounded-md"
            />
            <div>
              <h2 className="text-3xl font-bold mb-4">Título da Seção 1</h2>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Título da Seção 2</h2>
              <p className="text-gray-700">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <img
              src="https://www.grandepremio.com.br/cdn-cgi/image/width=1200,height=675,fit=contain,gravity=0.5x0.5,quality=75,format=webp/wp-content/uploads/2024/10/imagem_2024-10-22_132225940.png"
              alt="Imagem 2"
              className="w-full h-auto rounded-md"
            />

            <img
              src="https://www.grandepremio.com.br/cdn-cgi/image/width=1200,height=675,fit=contain,gravity=0.5x0.5,quality=75,format=webp/wp-content/uploads/2024/10/imagem_2024-10-22_132225940.png"
              alt="Imagem 3"
              className="w-full h-auto rounded-md"
            />
            <div>
              <h2 className="text-3xl font-bold mb-4">Título da Seção 3</h2>
              <p className="text-gray-700">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};