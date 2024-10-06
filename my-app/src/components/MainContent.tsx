import React from 'react';
import ClinicCard from './ClinicCard';

interface Clinic {
  name: string;
  image: string;
  rating: string;
  type: string;
  price: string;
  distance: string;
  description: string;
}


const clinics: Clinic[] = [
  {
    name: "Washington Heights Asthma Clinic",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/c447472a4e5bd7fd81db425eba1b6688d27c5c496820c5ce65b29695c2ee89e0?placeholderIfAbsent=true&apiKey=0339c476d92443ac95849fae30c5eeb3",
    rating: "https://cdn.builder.io/api/v1/image/assets/TEMP/2499e588c271a000795c69608b52311c0cbb6a357032ba4c81a8f52ae30ea0e9?placeholderIfAbsent=true&apiKey=0339c476d92443ac95849fae30c5eeb3",
    type: "Clinc",
    price: "$",
    distance: "1.2 miles away",
    description: "Clinic that can provide asthma medication and assistance"
  },
  {
    name: "Bronx Cardiovascular Practice",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/1531b82c8fba4e0a377b0f4622366d579fd0feec862542eb91f11c727b19c5cf?placeholderIfAbsent=true&apiKey=0339c476d92443ac95849fae30c5eeb3",
    rating: "https://cdn.builder.io/api/v1/image/assets/TEMP/52bfcefdb29b52f5728ed4b88c74e6d098a6835ec4342cc39f53809fb15b35a3?placeholderIfAbsent=true&apiKey=0339c476d92443ac95849fae30c5eeb3",
    type: "Clinic",
    price: "$$",
    distance: "2.2 miles away",
    description: "Supporting line text lorem ipsum dolor sit amet, consectetur."
  }
];

const MainContent: React.FC = () => {
  return (
    <main className="flex flex-col grow shrink-0 self-end mt-9 basis-0 w-fit max-md:max-w-full">
      <h1 className="z-10 self-center font-size:30px font-Archivo italic -mt-1.5 text-5xl leading-none text-center text-black">
        Air Aware
      </h1>
      <div className="flex flex-col mt-7 w-full bg-white rounded-3xl min-h-[669px] max-md:max-w-full">
        <div className="flex gap-1 max-w-full bg-fuchsia-50 min-h-[26px] w-[809px]" />
        <div className="flex flex-col pr-5 pl-3 mt-1 w-full min-h-[330px] max-md:max-w-full">
          <div className="flex overflow-hidden flex-col w-full rounded-3xl min-h-[264px] max-md:max-w-full">
            <div className="flex py-6 w-full min-h-[148px] max-md:max-w-full" />
          </div>
          {/* New Image Section */}
          <div className="flex justify-center w-full my-6">
            <div className="relative w-[80%] max-w-[600px] h-[300px] rounded-lg overflow-hidden">
              {/* Replace the src with your backend URL when ready */}
              <img
                src="/api/placeholder/600/300"  // This is a temporary placeholder
                alt="Air Quality Data"
                className="w-full h-full object-cover"
              // When you're ready to connect to your backend, you can replace the src with:
              // src={`${YOUR_BACKEND_URL}/api/image`}
              />
              {/* Optional overlay for text or additional information */}
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 text-white p-4">
                <h3 className="text-lg font-semibold">Air Quality Information</h3>
                <p className="text-sm">Current air quality metrics and data</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-start px-4 py-2 mt-3 w-full text-sm font-medium tracking-normal leading-5 text-center whitespace-nowrap max-md:max-w-full">
            <div className="flex gap-0 justify-center items-center h-[3px] w-[172px]">
              <div className="flex flex-1 shrink justify-center self-stretch py-1 my-auto basis-0 min-h-[48px] text-zinc-600">
                <div className="flex overflow-hidden flex-col flex-1 shrink justify-center w-full bg-purple-200 border border-solid basis-0 border-zinc-500 rounded-[100px_0px_0px_100px]">
                  <div className="flex flex-1 gap-2 justify-center items-center px-3 py-2.5 size-full">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e8a8e59ef746e52c12db73b8bef64362a2437d6c56f80c33c086be1976e0e552?placeholderIfAbsent=true&apiKey=0339c476d92443ac95849fae30c5eeb3" alt="" className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]" />
                    <div className="self-stretch my-auto">Visited</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 shrink justify-center self-stretch py-1 my-auto basis-0 min-h-[48px] text-zinc-900">
                <div className="flex overflow-hidden flex-col flex-1 shrink justify-center w-full rounded-none border border-solid basis-0 border-zinc-500">
                  <div className="flex-1 gap-2 self-stretch px-3 py-2.5 size-full">
                    Not Visited
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col px-2 mt-1 w-full h-[210px] max-md:max-w-full">
          {clinics.map((clinic, index) => (
            <ClinicCard key={index} clinic={clinic} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default MainContent;