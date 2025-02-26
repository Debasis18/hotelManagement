import { Input } from "@/components/ui/input";
import FormRow from "@/ui/FromRow";
import { useSetting } from "./useSetting";
import Spinner from "@/ui/Spinner";
import { useEditSetting } from "./useEditSettings";

function UpdateSettingsForm() {
  const {
    isPending,
    settings: {
      minBookingLenghth,
      maxBookingLength,
      maxGuestPerBooking,
      breakfustPrice,
    } = {},
  } = useSetting();

  const { isEditing, editSetting } = useEditSetting();

  function handelUpdate(e, field) {
    const  value  =Number (e.target.value);
    if (!value) return;
    editSetting({ [field]: Number(value) });
  }

  if (isPending) return <Spinner />;
  return (
    <form className="flex flex-col gap-4">
      <FormRow label="Minimum nights/booking">
        <Input
          type="number"
          id="min-nights"
          defaultValue={minBookingLenghth}
          disabled={isEditing}
          onBlur={(e) => handelUpdate(e, "minBookingLenghth")}
        />
      </FormRow>

      <FormRow label="Maximum nights/booking">
        <Input type="number" id="max-nights" defaultValue={maxBookingLength}
         disabled={isEditing}
         onBlur={(e) => handelUpdate(e, "maxBookingLength")} />
      </FormRow>

      <FormRow label="Maximum guests/booking">
        <Input
          type="number"
          id="max-guests"
          defaultValue={maxGuestPerBooking}
          disabled={isEditing}
          onBlur={(e) => handelUpdate(e, "maxGuestPerBooking")}
        />
      </FormRow>

      <FormRow label="Breakfast price">
        <Input
          type="number"
          id="breakfast-price"
          defaultValue={breakfustPrice}
          disabled={isEditing}
          onBlur={(e) => handelUpdate(e, "breakfustPrice")}
        />
      </FormRow>
    </form>
  );
}

export default UpdateSettingsForm;
