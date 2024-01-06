import { FC } from 'react'
import { IBuilding } from '../../../models/IBuilding'

const BuildingInfo: FC<IBuilding> = ({image, Name, occupied, empty, address}) => {

    
  return (
      <div className=" mt-16 flex flex-col gap-3">
        <div className="w-full h-32 md:h-40 lg:h-54 xl:h-64 2xl:h-80 ">
          <img src={image} alt="Building picture" className=" w-full h-full  " />
        </div>
        <div className=' mx-5 '>
          <h2 className=" text-3xl mt-10 mb-5"> { Name } </h2>
          <h3 className="text-xl font-bold"> Occupied: <span className={occupied === empty ? "text-green-700" : "text-red-800"}> { occupied } </span> </h3>
          <h3 className="text-xl font-bold"> Empty: <span className="text-green-700"> { empty } </span> </h3>
          <div className=' mt-10'>
            <h4 className='font-bold text-lg'>Address:</h4>
            <p> { address  } </p>
          </div>
        </div>
      </div>
  )
}

export default BuildingInfo
