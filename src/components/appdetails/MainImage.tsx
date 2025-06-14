
import React from "react";

interface MainImageProps {
  src?: string;
  alt: string;
}

const MainImage: React.FC<MainImageProps> = ({ src, alt }) => {
  if (!src) return null;
  return (
    <div className="mb-16">
      <img 
        src={src} 
        alt={alt}
        className="w-full h-96 object-cover rounded-2xl shadow-2xl"
      />
    </div>
  );
};
export default MainImage;
