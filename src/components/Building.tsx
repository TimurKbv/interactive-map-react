import { FC } from "react"
import { IBuilding } from "../models/IBuilding"
import { useAppDispatch, useAppSelector } from "../hooks/hooks"
import { setDetails, toggleDetailsStatus } from "../features/building/buildingSlice";



const Building: FC<IBuilding> = (building) => {
  // Redux
  const dispatch = useAppDispatch();
  const buildingDetails = useAppSelector(state => state.building.details)

  // prüfe ob die Gebauede schon ausgewaehlt ist, falls ja => details deaktivieren
  const buildingDetailsHandler = () => {
    if (building.id === buildingDetails?.id) {
      dispatch(toggleDetailsStatus(false));
      dispatch(setDetails(null));
      
    } else {
      dispatch(setDetails(building));
      console.log(building);
      dispatch(toggleDetailsStatus(true));
    }
  }

  return (
    // Gebauede
        <button 
          onClick={buildingDetailsHandler}
          className={" bg-violet-500 absolute border border-red-600 text-center text flex items-center justify-center hover:scale-95 transition-all duration-300 cursor-pointer"} 
          style={{ 
            width: building.Coordinates.Width, 
            height: building.Coordinates.Length,
            top: building.Coordinates.Y,
            left: building.Coordinates.X,
          }}
          
          > <span>{ building.Name }</span> </button>
  )
}

export default Building
