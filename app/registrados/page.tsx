import truksarray from "../../json/truksarray.json";
import TruckCard from "../components/TruckCard";
export default function Page() {
  return (
    <div className="grid text-center lg:mb-0 lg:w-full lg:max-w-10xl lg:grid-cols-5 lg:text-left">
      {truksarray.map((truck, index) => {
        return (
          <div className="m-1" key={index}>
            <TruckCard
              image={truck.image}
              title={truck.title}
              description={truck.description}
              province={truck.province}
              municipio={truck.municipio}
              chofer={truck.chofer}
              solicitudes={truck.solicitudes}
            />
          </div>
        );
      })}
    </div>
  );
}
