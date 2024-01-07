import { FC } from "react"
import {  BuildingArts, IBuilding } from "../../models/IBuilding"
import { useAppDispatch, useAppSelector } from "../../hooks/Hooks"
import { setBuildingArt, setDetails, toggleDetailsStatus } from "../../features/building/BuildingSlice";
import Members from "./buildingInfo/Members";



const Building: FC<IBuilding> = (building) => {
  // Redux states
  const dispatch = useAppDispatch();
  const buildingDetails = useAppSelector(state => state.building.details)

  // prüfe ob die Gebauede schon ausgewaehlt ist, falls ja => details deaktivieren
  const buildingDetailsHandler = () => {
    if (building.id === buildingDetails?.id) {
      dispatch(toggleDetailsStatus(false));
      dispatch(setDetails(null));
      
    } else {
      dispatch(setDetails(building));
      dispatch(toggleDetailsStatus(true));
      dispatch(setBuildingArt(BuildingArts.building))
    }
  }


  return (
    // Building
        <button 
          onClick={buildingDetailsHandler}
          className={ building.empty === building.occupied ? " bg-zinc-600 absolute  border-8 border-green-400 text-center text-white text flex  flex-wrap items-center justify-center hover:scale-95 hover:bg-sky-500 transition-all duration-300 cursor-pointer" : " bg-zinc-600 absolute  border-8 border-red-400 text-center text-white text flex flex-wrap items-center justify-center hover:scale-95 hover:bg-sky-500 transition-all duration-300 cursor-pointer"   } 
          style={{ 
            width: building.Coordinates.Width, 
            height: building.Coordinates.Length,
            top: building.Coordinates.Y,
            left: building.Coordinates.X,
          }}
          
          > 
            <span className="px-10">{ building.Name }</span> 
            <Members members={building.occupied} />
          </button>
  )
}

export default Building
