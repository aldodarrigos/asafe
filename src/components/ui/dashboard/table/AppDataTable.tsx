'use client';

import { useState, useMemo } from 'react';
import { usePagination }  from '@/hooks/usePagination';
import { AppButton } from '@/components';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

interface DataTableProps {
  data: any[];
  columns: {
    key: string;
    label: string;
  }[];
  itemsPerPage?: number;
}

export const AppDataTable = ({ data, columns, itemsPerPage = 10 }: DataTableProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const { totalPages, paginatedItems, hasNextPage, hasPrevPage } = usePagination({
    totalItems: data.length,
    itemsPerPage: itemsPerPage,
    currentPage,
  });

  const currentItems = useMemo(() => 
    paginatedItems(data),
    [data, currentPage]
  );

  return (
    <div>
      <table className="min-w-full divide-y divide-gray-200 text-gray-800 dark:text-white">
        <thead >
          <tr>
            {columns.map((column) => (
              <th key={column.key}>{column.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item, index) => (
            <tr className='text-center border-spacing-4' key={index}>
              {columns.map((column) => (
                <td className='p-2' key={`${index}-${column.key}`}>{item[column.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination-controls mt-5 flex justify-center items-center">
        <AppButton
          className='text-gray-800 dark:text-white'
          size='sm'
          onClick={() => setCurrentPage(prev => prev - 1)}
          disabled={!hasPrevPage}
          variant={!hasPrevPage ? 'disabled' : 'primary'}
        >
          <IoIosArrowBack size={15} />
        </AppButton>
        <span className='text-gray-800 dark:text-white'>
          Page {currentPage} of {totalPages}
        </span>
        <AppButton
          className='text-gray-800 dark:text-white'
          size='sm'
          onClick={() => setCurrentPage(prev => prev + 1)}
          disabled={!hasNextPage}
          variant={!hasNextPage ? 'disabled' : 'primary'}
        >
          <IoIosArrowForward size={15} />
        </AppButton>
      </div>
    </div>
  );
};
