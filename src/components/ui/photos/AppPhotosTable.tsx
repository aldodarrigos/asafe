'use client';

import { PhotoResponse } from "@/interfaces";
import Image from "next/image";
import { AppButton } from "@/components";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState } from "react";

const columns = [
    { key: 'id', label: 'ID' },
    { key: 'title', label: 'Title' },
    { key: 'thumbnailUrl', label: 'Image' },
  ];

export function AppPhotosTable({ initialData }: { initialData: PhotoResponse }) {
    const [data, setData] = useState(initialData);
    const [isLoading, setIsLoading] = useState(false);
  
    const handlePageChange = async (newPage: number) => {
        try {
            setIsLoading(true);
            const response = await fetch(`/api/photos?page=${newPage}`);
            if (!response.ok) {
                throw new Error('Failed to fetch photos');
            }
            const newData = await response.json();
            setData(newData);
        } catch (error) {
            console.error('Error fetching photos:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={`transition-opacity duration-200 ${isLoading ? 'opacity-50' : 'opacity-100'}`}>
            <table className="min-w-full divide-y divide-gray-200 text-gray-800 dark:text-white">
                <thead>
                    <tr>
                        {columns.map((column) => (
                            <th key={column.key} className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                                {column.label}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {data.data.map((item) => (
                        <tr key={item.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                            <td className="px-6 py-4 whitespace-nowrap">{item.id}</td>
                            <td className="px-6 py-4">{item.title}</td>
                            <td className="px-6 py-4">
                                <Image
                                    src={item.thumbnailUrl}
                                    alt={item.title}
                                    width={100}
                                    height={100}
                                    className="rounded-md"
                                    priority={false}
                                    loading="lazy"
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="mt-5 flex justify-center items-center gap-4">
                <AppButton
                    onClick={() => handlePageChange(data.currentPage - 1)}
                    disabled={data.currentPage === 1 }
                    variant={data.currentPage === 1 ? 'disabled' : 'primary'}
                >
                    <IoIosArrowBack size={15} />
                </AppButton>
                <span className="text-gray-900 dark:text-white">
                    Page {data.currentPage} of {data.totalPages}
                </span>
                <AppButton
                    onClick={() => handlePageChange(data.currentPage + 1)}
                    disabled={data.currentPage === data.totalPages }
                    variant={data.currentPage === data.totalPages ? 'disabled' : 'primary'}
                >
                    <IoIosArrowForward size={15} />
                </AppButton>
            </div>
        </div>
    );
}
