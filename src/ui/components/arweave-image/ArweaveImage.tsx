"use client";

import { useState } from "react";

interface ArweaveImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ArweaveImage({
  src,
  alt,
  className = "",
}: ArweaveImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  // En desarrollo mostramos placeholder
  const isDev = process.env.NODE_ENV === "development";

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg" />
      )}

      {isDev ? (
        <div className="bg-gray-200 border-2 border-dashed w-full h-full flex items-center justify-center">
          <span className="text-on-surface/60">Arweave Image</span>
        </div>
      ) : error ? (
        <div className="bg-red-100 border border-red-300 w-full h-full flex items-center justify-center">
          <span className="text-red-500">Error loading image</span>
        </div>
      ) : (
        <img
          src={`https://arweave.net/${src}`}
          alt={alt}
          className="w-full h-full object-cover"
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setError(true);
          }}
        />
      )}
    </div>
  );
}
