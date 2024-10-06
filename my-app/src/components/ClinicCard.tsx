import React from 'react';

interface Clinic {
  name: string;
  image: string;
  rating: string;
  type: string;
  price: string;
  distance: string;
  description: string;
}

interface ClinicCardProps {
  clinic: Clinic;
}

const ClinicCard: React.FC<ClinicCardProps> = ({ clinic }) => {
  return (
    <article className="flex flex-col w-full min-h-[88px] max-md:max-w-full">
      <div className="flex flex-col justify-center px-4 w-full rotate-[8.742277657347563e-8rad] max-md:max-w-full">
        <div className="w-full border border-solid bg-stone-300 border-stone-300 min-h-[1px] max-md:max-w-full" />
      </div>
      <div className="flex flex-wrap gap-4 items-start px-4 py-3 w-full max-md:max-w-full">
        <div className="flex overflow-hidden flex-col w-20">
          <img loading="lazy" src={clinic.image} alt={clinic.name} className="object-contain w-20 rounded-2xl aspect-square" />
        </div>
        <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
          <div className="flex flex-wrap gap-2 items-center w-full text-2xl tracking-normal leading-7 text-zinc-900 max-md:max-w-full">
            <h2 className="flex-1 shrink self-stretch my-auto basis-0 text-ellipsis max-md:max-w-full">
              {clinic.name}
            </h2>
            <img loading="lazy" src={clinic.rating} alt="Clinic rating" className="object-contain shrink-0 self-stretch my-auto aspect-[5] w-[100px]" />
          </div>
          <div className="flex flex-col mt-2 w-full text-sm tracking-wide leading-5 text-zinc-700 max-md:max-w-full">
            <div className="flex-1 shrink gap-1 self-stretch w-full max-md:max-w-full">
              {clinic.type} • {clinic.price} • {clinic.distance}
            </div>
            <p className="text-ellipsis max-md:max-w-full">
              {clinic.description}
            </p>
          </div>
        </div>
        <div className="flex gap-2.5 items-start w-6 min-h-[64px]">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/78c87de929a25b71da94f968e7bf634891e142d980adf4f87ac1848639de177e?placeholderIfAbsent=true&apiKey=0339c476d92443ac95849fae30c5eeb3" alt="" className="object-contain w-6 aspect-square" />
        </div>
      </div>
    </article>
  );
};

export default ClinicCard;