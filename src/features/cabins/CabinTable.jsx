import Spinner from "@/ui/Spinner";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import CabinRows from "./CabinRows";
import { useCabins } from "./useCabins";
import { useSearchParams } from "react-router-dom";

function CabinTable() {
  const { isPending, cabins } = useCabins();
  const [serarchParams] = useSearchParams();

  const filterValue = serarchParams.get("discount") || "all";

  // FILTER
  let filteredCabins;
  if (filterValue === "all") filteredCabins = cabins;
  if (filterValue === "with-discount")
    filteredCabins = cabins.filter((cabin) => cabin.discount > 0);
  if (filterValue === "no-discount")
    filteredCabins = cabins.filter((cabin) => cabin.discount === 0);

  // SHORT
  const sortBy = serarchParams.get("sortBy") || "startDate-asc";

  const [filed, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;

  const sortCabins = filteredCabins?.sort(
    (a, b) => (a[filed] - b[filed]) * modifier
  );

  if (isPending) return <Spinner />;
  return (
    <div className="border rounded-sm p-2">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead></TableHead>
            <TableHead className="w-[100px]">CABIN</TableHead>
            <TableHead>CAPACITY</TableHead>
            <TableHead>PRICE</TableHead>
            <TableHead className="text-right">DISCOUNT</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortCabins.map((cabin) => (
            <CabinRows cabin={cabin} key={cabin.id} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default CabinTable;
