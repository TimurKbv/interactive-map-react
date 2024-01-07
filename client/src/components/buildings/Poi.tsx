import  { FC } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/Hooks'
import { setBuildingArt, toggleDetailsStatus } from '../../features/building/BuildingSlice'
import { BuildingArts, IPoi } from '../../models/IBuilding'
import { setPoiDetails } from '../../features/building/PoiSlice'

const Poi: FC<IPoi> = (b) => {
  // redux states
  const dispatch = useAppDispatch()
  const poiDetails = useAppSelector(state => state.poi.details)
  
// prüfe ob die Gebauede schon ausgewaehlt ist, falls ja => details deaktivieren
  const poiDetailsHandler = () => {
    if (poiDetails?.id === b.id) {
      dispatch(toggleDetailsStatus(false))
      dispatch(setPoiDetails(null))
    } else {
      dispatch(toggleDetailsStatus(true))
      dispatch(setPoiDetails(b))
      dispatch(setBuildingArt(BuildingArts.po))
    }
  }

  return (
    <button 
    onClick={poiDetailsHandler}
    key={b.id} className={" bg-zinc-600 absolute border  text-center text-white text flex items-center justify-center hover:scale-95 hover:bg-sky-500 transition-all duration-300 cursor-pointer"} 
    style={{ 
      width: b.size.width, 
      height: b.size.height,
      top: b.Coordinates.Y,
      left: b.Coordinates.X,
    }}
    
    > <span>{ b.Name }</span> </button>
  )
}

export default Poi
