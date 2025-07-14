"use client";

import Image, { StaticImageData } from "next/image";

interface CircleImageProps {
  src: string | StaticImageData; // ← fix here
  alt?: string;
  size?: number; // Optional, defaults to 160
  priority?: boolean;
}

const CircleImage: React.FC<CircleImageProps> = ({
  src,
  alt = "Profile",
  size = 160,
  priority = false,
}) => {
  return (
    <div
      className="rounded-full overflow-hidden relative border-4 border-white shadow-lg"
      style={{ width: size, height: size }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-center"
        sizes={`${size}px`}
        priority={priority}
      />
    </div>
  );
};

export default CircleImage;
