import { TableCell, TableRow } from "@/components/ui/table";

function BookingRows({ bookings }) {
  const {
    id,
    guests,
    startDate,
    endDate,
    numNights,
    numGuests,
    status,
    totalPrice,
  } = bookings;

  return (
    <TableRow className="border-b hover:bg-gray-50 transition duration-300 ease-in-out">
    <TableCell className="font-medium text-gray-800 py-4 px-4 w-44">
      {id}
    </TableCell>
  
    <TableCell className="text-gray-700 py-4 px-4 w-64">
      <div className="flex flex-col space-y-1">
        <span className="font-semibold text-gray-900">{guests.fullName}</span>
        <span className="text-sm text-gray-500">{guests.email}</span>
      </div>
    </TableCell>
  
    <TableCell className="text-gray-700 py-4 px-4 w-80">
      <div className="flex flex-col space-y-1">
        <span className="text-gray-900">
          {numGuests} Guest(s) | {numNights} Night(s)
        </span>
        <span className="text-sm text-gray-500">
          {new Date(startDate).toLocaleDateString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
          })}
          →
          {new Date(endDate).toLocaleDateString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
          })}
        </span>
      </div>
    </TableCell>
  
    <TableCell className="py-4 px-4 w-4">
      <span
        className={`inline-flex items-center justify-center rounded-full text-sm font-medium px-3 py-1 ${
          status === "confirmed"
            ? "text-green-800 bg-green-100"
            : "text-blue-800 bg-blue-100"
        }`}
      >
        {status}
      </span>
    </TableCell>
  
    <TableCell className="text-right font-semibold text-gray-900 py-4 px-4">
      ${totalPrice}
    </TableCell>
  </TableRow>
  );
}

export default BookingRows;
