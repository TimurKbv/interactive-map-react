import data from "../data/data.json"
import ScrollContainer from 'react-indiana-drag-scroll'
import { FC, useEffect, useState } from "react"
import Building from "./buildings/Building"
import Po from "./buildings/Po"
import Details from "./buildings/Details"
import { IBuilding, IPo } from "../models/IBuilding"

const MainMap: FC = () => {
  const [buildingsData, setBuildingsData] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      setBuildingsData(data)
    }, 2000)

  }, [])

  

  return (
    <ScrollContainer className="scroll-container w-full relative bg-gray-200 col-start-2 col-span-7 row-start-3 row-span-9 overflow-scroll">
      {/* Buildings */}
      {
        buildingsData?.Buildings.map((b: IBuilding) => (

          <Building {...b} key={b.id} />
        ))
      }

      {/* Streeets */}
      <div className="absolute top-56 bg-gray-400 w-[3100px] h-40"></div>
      <div className="relative top-56 left-[1100px]  bg-gray-400 w-40 h-screen"></div>
      <div className="absolute top-full bg-gray-400 w-[3100px] h-40"></div>

      {/* PO's */}
      {
        buildingsData?.POIs.map((b: IPo) => (
          <Po { ...b }  key={b.id}/>
        ))
      }

      {/* Details section */}
      <Details />

    </ScrollContainer>
  )
}

export default MainMap
