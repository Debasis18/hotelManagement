import { useBookings } from "./useBookings";
import Spinner from "@/ui/Spinner";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import BookingRows from "./BookingRow";
import Empty from "@/ui/Empty";

function BookingTable() {
  const { bookings, isPending } = useBookings();
  if(!bookings,length) return <Empty resource="bookings"/>

  if (isPending) return <Spinner />;

  return (
    <div className="border rounded-sm p-2">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Cabin</TableHead>
            <TableHead className="w-[100px]">Guest</TableHead>
            <TableHead>Dates</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bookings.map((bookings) => (
            <BookingRows bookings={bookings} key={bookings.id} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default BookingTable;
