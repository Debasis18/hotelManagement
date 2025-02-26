import { getBookings } from "@/services/apiBookings";
import { useQuery } from "@tanstack/react-query";

export function useBookings() {
  const {
    isPending,
    data: bookings,
    error,
  } = useQuery({
    queryKey: ["bookings"],
    queryFn: getBookings,
  });

  return { isPending, error, bookings };
}
