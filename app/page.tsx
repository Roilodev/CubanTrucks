import Truckcard from "./components/Truckcard";
import arreglo from "../json/truksarray.json";

export default function Home() {
  return (
    <>
      <div className="grid text-center lg:mb-0 lg:w-full lg:max-w-10xl lg:grid-cols-5 lg:text-left">
        {arreglo.map((truck, index) => {
          return (
            <Truckcard
              key={index}
              image={truck.image}
              title={truck.title}
              description={truck.description}
              province={truck.province}
              municipio={truck.municipio}
              chofer={truck.chofer}
              solicitudes={truck.solicitudes}
            />
          )
        })}
      </div>      
    </>
  );
}
