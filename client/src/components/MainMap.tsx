// import data from "../data/data.json";
import { FC, useEffect, useState } from "react";
import Building from "./buildings/Building";
import Poi from "./buildings/Poi";
import Details from "./buildings/Details";
import { IBuilding, IPoi } from "../models/IBuilding";
import { MapInteractionCSS } from "react-map-interaction";
import axios from "axios";

const MainMap: FC = () => {
  const [buildings, setBuildings] = useState(null);

  useEffect(() => {
    // simuliere loading
    setTimeout(() => {
      // fetche daten
      fetchData();
    }, 2000);

  }, []);

  function fetchData() {
    try {
      axios.get("http://localhost:8080/").then((response) => {
        setBuildings(response.data[0]);
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {buildings ? (
        <div className="w-full relative bg-gray-200 col-start-2 col-span-7 row-start-3 row-span-9 overflow-scroll">
          {/* Container für die interaktive Karte (react-map-interaction Bibliothek) */}
          <MapInteractionCSS className="relative">
            {/* Buildings */}
            {buildings?.Buildings.map((b: IBuilding) => (
              <Building {...b} key={b.id} />
            ))}

            {/* Streeets */}
            <div className="absolute top-56 bg-gray-400 w-[3100px] h-40"></div>
            <div className="relative top-56 left-[1100px]  bg-gray-400 w-40 h-screen"></div>
            <div className="absolute top-[1000px] bg-gray-400 w-[3100px] h-40"></div>

            {/* POI's */}
            {buildings?.POIs.map((b: IPoi) => (
              <Poi {...b} key={b.id} />
            ))}
          </MapInteractionCSS>

          {/* Details section */}
          <Details />
        </div>
      ) : (
        <h1 className="text-center mt-28 text-9xl col-start-2 col-span-7 row-start-3 row-span-9 ">
          Loading...
        </h1>
      )}
    </>
  );
};

export default MainMap;
