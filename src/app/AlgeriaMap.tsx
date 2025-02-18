'use client'
import { useState } from "react";
import metadata from "./metadata";
import { toast } from "react-hot-toast";

const AlgeriaMap = () => {
  const [selectedWilaya, setSelectedWilaya] = useState<string>('null as string xd');

  const handleWilayaClick = (wilayaName:string) => {
    setSelectedWilaya(wilayaName);
    toast.success(`You selected ${wilayaName}`);
    console.log(`You clicked on: ${wilayaName}`);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="rounded-lg shadow-lg bg-white p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Algeria Provinces Map
        </h2>
        <div className="relative w-full h-auto">
          <svg
            viewBox="0 0 1000 1000"
            className="w-full h-auto"
            xmlns="http://www.w3.org/2000/svg"
          >
            {Object.entries(metadata.paths).map(([wilayaId, path], index) => (
              <path
                key={index}
                d={path}
                fill={"#C2C2C2"}
                // here you can change the colors depending on your data by a simple conditions hanndeling
                stroke="#1F2937"
                strokeWidth="1"
                className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={() =>
                  handleWilayaClick(
                    metadata.names[wilayaId as keyof typeof metadata.names]
                  )
                }
              />
            ))}
          </svg>
        </div>
        {selectedWilaya && (
          <div className="mt-4 p-3 bg-gray-50 rounded-md">
            <p className="text-gray-700">
              Selected Province: <span className="font-semibold">{selectedWilaya}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AlgeriaMap;
