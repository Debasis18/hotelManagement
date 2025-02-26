import { updateSetting } from "@/services/apiSettings";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useEditSetting() {
  const queryClient = useQueryClient();

  const { isLoading: isEditing, mutate: editSetting } = useMutation({
    mutationFn:(variables)=> updateSetting(variables),
    onSuccess: () => {
      toast.success("Settings successfully updated");
      queryClient.invalidateQueries({ queryKey: ["settings"] });
    },
    onError: (err) => {
      toast.error(err?.message || "An error occurred");
    },
  });

  return { editSetting, isEditing };
}
