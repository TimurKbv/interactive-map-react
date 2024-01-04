import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { toggleDetailsStatus } from "../features/building/buildingSlice";
import { SlClose } from "react-icons/sl";

const Details = () => {
  const details = useAppSelector((state) => state.building.details);
  const status = useAppSelector((state) => state.building.detailsStatus);
  const dispatch = useAppDispatch();

  return (
    <section
      className={
        status
          ? "fixed top-[16.7vh] bottom-[8.3vh] right-0 bg-slate-400 w-3/12  "
          : "hidden"
      }
    >
      {/* Building info */}
      <div className=" m-16 flex flex-col gap-3">
        <img src={details?.image} alt="Building picture" className=" w-full h-28 md:h-44 " />
        <h2 className=" text-3xl mt-10"> { details?.Name } </h2>
        <h3 className="text-xl font-bold"> Occupied: <span className="text-red-800"> { details?.occupied } </span> </h3>
        <h3 className="text-xl font-bold"> Empty: <span className="text-green-700"> { details?.empty } </span> </h3>
      </div>

      {/* Close Details button */}
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
