import { useAppDispatch, useAppSelector } from "../../hooks/Hooks";
import { toggleDetailsStatus } from "../../features/building/BuildingSlice";
import { SlClose } from "react-icons/sl";
import BuildingInfo from "./buildingInfo/BuildingInfo";
import { BuildingArts } from "../../models/IBuilding";
import PoiInfo from "./buildingInfo/PoIInfo";


const Details = () => {
  // building state
  const buildingDetails = useAppSelector((state) => state.building.details);
  const buildingStatus = useAppSelector((state) => state.building.detailsStatus);
  const art = useAppSelector(state => state.building.buildingArt)
  const dispatch = useAppDispatch();
  // POI state
  const poiDetails = useAppSelector(state => state.poi.details)
  
  return (
    <section
      className={
        buildingStatus
          ? "fixed top-[16.6vh] bottom-[8.3vh] right-0 bg-slate-400 w-3/12 overflow-auto border-l-2 border-white"
          : "hidden"
      }
    >
      {/* Da POIs und Buildings verschiedene infos haben, wird es nach Gebauedetyp geprüft und entscheden welche Infos man zeigt */}
      { art === BuildingArts.building ? <BuildingInfo {...buildingDetails} /> : <PoiInfo {...poiDetails} /> }

      {/* Close Button */}
      <div
        className="absolute right-0 top-0 text-2xl px-4 py-2 flex  hover:text-red-500 transition-all text-black cursor-pointer"
        onClick={() => dispatch(toggleDetailsStatus(false))}
      >
        <SlClose />
      </div>
      
    </section>
  );
};

export default Details;
