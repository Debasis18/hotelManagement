import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import FormRow from "@/ui/FromRow";
import { useCreateCabin } from "./useCreateCabin";
import { useEditCabin } from "./useEditCabin";

function CreateCabinForm({ cabinToEdit = {}, onCloseModel }) {
  const { id: editId, ...editValues } = cabinToEdit;
  const isEditSession = Boolean(editId);

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });

  const { createCabin, isCreating } = useCreateCabin();
  const { editCabin, isEditing } = useEditCabin();
  const isWorking = isCreating || isEditing;

  const onSubmit = (data) => {
    const image = typeof data.image === "string" ? data.image : data.image[0];
    if (isEditSession)
      editCabin(
        { newCabinData: { ...data, image }, id: editId },
        {
          onSuccess: (data) => {
            reset();
            console.log(data);
          },
        }
      );
    else
      createCabin(
        { ...data, image: image },
        {
          onSuccess: (data) => {
            reset();
            onCloseModel?.()
            console.log(data);
          },
        }
      );
  };

  // Handle errors during submission
  const onError = (formErrors) => {
    console.log("Form Errors:", formErrors);
  };

  return (
    <form
      className="space-y-6 mt-5 p-8 rounded-md bg-white shadow-md"
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      {/* Cabin Name */}
      <FormRow label="Cabin name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          placeholder="Enter cabin name"
          {...register("name", { required: "Cabin name is required" })}
        />
      </FormRow>

      {/* Maximum Capacity */}
      <FormRow label="Maximum capacity" error={errors?.maxCapacity?.message}>
        <Input
          type="number"
          id="maxCapacity"
          placeholder="Enter maximum capacity"
          {...register("maxCapacity", {
            required: "Maximum capacity is required",
            min: { value: 1, message: "Capacity must be at least 1" },
          })}
        />
      </FormRow>

      {/* Regular Price */}
      <FormRow label="Regular price" error={errors?.regularPrice?.message}>
        <Input
          type="number"
          id="regularPrice"
          placeholder="Enter regular price"
          {...register("regularPrice", {
            required: "Regular price is required",
            min: { value: 1, message: "Price must be at least 1" },
          })}
        />
      </FormRow>

      {/* Discount */}
      <FormRow label="Discount" error={errors?.discount?.message}>
        <Input
          type="number"
          id="discount"
          placeholder="Enter discount"
          defaultValue={0}
          {...register("discount", {
            required: "Discount is required",
            validate: (value) =>
              value <= getValues().regularPrice ||
              "Discount must be less than the regular price",
          })}
        />
      </FormRow>

      {/* Description */}
      <FormRow
        label="Description for website"
        error={errors?.description?.message}
      >
        <Textarea
          id="description"
          placeholder="Enter a description"
          {...register("discription", {
            required: "Description is required",
          })}
        />
      </FormRow>

      {/* Cabin Photo */}
      <FormRow label="Cabin photo">
        <Input
          type="file"
          id="image"
          accept="image/*"
          {...register("image", {
            required: isEditSession ? false : "Description is required",
          })}
        />
      </FormRow>

      {/* Action Buttons */}
      <div className="flex justify-end gap-4">
        <Button type="reset" variant="outline" onClick={() => onCloseModel?.()}>
          Cancel
        </Button>
        <Button type="submit" disabled={isSubmitting || isWorking}>
          {isEditSession ? "EditCabin" : "Create new"}
          {/* {isSubmitting ? "Adding..." : "Add cabin"} */}
        </Button>
      </div>
    </form>
  );
}

export default CreateCabinForm;
