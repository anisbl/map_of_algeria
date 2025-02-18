import AlgeriaMap from "./AlgeriaMap";

export default function Home() {
  return (
    <div className="App w-full h-full flex flex-col justify-center items-center p-4">
      
      <h1 className="text-3xl md:text-4xl font-semibold text-center mb-6">
        Algeria Map - 58 Wilayas by Anisbl
      </h1>

     
      <div className="flex justify-center items-center w-full h-[60vh] md:h-[80vh] bg-gray-100 p-4 rounded-lg shadow-lg">
        <AlgeriaMap />
      </div>
    </div>
  );
}
