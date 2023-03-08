import Image from "next/image";

type TitleImgType = {
  imageName: string;
};

export default function TitleImage({ imageName }: TitleImgType) {
  return (
    <Image
      src={`/images/${imageName}.webp`}
      alt=""
      width={1200}
      height={515}
      sizes="100vw"
      style={{
        width: "100%",
        height: "auto",
      }}
      priority={true}
    />
  );
}
