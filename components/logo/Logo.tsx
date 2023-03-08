import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/logo.svg"
      alt="dananz"
      width={126}
      height={54}
      priority={true}
    />
  );
}
