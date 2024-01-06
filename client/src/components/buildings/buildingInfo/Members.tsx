import { IoIosPeople } from "react-icons/io";


const Members = ({members}) => {
  return (
    <div className="flex gap-3">
      <div className="text-2xl"> <IoIosPeople  /> </div>
      <span> { members } </span>
    </div>
  )
}

export default Members
