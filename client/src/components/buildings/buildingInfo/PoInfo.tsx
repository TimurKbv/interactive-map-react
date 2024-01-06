import { FC } from "react"
import { IPo } from "../../../models/IBuilding"


const PoInfo: FC<IPo> = ({image, Name, description}) => {
  return (
    <div className=" mt-16 flex flex-col gap-3">
        <div className="w-full h-32 md:h-40 lg:h-54 xl:h-64 2xl:h-80 ">
            <img src={image} alt="PO picture" className=" w-full h-full object-cover " />
        </div>
        <div className="mx-5">
            <h2 className=" text-xl xl:text-3xl mt-10"> { Name } </h2>
            <p className="text-xs md:text-md xl:text-lg"> { description } </p>
        </div>
  </div>
  )
}

export default PoInfo
