import { getPhotos } from "@/actions";
import { AppPhotosTable } from "./AppPhotosTable";

export async function PhotosWrapper() {
    const initialData = await getPhotos();
    return <AppPhotosTable initialData={initialData} />;
  }