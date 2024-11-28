
// import { getPhotos } from '@/actions/photos';
import { AppPhotosTable, AppPhotoTableLoading, PhotosWrapper } from '@/components';
import { Suspense } from 'react';


export const metadata = {
  title: 'Dashboard | Photos',
  description: 'Dashboard page'
}

export const dynamic = 'force-dynamic'
export default async function PhotosPage() {
  // const initialData = await getPhotos()
  return (
    <main className="flex-1 overflow-y-auto p-2 sm:p-5 dark:py-0 dark:sm:py-0 ">
      <div className="container mx-auto p-4">
        <Suspense fallback={<AppPhotoTableLoading />}>
          <PhotosWrapper/>
        </Suspense>
      </div>
    </main>
  );
};