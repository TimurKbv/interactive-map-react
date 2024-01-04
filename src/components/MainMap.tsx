import Details from "./Details"
import data from "../data/data.json"
import ScrollContainer from 'react-indiana-drag-scroll'
import { FC, useState } from "react"
import Building from "./Building"



const MainMap: FC = () => {


  return (
    <ScrollContainer className="scroll-container w-full relative bg-gray-200 col-start-2 col-span-7 row-start-3 row-span-9 overflow-scroll">
      
      {
        data.Buildings.map(b => (

          <Building key={b.id} id={b.id} Name={b.Name} Coordinates={b.Coordinates} image={b.image} occupied={b.occupied} empty={b.empty} />
        ))
      }
      {/* Streeet */}
      <div className="absolute top-56 bg-gray-500 w-screen h-40"></div>

      <div className="absolute top-56 left-full bg-gray-500 w-40 h-screen"></div>

      {
        data.POIs.map(b => (
          <div 
            key={b.id} className={" bg-violet-500 absolute border border-red-600 text-center text flex items-center justify-center"} 
            style={{ 
              width: b.size.width, 
              height: b.size.height,
              top: b.Coordinates.Y,
              left: b.Coordinates.X,
            }}
            
            > <span>{ b.Name }</span> </div>
        ))
      }


      {/* Details section */}
      <Details />
    </ScrollContainer>
  )
}

export default MainMap
