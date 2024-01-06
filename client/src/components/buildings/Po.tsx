import  { FC } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/Hooks'
import { setPoDetails } from '../../features/building/PoSlice'
import { setBuildingArt, toggleDetailsStatus } from '../../features/building/BuildingSlice'
import { BuildingArts, IPo } from '../../models/IBuilding'

const Po: FC<IPo> = (b) => {
  const dispatch = useAppDispatch()
  const poDetails = useAppSelector(state => state.po.details)
  

  const poDetailsHandler = () => {
    if (poDetails?.id === b.id) {
      dispatch(toggleDetailsStatus(false))
      dispatch(setPoDetails(null))
    } else {
      dispatch(toggleDetailsStatus(true))
      dispatch(setPoDetails(b))
      dispatch(setBuildingArt(BuildingArts.po))
    }

    
  }

  return (
    <button 
    onClick={poDetailsHandler}
    key={b.id} className={" bg-zinc-600 absolute border border-red-600 text-center text-white text flex items-center justify-center hover:scale-95 transition-all duration-300 cursor-pointer"} 
    style={{ 
      width: b.size.width, 
      height: b.size.height,
      top: b.Coordinates.Y,
      left: b.Coordinates.X,
    }}
    
    > <span>{ b.Name }</span> </button>
  )
}

export default Po
