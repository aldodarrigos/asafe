'use client';

import { AppDataTable } from '@/components';
import { useFetch } from '@/hooks/useFetch';
import { useEffect } from 'react';

interface Photo {
  id: number;
  title: string;
  thumbnailUrl: string;
}

export default function PhotosPage() {
  const columns = [
    { key: 'id', label: 'ID' },
    { key: 'title', label: 'Title' },
    { key: 'thumbnailUrl', label: 'Image' },
  ];

    const { data, loading, error } = useFetch<Photo[]>('https://jsonplaceholder.typicode.com/photos');


  useEffect(() => {
    console.log(data);
  }, [data]);


  return (
    <main className="flex-1 overflow-y-auto p-2 sm:p-5 dark:py-0 dark:sm:py-0 ">
      <div className="container mx-auto p-4">
        <AppDataTable data={data || []} columns={columns} />
      </div>
    </main>
  );
};