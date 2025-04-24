
import { useState } from "react";
import { cn } from "@/lib/utils";

interface BeforeAfterImage {
  before: string;
  after: string;
  description: string;
}

interface ImageCarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  images: BeforeAfterImage[];
}

const ImageCarousel = ({ images, className, ...props }: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className={cn("relative", className)} {...props}>
      <div className="relative flex gap-4 justify-center mb-4">
        <div className="w-1/2">
          <img
            src={images[currentIndex].before}
            alt="Before"
            className="w-full h-64 object-cover rounded-lg"
          />
          <p className="text-center mt-2 text-gray-600">Antes</p>
        </div>
        <div className="w-1/2">
          <img
            src={images[currentIndex].after}
            alt="After"
            className="w-full h-64 object-cover rounded-lg"
          />
          <p className="text-center mt-2 text-gray-600">Depois</p>
        </div>
      </div>
      <p className="text-center text-gray-700 mb-4">
        {images[currentIndex].description}
      </p>
      <div className="flex justify-center gap-2">
        <button
          onClick={prevImage}
          className="px-4 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600"
        >
          Anterior
        </button>
        <button
          onClick={nextImage}
          className="px-4 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600"
        >
          Próximo
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
