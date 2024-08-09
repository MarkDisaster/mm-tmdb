export interface PaginationProps {
   currentPage: number;
   totalPages: number;
   handleOnPageChange: (page: number) => void;
}
