import Bidcard from "./components/Bidcard";
import bidarray from "../json/bidarray.json";
import { ThemeSwitcher } from "./components/ThemeSwitcher";

export default function Home() {
  return (
    <>
      <ThemeSwitcher/>
      <div className="grid text-center g:mb-0 lg:w-full lg:max-w-10xl lg:grid-cols-5 lg:text-left">
        {bidarray.map((bid, index) => {
          return (
            <div className="m-1" key={index}>
              <Bidcard
                image={bid.image}
                title={bid.title}
                description={bid.description}
                peso={bid.peso}
                volumen={bid.volumen}
                precio={bid.precio}
                solicitudes={bid.solicitudes}
                distancia={bid.distancia}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
