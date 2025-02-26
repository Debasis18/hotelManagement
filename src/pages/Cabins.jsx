import AddCabins from "@/features/cabins/AddCabins";
import CabinTable from "@/features/cabins/CabinTable";
import CabinTableOperation from "@/features/cabins/CabinTableOperation";

function Cabins() {
  return (
    <div>
      <div className="flex  justify-between items-center">
        <h1 className="text-xl "> All Cabins</h1>
        <CabinTableOperation />
      </div>

      <CabinTable />
      <AddCabins />
    </div>
  );
}

export default Cabins;
