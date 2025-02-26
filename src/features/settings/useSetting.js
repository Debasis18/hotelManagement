import { getSettings } from "@/services/apiSettings";
import { useQuery } from "@tanstack/react-query";

export function useSetting() {
  const { isPending, data: settings } = useQuery({
    queryKey: ["setting"],
    queryFn: getSettings,
  });
  return { isPending, settings };
}
