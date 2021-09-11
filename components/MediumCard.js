import Image from "next/image";
function MediumCard({ img, title }) {
  console.log(img);
  return (
    <div className="flex flex-col cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
      <Image
        src={img}
        layout="responsive"
        className="rounded-xl min-w-full"
        width={80}
        height={80}
      />
      <Image
        src={img}
        layout="fill"
        className="rounded-xl min-w-full"
        width={80}
        height={80}
      />
      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  );
}

export default MediumCard;
