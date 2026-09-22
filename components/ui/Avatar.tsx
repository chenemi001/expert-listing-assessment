import Image from "next/image";

type AvatarProps = {
  src: string;
  alt: string;
  size?: number;
  className?: string;
};

export default function Avatar({
  src,
  alt,
  size = 40,
  className = "",
}: AvatarProps) {
  return (
    <div
      className={`relative shrink-0 overflow-hidden rounded-full ${className}`}
      style={{
        width: size,
        height: size,
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={`${size}px`}
        className="object-cover"
      />
    </div>
  );
}