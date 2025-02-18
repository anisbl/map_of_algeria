import AlgeriaMap from "./AlgeriaMap";
// import AlgeriaMap2 from "./AlgeriaMapp";
export default function Home() {
  return (
    <div className="App w-[95vw] h-full flex flex-col justify-center items-center "> 
    <h1>Algeria Map 58 wilaya by anisbl </h1>
    <div className="flex w-[80vw] h-[80vh] ">
      <AlgeriaMap />
    
    </div>
    
  </div>
  );
}
