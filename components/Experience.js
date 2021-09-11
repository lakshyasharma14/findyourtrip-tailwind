import Image from "next/image";
import MediumCard from "./MediumCard";

function Experince({ title, items, urlPrefix }) {
  return (
    <>
      <h2 className="text-4xl font-semibold py-8">{title}</h2>
      <div className="flex grid grid-flow-col auto-cols-max space-x-3 overflow-scroll scroll-snap-x md:overflow-hidden md:flex-wrap scrollbar-hide p-3 -ml-3">
        {items.map((item, index) => (
          <MediumCard img={urlPrefix + item.img} title={item.title} />
        ))}
      </div>
    </>
  );
}

export default Experince;
