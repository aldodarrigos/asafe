interface UsePaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
}

export const usePagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
}: UsePaginationProps) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const paginatedItems = (items: any[]) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return items.slice(startIndex, endIndex);
  };

  return {
    totalPages,
    paginatedItems,
    hasNextPage: currentPage < totalPages,
    hasPrevPage: currentPage > 1,
  };
};
