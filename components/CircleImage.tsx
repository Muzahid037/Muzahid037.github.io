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
    // <div
    //   className="rounded-full overflow-hidden relative border-4 border-white shadow-lg"
    //   style={{ width: size, height: size }}
    // >
    <div
      className="
      w-[192px] 
      h-[192px]
      md:w-[256px] 
      md:h-[256px]
      rounded-full
      relative 
      border-4
      border-cyan-400 
      shadow-lg 
      shadow-cyan-500/50
      "
    >
      <Image
        src={src}
        alt={alt}
        fill
        className=" object-center rounded-full"
        priority={priority}
      />
    </div>
  );
};

export default CircleImage;
