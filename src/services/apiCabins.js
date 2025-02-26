import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error(error);
    throw new Error("Cabin could not be loaded");
  }
  return data;
}

export async function deleteCabin(id) {
  console.log("Ei ei cptain");

  const { error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be deleted");
  }
}

export async function createEditCabin(newCabin, id) {
  // note that 1st file name is path is created and image is upload to that path
  // when update is clicked newCabin.image has already subabase url
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

  // creating image name
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );

  // creating path
  // If url already exist then that is image path otherwise create new path
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  //  1.Create/edit Cabin
  let query = supabase.from("cabins");
  // A. Create
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

  // B.EDIT
  if (id) query = query.update({ ...newCabin, image: imagePath }).eq("id", id);

  const { data, error } = await query.select().single(); // returning data

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be deleted");
  }

  //  2.upload Image
  if (hasImagePath) return data;
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  // 3. Delete the cabin if there was an error by creating image
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error("Cabin could not be deleted becz image couldnot uploaded");
  }
}
