'use client'
import { useState } from "react";
import metadata from "./metadata";
import toast from "react-hot-toast";

const AlgeriaMap = () => {
  const [selectedWilaya, setSelectedWilaya] = useState<string | null>(null);


  const handleWilayaClick = (wilayaName: string) => {
    setSelectedWilaya(wilayaName);
    toast.success(`you selected ${wilayaName}`)
    console.log(`You clicked on: ${wilayaName}`);
  };

  return (
    <div className="relative w-full h-auto">
   
    <svg
      viewBox="0 0 1000 1000"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
    >
      {Object.entries(metadata.paths).map(([wilayaId , path ,], index) => (
        <path
          key={index}
          d={path}
          fill={selectedWilaya === wilayaId ? "lightblue" : "lightgray"}
          stroke="black"
          strokeWidth="1"
          className="cursor-pointer hover:fill-blue-400 transition"
          onClick={() =>
            handleWilayaClick(metadata.names[wilayaId as keyof typeof metadata.names])
          }
        />
      ))}
    </svg>
  </div>
  );
};

export default AlgeriaMap;
